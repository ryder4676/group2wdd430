import { ProductsById } from '@/app/ui/product-grid';
import SellerInformation from '@/app/ui/profile-information';

// Receives seller's ID as params and retrieves their information

export default async function Page({ id }: {id: string}) {
    // We could also retrieve a sellerProfilePicture here

    return(
        <div className="profile">
            <div className="profile-header">
                <p>Seller profile Page</p>
                < SellerInformation id={id}/>
            </div>
            {/* we receive a div with all of their crafts on sale */}
            <ProductsById id={id} />
        </div>
    );
}