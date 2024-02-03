// Import necessary dependencies and configurations
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      // Handle POST request
      const data = req.body;
      res.status(200).json({ message: "POST request handled", data });
    } else {
      // Handle other HTTP methods
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
