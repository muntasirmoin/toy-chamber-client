import React from 'react';

const Banner1 = () => {
    return (
        <div>
            <div className="banner bg-gray-200 p-4 flex items-center  justify-center">
                <div className="banner-image mr-8 ">
                    <img src="https://i.ibb.co/hCpsYWk/gimmel-magaway-HBOb5-KZti-U0-unsplash.jpg" alt="Banner Image" className="w-200 h-100 rounded-full" />
                </div>
                <div className="banner-text ml-8">
                    <h2 className="text-2xl font-bold">Welcome to our Toy Chamber</h2>
                    <p className="text-gray-700">It's A Toy Shop</p>
                </div>
            </div>
        </div>
    );
};

export default Banner1;