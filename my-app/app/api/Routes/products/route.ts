import {NextApiResponse } from 'next';
import Product from '../../models/Product';
import connect from '../../utils/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createProductSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1),
  price: z.number().min(1),
  category: z.string().min(1).max(255),
  imageUrl: z.string().min(1),
});

export async function postProduct(request: NextRequest , response: NextApiResponse) {

  try {
    const body = await request.json();

    console.log(body)

    await connect();

    if (request.method === 'POST') {
      const validation = createProductSchema.safeParse(body);

      if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
      }
      const postProduct = await Product.create(body)

      if(postProduct){ 
        return NextResponse.json({ message: 'Product Created' }, { status: 201 });
      }
    } else {
      response.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
export async function updateProduct(request: NextRequest, response: NextApiResponse) {

  try {
    const body = await request.json();

    console.log(body)

    await connect();

    if (request.method === 'PUT') {
    const {name, description, price, category, imageUrl} = body
    const id = request.nextUrl.searchParams.get("id");
      if(!name && !description && !price &&!category && !imageUrl){
        return NextResponse.json("At least is needed to update");
      }
      const updateProduct = await Product.findByIdAndUpdate( { _id: id },
        {
          $set: {
          name, description, price, category, imageUrl
          },
        },
        { new: true })

      if(updateProduct){ 
        return NextResponse.json({ message: 'Product Updated' }, { status: 201 });
      }
    } else {
      response.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

export { postProduct as POST };