// api/auth/login.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../helpers/server-helpers";
import bcrypt from "bcrypt";
import prisma from "../../../../../prisma";

export const POST = async (req: Request) => {
  try {
    console.log("Connecting to the database...");
    await connectToDatabase(); // Call connectToDatabase to establish a database connection
    console.log("Connected to the database.");

    const { email, password } = await req.json();

    console.log("Attempting to find user by email:", email);

    // Existing logic for finding the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log("User found:", user);

    if (!user) {
      console.log("User not found. Returning 404.");
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // New code for password comparison
    if (user && user.hashedPassword) {
      console.log("Comparing passwords...");

      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.hashedPassword || ""
      );

      console.log("Password comparison result:", isPasswordCorrect);

      if (isPasswordCorrect) {
        // Return user details if the password is correct
        console.log("Password is correct. Returning user details.");
        return NextResponse.json({ user }, { status: 200 });
      } else {
        // Return error message if the password is incorrect
        console.log("Invalid password. Returning 401.");
        return NextResponse.json(
          { message: "Invalid password" },
          { status: 401 }
        );
      }
    } else {
      // Return error message if hashedPassword is missing
      console.log("Invalid user data. Returning 400.");
      return NextResponse.json(
        { message: "Invalid user data" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    console.log("Disconnecting from the database.");
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
  }
};
