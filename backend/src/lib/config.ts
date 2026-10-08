/**
  @file: config.ts
  @description: Este archivo contiene la configuracion de variables de entorno para la aplicacion. Se encarga de leer las variables de entorno necesarias para la conexion a la base de datos y la generacion de tokens JWT, y exportarlas para que puedan ser utilizadas en otros archivos de la aplicacion.
 */
const connectionDataBase = process.env.DATABASE_URL;
if (!connectionDataBase) throw new Error('DATABASE_URL no está configurado');
export const DATABASE_URL = connectionDataBase;

const nodeEnv = process.env.NODE_ENV ?? 'development';
export const NODE_ENV = nodeEnv;

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET no está configurado');
export const JWT_SECRET = secret;