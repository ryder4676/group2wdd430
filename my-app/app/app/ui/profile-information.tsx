import fetchSellerById from '/';

export default async function SellerInformation( {id}:{id: string} ){
    try {
        const sellerInfo = await fetchSellerById(id); // Fetch seller's information using id
        } catch (error) {
    // display an error message or redirect
    console.error('Error fetching seller information:', error);
    }

    return(
        <div className="profile-header">
            {/* double check how to access the seller's information */}
                <img className="profile-picture" src="/" alt="Seller profile picture" />
                <p className="profile-name">{sellerInfo.name}</p>
                <p className="profile-description">{sellerInfo.description}</p>
        </div>
        // Work on this when we know the seller's information
    )
}