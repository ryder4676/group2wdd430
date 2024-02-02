// Import the Mongoose library for MongoDB connectivity
import mongoose from "mongoose";

// Destructure the Schema from mongoose
const { Schema } = mongoose;

// Define the user schema with email and password fields
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true, // Ensure email is unique
      required: true, // Email is required
    },
    password: {
      type: String,
      required: false, // Password is optional, might be set based on the authentication provider
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Create a mongoose model for the User schema
// If the model already exists, use it; otherwise, create a new one
const User = mongoose.models.User || mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
