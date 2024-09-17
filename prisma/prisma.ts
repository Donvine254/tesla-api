import { PrismaClient } from "@prisma/client";


declare global {
    let prisma: PrismaClient | undefined;
  }

  const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

  let prisma: PrismaClient;
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  
  prisma = globalForPrisma.prisma;
  
  export default prisma;
