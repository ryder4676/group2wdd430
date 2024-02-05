import { NextApiResponse } from "next";
import Product from "../../models/Product";
import { connect } from "../../../utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createProductSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  price: z.number().min(1),
  category: z.string().min(1).max(255),
  imageUrl: z.string().min(1),
});

export async function postProduct(
  request: NextRequest,
  response: NextApiResponse,
  data: object
) {
  await connect();
  try {
    const body = await request.json();

    console.log(body);

    if (request.method === "POST") {
      const validation = createProductSchema.safeParse(body);

      if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
      }
      const postProduct = await Product.create(body);

      if (postProduct) {
        return NextResponse.json(
          { message: "Product Created" },
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

export { postProduct as POST };
