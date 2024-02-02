// Import NextAuth and related modules
import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import connect from "@/utils/mongodb";

// Configuration options for authentication
export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // Authorize function to validate user credentials
      async authorize(credentials: any) {
        // Connect to the MongoDB database
        await connect();

        try {
          // Find a user with the provided email in the database
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            // Compare the provided password with the hashed password stored in the database
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            // If the password is correct, return the user object for authentication
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          // Handle any errors that occur during the authorization process
          throw new Error(err);
        }
      },
    }),
  ],
};

// Define the authentication handler using NextAuth with the configured options
export const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
