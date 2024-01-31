import User from "@/api/models/User";
import connect from "@/api/utils/mongodb.js";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  await connect();

  const { email, password } = await request.json();

  const existingUser = await User.findOne({ email }).catch((error) => {
    console.error("Error during findOne operation:", error);
    throw error; // Rethrow the error to be caught by the catch block below
  });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
