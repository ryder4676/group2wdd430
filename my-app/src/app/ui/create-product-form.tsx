'use client'; // Since useFormState is a hook, we need to turn our form into a Client Component 

import { useFormState } from 'react-dom';
import { createProduct } from '../lib/actions';

export default function Form({id}:{id: string}){
// the useFormState hook takes two arguments: (action, initialState).
// Returns two values: [state, dispatch] - the form state, and a dispatch function
    const initialState = { message: null, errors: {}};
    const [state, dispatch] = useFormState(createProduct, initialState);    

    return <form action={dispatch}>
        {/* we need to send the seller's id */}
        <input 
            type="hidden" 
            id="sellerId" 
            name="sellerId" 
            value={id}
        />

        <label htmlFor="name" className="label-product">
            Product name:
        </label>
        <input
            id="name"
            name="name"
            type="string"
            placeholder="Enter product name"
            required
        />
        <label htmlFor="price" className="label-product">
            Product price:
        </label>
        <input
            id="price"
            name="price"
            type="string"
            placeholder="Enter product price"
            required
        />
        <label htmlFor="description" className="label-product">
            Product description:
        </label>
        <input
            id="description"
            name="description"
            type="string"
            placeholder="Your product description"
            required
        />

        <button className="button" type="submit">Create new product</button>
    </form>

}