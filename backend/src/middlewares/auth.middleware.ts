/**
   @file: auth.middleware.ts
   @description: Este archivo contiene los middlewares de autenticacion y autorizacion para la aplicacion. Se encarga de verificar la validez de los tokens JWT proporcionados por los usuarios, asi como de verificar el rol de los usuarios para permitir o denegar el acceso a ciertas rutas protegidas.
 */
import {type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../lib/config.ts';
import { Role } from '@prisma/client';
import prisma from '../lib/prisma.ts';

export const verificarJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const tokenCookie = req.cookies.token;
    if (!tokenCookie) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const decoded = jwt.verify(tokenCookie, JWT_SECRET);

    if (typeof decoded === "string") {
      throw new Error('El token no contiene un payload en formato de objeto');
    }
    
    if (typeof decoded.id !== 'string') {
      throw new Error('El ID del usuario no es una cadena de texto');
    }
    req.user = { id: decoded.id }; // Asignar el ID del usuario al objeto req.user
    
    next();
  } catch (err) {
    console.error('Error al verificar el token JWT:', err);
    res.status(401).json({ message: 'Token JWT inválido o expirado' });
  }

}

export const verificarAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    if (!req.user) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }
    // Verificar el rol del usuario en la base de datos
    const dbUser = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { role: true }
    });

    if (!dbUser || dbUser.role !== Role.ADMIN) {
      return res.status(403).json({ message: 'Acceso denegado. Se requiere rol de administrador' });
    }
    next();

  } catch (err) {
    console.error('Error al verificar el rol de administrador:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
