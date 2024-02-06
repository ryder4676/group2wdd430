import {  AllProductsGrid} from '@/app/ui/product-grid';

export default async function Page() {
    
    return(
        <div className="products-page">
            <div className="products-page-header">
                <p>Products Page</p>
                < AllProductsGrid />
            </div>
        </div>
    );
}