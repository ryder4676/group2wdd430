// api/auth/[...nextauth].tsx

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Define authentication options for NextAuth
export const authOptions: any = {
  providers: [
    // Use the CredentialsProvider for email/password authentication
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // Authorize function is called during login attempt
      async authorize(credentials: any) {
        try {
          // Find a user in the database based on the provided email
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          // Check if user and hashedPassword exist in the database
          if (user && user.hashedPassword) {
            // Compare the provided password with the hashed password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.hashedPassword
            );

            // If password is correct, return user details
            if (isPasswordCorrect) {
              return {
                ...user,
                id: user.id.toString(),
              };
            }
          }

          // Return null if user not found or password is incorrect
          return null;
        } catch (err: any) {
          // Throw an error if an exception occurs during authorization
          console.error("Authorization error:", err);
          throw new Error("Authorization error");
        }
      },
    }),
  ],
};

// Export the NextAuth instance with the defined options
export default NextAuth(authOptions);
