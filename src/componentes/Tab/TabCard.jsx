import React from 'react';

const TabCard = ({toy}) => {
    const pictureUrl = toy.pictureUrl;
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <div className="card">
      <img src={pictureUrl} alt={toy.ToyName} className="card-img flex justify-center" />
      <div className="card-body">
        <h2 className="card-title text-center">Toy Name: {toy.toyName}</h2>
        {toy.seller && (
          <>
            <p className="card-text">Seller: {toy.sellerName}</p>
            <p className="card-text">Seller Email: {toy.sellerEmail}</p>
          </>
        )}
        <p className="card-text">Price: {toy.price}</p>
        <p className="card-text">Rating: {toy.rating}</p>
        <p className="card-text">Available Quantity: {toy.AvailableQuantity}</p>
        <p className="card-text">Description: {toy.detailDescription}</p>
      </div>
    </div>
    </div>
    </div>
        </div>
    );
};

export default TabCard;