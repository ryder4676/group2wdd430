import { connect } from "../../../utils/mongodb";
import { NextResponse } from "next/server";
import SellerProfile from "../../models/Seller";

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
export async function updateSellerProfile(id: String, data: Data) {
  try {
    await connect();

    if (
      !data.address &&
      !data.averageRating &&
      !data.city &&
      !data.country &&
      !data.description &&
      !data.email &&
      !data.phone &&
      !data.sellerName &&
      !data.storeName &&
      !data.storeName &&
      !data.totalRatings
    ) {
      return NextResponse.json("At least a field is needed to update");
    }
    const updateSeller = await SellerProfile.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          data,
        },
      },
      { new: true }
    );

    if (updateSeller) {
      return NextResponse.json({ message: "Product Updated" }, { status: 201 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function deleteSeller(id: String) {
  try {
    await connect();
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
      return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function getSeller(id: string) {
  try {
    await connect();
    const seller = await SellerProfile.findById({ _id: id });

    if (seller) {
      return NextResponse.json(
        { message: "Seller Found", seller },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Product Not Found" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error:", error);

    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export { updateSellerProfile as PUT, deleteSeller as DELETE, getSeller as GET };
