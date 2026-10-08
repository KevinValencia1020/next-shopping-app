/**
  @file: prisma.ts
  @description: este archivo contiene la configuracion de prisma para la aplicacion. Se encarga de crear una instancia del cliente de prisma y exportarla para que pueda ser utilizada en otros archivos de la aplicacion. Ademas, se asegura de que solo se cree una instancia del cliente de prisma en entornos de desarrollo, evitando problemas de conexion a la base de datos.
*/
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL, NODE_ENV } from "./config.ts";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const adapter = new PrismaPg({ connectionString: DATABASE_URL });
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter});
if (NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;