/**
    @file: authController.ts
    @description: Este archivo contiene el controlador de autenticacion para la aplicacion. Se encarga de manejar las solicitudes relacionadas con el registro de usuarios, incluyendo la creacion de nuevos usuarios en la base de datos, la verificacion de correos electrónicos duplicados, el hash de contraseñas y la generacion de tokens JWT para la autenticación.
*/
import { type Request, type Response } from 'express';
import prisma from '../lib/prisma.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const emailExists = await prisma.user.findUnique({
      where: {
        email,
      }
    });

    if (emailExists) {
      return res.status(409).json({ message: 'El email ya esta registrado'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      }
    });

    
    const token = jwt.sign({ id: newUser.id}, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 1000 });
    
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });

  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
}