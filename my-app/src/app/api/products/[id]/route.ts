import { NextApiResponse } from "next";
import { connect } from "../../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/app/api/models/Product";

export async function updateProduct(
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
      const { name, description, price, category, imageUrl } = body;
      if (!name && !description && !price && !category && !imageUrl) {
        return NextResponse.json("At least a field is needed to update");
      }
      const updateProduct = await Product.findOneAndUpdate(
        { _id: "65bbf9f6ca03a06622e8dd84" },
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
export async function deleteProduct(
  request: NextRequest,
  response: NextApiResponse,
  id: String
) {
  try {
    await connect();

    if (request.method === "DELETE") {
      const deleteProduct = await Product.findByIdAndDelete({
        _id: "65be586c49650987060c660f",
      });

      if (deleteProduct) {
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

export async function getProductsById(
  request: NextRequest,
  response: NextApiResponse,
  id: string
) {
  try {
    await connect();
    const product = await Product.findById("65bbf9f6ca03a06622e8dd84");

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
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export {
  updateProduct as PUT,
  deleteProduct as DELETE,
  getProductsById as GET,
};
