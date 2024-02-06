import {getSeller} from '@/app/api/sellerProfile/[id]/route';

export default async function SellerInformation( {id}:{id: string} ){
    // try {
    //     const sellerInfo = await getSeller({id}); // Fetch seller's information using id
    //     } catch (error) {
    // // display an error message or redirect
    // console.error('Error fetching seller information:', error);
    // }

    return(
        <div className="profile-header">
            <p>Sellers personal information</p>
            {/* double check how to access the seller's information */}
                {/* <p className="profile-name">{sellerInfo.sellerName}</p>
                <p className="profile-description">{sellerInfo.description}</p>
                <p className="profile-email">{sellerInfo.email}</p>
                <p className="profile-storeName">{sellerInfo.storeName}</p> */}
        </div>
        // Work on this when we know the seller's information
    )
}