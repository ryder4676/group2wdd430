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

export async function createSeller(
  request: NextRequest,
  response: NextApiResponse,
  data: object
) {
  await connect();
  try {
    const body = await request.json();

    console.log(body);

    if (request.method === "POST") {
      const validation = createSellerProfile.safeParse(body);

      if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
      }
      const postSeller = await SellerProfile.create(body);

      if (postSeller) {
        return NextResponse.json(
          { message: "Seller Created" },
          { status: 201 }
        );
      }
    } else {
      response.json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export { createSeller as POST };
