import Product from "../../models/Product";
import { connect } from "../../../utils/mongodb";
import { NextResponse } from "next/server";
import { z } from "zod";

const createProductSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  price: z.number().min(1),
  category: z.string().min(1).max(255),
  imageUrl: z.string().min(1),
});

interface Data {
  sellerId: string;
  name: string;
  description: String;
  price: Number;
  category: String;
  imageUrl: String;
}

export async function postProduct(data: Data, id: string) {
  await connect();
  try {
    const validation = createProductSchema.safeParse(data);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }
    const { name, description, price, category, imageUrl } = data;
    const postProduct = await Product.create({
      sellerId: id,
      name,
      description,
      price,
      category,
      imageUrl,
    });

    if (postProduct) {
      return NextResponse.json({ message: "Product Created" }, { status: 201 });
    }
  } catch (error) {
    console.error("Error:", error);
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export { postProduct as POST };
