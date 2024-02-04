'use server';
// import { z } from 'zod';
import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

export type State = {
    errors?: {
      sellerId?: string[];
      product?: string[];
      price?: string[];
      description?: string[];
    };
    message?: string | null;
  };

export async function createProduct(prevState: State, formData: FormData) {
// add validation
    const sellerId = formData.get('sellerId');
    const name = formData.get('name');
    const price = formData.get('price');
    const description = formData.get('description');
   
    try {
      await sql`
        INSERT INTO products (sellerId, name, price, description)
        VALUES (${sellerId}, ${name}, ${price}, ${description})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create New Product.',
      };
    }
   
    // revalidatePath('/dashboard/products');
    // redirect('/dashboard/products');
      
    };