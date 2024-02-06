import { NextApiResponse } from "next";
import SellerProfile from "../../models/Seller";
import { connect } from "../../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createSellerProfile = z.object({
  sellerName: z.string().min(1).max(255),
  email: z.string().min(1).email(),
  phone: z.string().min(10),
  country: z.string().min(1).max(255),
  city: z.string().min(1),
  address: z.string().min(1).max(255),
  storeName: z.string().min(1).max(255),
});

interface Data {
  sellerName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  storeName: string;
  description: string;
  averageRating: number;
  totalRatings: number;
}

export async function createSeller(data: Data) {
  await connect();
  try {
    const validation = createSellerProfile.safeParse(data);

    // if (!validation.success) {
    //   return NextResponse.json(validation.error.errors, { status: 400 });
    // }
    const {
      sellerName,
      email,
      phone,
      country,
      city,
      address,
      storeName,
      description,
      averageRating,
      totalRatings,
    } = data;
    const postSeller = await SellerProfile.create({
      sellerName: "Example Seller",
      email: "example@example.com",
      phone: "1234567890",
      country: "Example Country",
      city: "Example City",
      address: "123 Example Street",
      storeName: "Example Store",
      description: "Example Description",
      averageRating: 4.5,
      totalRatings: 100,
    });

    if (postSeller) {
      return NextResponse.json({ message: "Seller Created" }, { status: 201 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export { createSeller as POST };
