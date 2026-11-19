/**
    @file: express.d.ts
    @description: Este archivo contiene las definiciones de tipos para Express.js, especificamente para extender el tipo Request con un campo user.
*/

declare global {
  namespace Express {
    interface Request {
      user?: { id: string }
    }
  }
}
export {}; // --> Esta linea es necesaria para que TypeScript trate este archivo como un modulo y no como un script global