// Import PrismaClient from the @prisma/client package
import { PrismaClient } from "@prisma/client";

// Declare a variable to hold the PrismaClient instance
let prisma: PrismaClient;

// Declare a constant 'global' with an extended type including an optional 'prisma' property
declare const global: typeof globalThis & { prisma?: PrismaClient };

// Check the environment to determine whether to use or create a new instance of PrismaClient
if (process.env.NODE_ENV === "production") {
  // Create a new PrismaClient instance in production
  prisma = new PrismaClient();
} else {
  // In development, check if a global PrismaClient instance already exists
  if (!global.prisma) {
    // If not, create a new PrismaClient instance and assign it to the global object
    global.prisma = new PrismaClient();
  }

  // Assign the PrismaClient instance to the local variable 'prisma'
  prisma = global.prisma;
}

// Export the PrismaClient instance
export default prisma;
