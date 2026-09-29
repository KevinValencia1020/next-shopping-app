import {type Request, type Response, type NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../lib/config.ts';

const verificarJWT = (req: Request, res: Response, next: NextFunction) => {
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
export { verificarJWT };