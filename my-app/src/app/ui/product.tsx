import { getProductsById } from '@/app/api/products/[id]/route';
// retrieves a product using the product's id

export function ProductById( {id}:{id: string} ){
    // try {
    //     const product = await getProductsById(id);
    //     } catch (error) {
    // // display an error message or redirect
    // console.error('Error fetching products:', error);
    // } 

    return(
        <div className='product-page'>
            <h1>Product information</h1>
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