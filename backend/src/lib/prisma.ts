/* Este archivo se encarga de crear una instancia de PrismaClient y exportarla para que pueda ser utilizada en otros archivos del proyecto. Ademas, se asegura de que solo haya una instancia de PrismaClient en el entorno de desarrollo para evitar problemas de conexión a la base de datos.*/
import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;