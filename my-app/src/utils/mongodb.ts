// Import the Mongoose library for MongoDB connectivity
import mongoose from "mongoose";

// Define the connect function to establish a connection to the MongoDB database
const connect = async () => {
  // Retrieve the MongoDB URL from the environment variables
  const mongodbUrl = process.env.MONGODB_URL;

  // Check if MongoDB URL is not provided
  if (!mongodbUrl) {
    console.error(
      "MongoDB URL is not set. Please provide a valid MongoDB URL."
    );
    throw new Error("MongoDB URL is not set.");
  }

  // Check if a connection is already established; if yes, return immediately
  if (mongoose.connections[0]?.readyState) return;

  try {
    // Attempt to connect to the MongoDB database using the provided connection URL
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true, // Use the new URL parser (deprecated warning might appear)
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    });
    // Log a success message if the connection is established successfully
    console.log("MongoDB Connected!");
  } catch (error) {
    // If an error occurs during the connection attempt, log the error and throw a new error
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }
};

// Export the connect function to be used elsewhere in the application
export default connect;
