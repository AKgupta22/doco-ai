import { PrismaClient } from "@prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

export const connectToDatabase = async () => {
  try {
    prisma.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export const disconnectFromDatabase = async () => {
  try {
    await prisma.$disconnect();
    console.log("Disconnected from the database successfully.");
  } catch (error) {
    console.error("Error disconnecting from the database:", error);
    throw error;
  }
};
