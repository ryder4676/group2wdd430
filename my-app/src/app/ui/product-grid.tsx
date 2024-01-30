import fetchProductsById from '@/app/lib/data';

export default async function ProductGrid( {id}:{id: string} ){
    try {
        const products = await fetchProductsById(id); // Fetch products using id
        } catch (error) {
    // display an error message or redirect
    console.error('Error fetching products:', error);
    }

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
    )
}