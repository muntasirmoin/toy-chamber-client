import React from 'react';

const AllToysTable = ({ toy }) => {

    const { pictureUrl, toyName, subCategory, sellerName, price, availableQuantity } = toy;
    return (
        <tbody>
            <tr>
                <td className='text-center'>{sellerName}</td>
                <td className='text-center'>{toyName}</td>
                <td className='text-center'>{subCategory}</td>
                <td className='text-center'>{price}</td>
                <td className='text-center'>{availableQuantity}</td>
                <td className='text-center'>
                    <button className="btn btn-primary">View Details</button>
                </td>
            </tr>
            </tbody>
        
    );
};

export default AllToysTable;