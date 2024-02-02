// Import the User model and MongoDB connection utility
import User from "@/models/user";
import connect from "@/utils/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Define the handler for the POST request
export const POST = async (request: any) => {
  // Connect to the MongoDB database
  await connect();

  // Extract email and password from the JSON body of the request
  const { email, password } = await request.json();

  try {
    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email }).catch((error) => {
      // Log any errors that occur during the findOne operation
      console.error("Error during findOne operation:", error);
      // Rethrow the error to be caught by the catch block below
      throw error;
    });

    // If a user with the provided email already exists, return a response indicating the conflict
    if (existingUser) {
      console.log(email, "Email is already in use");
      return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the provided password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 5);

    // Create a new User instance with the email and hashed password
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the new user to the MongoDB database
    await newUser.save();

    // Return a success response indicating that the user is registered
    return new NextResponse("User is successfully registered", { status: 200 });
  } catch (error) {
    // Log any errors that occur during the execution of the POST handler
    console.error("Error in POST handler:", error);
    // Return a response indicating a bad request due to invalid JSON input
    return new NextResponse("Bad Request: Invalid JSON input", { status: 400 });
  }
};
