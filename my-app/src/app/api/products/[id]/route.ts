import { connect } from "../../../utils/mongodb";
import { NextResponse } from "next/server";
import Product from "@/app/api/models/Product";

interface Data {
  name: string;
  description: String;
  price: Number;
  category: String;
  imageUrl: String;
}
export async function updateProduct(id: String, data: Data) {
  try {
    await connect();
    const { name, description, price, category, imageUrl } = data;
    if (!name && !description && !price && !category && !imageUrl) {
      return NextResponse.json("At least a field is needed to update");
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          description,
          price,
          category,
          imageUrl,
        },
      },
      { new: true }
    );

    if (updateProduct) {
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
export async function deleteProduct(id: String) {
  try {
    await connect();

    const deleteProduct = await Product.findByIdAndDelete({
      _id: id,
    });

    if (deleteProduct) {
      return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function getProductsById(id: string) {
  try {
    await connect();
    const product = await Product.findById(id).populate("sellerId");

    if (product) {
      return NextResponse.json(
        { meesage: "Product Found", product },
        { status: 200 }
      );
    } else {
      NextResponse.json({ message: "Product Not Found" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" });
  }
}
export async function getProductsBysellerId(sellerId: string) {
  try {
    await connect();
    const product = await Product.findById(sellerId).populate("sellerId");

    if (product) {
      return NextResponse.json(
        { meesage: "Product Found", product },
        { status: 200 }
      );
    } else {
      NextResponse.json({ message: "Product Not Found" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" });
  }
}

export {
  updateProduct as PUT,
  deleteProduct as DELETE,
  getProductsById as GET,
};
