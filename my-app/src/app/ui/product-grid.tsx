import { getProductsById } from '@/app/api/products/[id]/route';
// THIS FUNCTION LOOKS FOR THE PRODUCT USING THE PRODUCT'S ID
// I need a function that gets the products using the seller's id
import { getProducts } from '@/app/api/products/route';
// then we need a function to fetch all of the products

export async function ProductsById( {id}:{id: string} ){
    // try {
    //     const products = await getProductsBySellerId(id);
    //     } catch (error) {
    // // display an error message or redirect
    // console.error('Error fetching products:', error);
    // } 

    return(
        <div className='craft-section'>
            <h1>Crafts on sale</h1>
        {/* Work on this when we know what product information we have */}
            {/* <div className='products-grid'>
                {products.map((product) => {
                    return(
                        ''
                    );
                }
                )}
            </div> */}
        </div>
    )}

export async function AllProductsGrid(){
    // we return all of the products from all of the sellers
    // try {
    //     const products = await getProducts(); 
    //     } catch (error) {
    // console.error('Error fetching products:', error);
    // }

    return(
        <div className='craft-section'>
            <h1>Crafts on sale</h1>
            {/* <div className='products-grid'>
                {products.map((product) => {
                    return(
                        ''
                    );
                }
                )}
            </div> */}
        </div>
    )
}