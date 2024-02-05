import { NextApiResponse } from "next";
import SellerProfile from "../models/Seller";
import { connect } from "../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function getSellers(
  request: NextRequest,
  response: NextApiResponse
) {
  await connect();
  try {
    const sellers = await SellerProfile.find();

    if (sellers.length === 0) {
      return NextResponse.json(
        { message: "No Sellers Available" },
        { status: 400 }
      );
    } else {
      return NextResponse.json({ sellers }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export { getSellers as GET };
