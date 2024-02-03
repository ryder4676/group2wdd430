import ProductGrid from '@/app/ui/product-grid';
import SellerInformation from '../ui/profile-information';

// Receives seller's ID as params and retrieves their information and products on sale

export default async function Page({id}: {id: string}) {
   return(
        <div className="profile">
            {/* we recieve a div with the sellers name, picture, and description (or anything else we have in the db) */}
            <SellerInformation id={id}/>
            
            {/* we receive a div with all of their crafts on sale */}
            <ProductGrid id={id} />
        </div>
    );
}