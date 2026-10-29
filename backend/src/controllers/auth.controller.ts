/**
    @file: auth.controller.ts
    @description: Este archivo contiene el controlador de autenticacion para la aplicacion. Se encarga de manejar las solicitudes relacionadas con el registro de usuarios, incluyendo la creacion de nuevos usuarios en la base de datos, la verificacion de correos electrónicos duplicados, el hash de contraseñas y la generacion de tokens JWT para la autenticación.
*/
import { type Request, type Response } from 'express';
import prisma from '../lib/prisma.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../lib/config.ts';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    const errors = validateRegistration(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: 'Errores de validación', errors });
    }

    const firstNameTrimmed = firstName.trim();
    const lastNameTrimmed = lastName.trim();
    const emailTrimmed = email.trim().toLowerCase();
    const phoneNormalized = phone?.trim() || undefined;

    const emailExists = await prisma.user.findUnique({
      where: {
        email: emailTrimmed,
      }
    });

    if (emailExists) {
      return res.status(409).json({ message: 'El email ya esta registrado'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName: firstNameTrimmed,
        lastName: lastNameTrimmed,
        email: emailTrimmed,
        phone: phoneNormalized,
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
    
    const token = jwt.sign({ id: newUser.id}, JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 1000 });
    
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });

  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
}

export const validateRegistration = (body: Record<string, unknown>): string[] => {
  const errors: string[] = [];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // formato de email
  const passwordRegex = /^.{8,}$/; // al menos 8 caracteres
  const nameRegex = /^[\p{L}\s]+$/u; // solo letras, incluyendo acentos y caracteres unicode
  const phoneRegex = /^[0-9]{10}$/; // solo numeros de 10 digitos
  const phoneEmpty = body.phone === undefined || (typeof body.phone === 'string' && body.phone.trim() === '');

  if (typeof body.email !== 'string' || !emailRegex.test(body.email.trim().toLowerCase())) {
    errors.push('El email es requerido y debe ser un email valido');
  }

  if (typeof body.password !== 'string' || !passwordRegex.test(body.password)) {
    errors.push('La contraseña es requerida y debe tener al menos 8 caracteres');
  }

  if (typeof body.firstName !== 'string' || !nameRegex.test(body.firstName.trim())) {
    errors.push('El nombre es requerido');
  }

  if (typeof body.lastName !== 'string' || !nameRegex.test(body.lastName.trim())) {
    errors.push('El apellido es requerido');
  }

  if (!phoneEmpty) {
    if (typeof body.phone !== 'string' || !phoneRegex.test(body.phone.trim())) {
      errors.push('El telefono debe ser un numero valido de 10 digitos'); 
    }
  }

  return errors;
}