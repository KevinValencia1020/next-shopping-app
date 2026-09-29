const secret = process.env.JWT_SECRET;
if (!secret) throw new Error('JWT_SECRET no está configurado');
export const JWT_SECRET = secret;