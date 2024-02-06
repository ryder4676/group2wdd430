import ProductGrid from '@/app/ui/product-grid';

// Receives seller's ID as params and retrieves their information

export default async function Page({ params }: { params: { id: string; name: string; description: string } }) {
    // We could also retrieve a sellerProfilePicture here
    const { id, name, description } = params; // Destructuring for clarity

    return(
        <div className="profile">
            <div className="profile-header">
                <p>Seller profile Page</p>
                    {/* <img className="profile-picture" src="/" alt="Seller profile picture" />
                    <p className="profile-name">{name}</p>
                    <p className="profile-description">{description}</p> */}
            </div>
            {/* we receive a div with all of their crafts on sale */}
            {/* <ProductGrid id={id} /> */}
        </div>
    );
}