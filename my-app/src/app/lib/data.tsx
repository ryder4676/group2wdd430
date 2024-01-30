import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
// import {Product} from './definitions';

export async function fetchProductsById({id}:{id: string}){
    noStore();
  // try {
  //   // work on this when we know what product information we have
    
  //   const data = await sql<Product>`
  //     SELECT product.name;`

  //   return data;
  // } catch (error) {
  //   console.error('Database Error:', error);
  //   throw new Error('Failed to fetch the product information.');
  // }
}