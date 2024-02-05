import { NextApiResponse } from "next";
import Product from "../models/Product";
import { connect } from "../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function getProducts(
  request: NextRequest,
  response: NextApiResponse
) {
  await connect();
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return NextResponse.json(
        { message: "No Products Available" },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ products }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export { getProducts as GET };
