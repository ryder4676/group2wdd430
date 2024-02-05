import { NextApiResponse } from "next";
import { connect } from "../../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import SellerProfile from "../../models/Seller";

export async function updateSellerProfile(
  request: NextRequest,
  response: NextApiResponse,
  id: String,
  data: object
) {
  try {
    await connect();
    const body = await request.json();
    console.log(body);

    if (request.method === "PUT") {
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
      } = body;
      if (
        !sellerName &&
        !email &&
        !phone &&
        !country &&
        !city &&
        !address &&
        !storeName &&
        !averageRating &&
        !totalRatings
      ) {
        return NextResponse.json("At least a field is needed to update");
      }
      const updateSeller = await SellerProfile.findOneAndUpdate(
        { _id: id },
        {
          $set: {
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
          },
        },
        { new: true }
      );

      if (updateSeller) {
        return NextResponse.json(
          { message: "Product Updated" },
          { status: 201 }
        );
      }
    } else {
      return response.json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}
export async function deleteSeller(
  request: NextRequest,
  response: NextApiResponse,
  id: String
) {
  try {
    await connect();

    if (request.method === "DELETE") {
      const seller = await SellerProfile.findOne({ _id: id });
      if (!seller) {
        return NextResponse.json(
          { message: "seller Not Found" },
          { status: 400 }
        );
      }
      const sellerProflie = await SellerProfile.findByIdAndDelete({
        _id: id,
      });

      if (sellerProflie) {
        return NextResponse.json(
          { message: "Product Deleted" },
          { status: 200 }
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

export async function getSeller(
  request: NextRequest,
  response: NextApiResponse,
  id: string
) {
  try {
    await connect();
    const seller = await SellerProfile.findById({ _id: id });

    if (seller) {
      return NextResponse.json(
        { meesage: "Seller Found", seller },
        { status: 200 }
      );
    } else {
      NextResponse.json({ message: "Product Not Found" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export { updateSellerProfile as PUT, deleteSeller as DELETE, getSeller as GET };
