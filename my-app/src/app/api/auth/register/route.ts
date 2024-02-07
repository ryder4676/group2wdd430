import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../helpers/server-helpers";
import bcrypt from "bcrypt";
import prisma from "../../../../../prisma";

export const POST = async (req: Request) => {
  try {
    // Parse incoming JSON data from the request
    const { name, email, password } = await req.json();

    // Check for missing or invalid data
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }

    // Connect to the database
    await connectToDatabase();

    // Check if the user with the provided email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    // If user already exists, log a message and return an error response
    if (existingUser) {
      console.log(`User with email ${email} is already registered.`);
      return NextResponse.json(
        { message: "User with this email is already registered." },
        { status: 400 }
      );
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: { name, email, hashedPassword },
    });

    // Return success response with the newly created user
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    // Log any errors that occur during the process
    console.error(error);
    
    // Return an error response
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    // Disconnect from the database after completing the operation
    await prisma.$disconnect();
  }
};
