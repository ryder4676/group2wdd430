import {NextApiRequest, NextApiResponse , NextApiRequest as req} from 'next';
import Product from '../../../models/Product';
import connect from '../../../utils/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function updateProduct(request: NextRequest, response: NextApiResponse, id: String) {
  try {
    const body = await request.json();
    console.log(body)

    await connect();

    if (request.method === 'PUT') {
    const {name, description, price, category, imageUrl} = body
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
export async function deleteProduct(request: NextRequest, response: NextApiResponse, id: String) {
  try {
    await connect();

    if (request.method === 'DELETE') {
   
      const deleteProduct = await Product.findByIdAndDelete( { _id: "65bbe75fa4c62e7bfd62123e" })

      if(deleteProduct){ 
        return NextResponse.json({ message: 'Product Deleted' }, { status: 200 });
      }
    } else {
      response.json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}

export { updateProduct as PUT, deleteProduct as DELETE };