import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner2 = () => {
    return (
        <div className='mt-2 mb-2'>
            <hr />
            <div className="animate-pulse">
            <h2 className='text-2xl font-bold m-4 text-gray-500'>Gallery</h2>
            </div>
            <hr />
            <Marquee speed={60}>
            <div className="grid grid-cols-4 gap-4">
      <div>
        <img src="https://i.ibb.co/6yz4jsV/car1.jpg" alt="Image 1" className="w-full" />
      </div>
      <div>
        <img src="https://i.ibb.co/n7RM5g7/house3.jpg" alt="Image 2" className="w-full" />
      </div>
      <div>
        <img src="https://i.ibb.co/8P1nVf5/cy4.jpg" alt="Image 3" className="w-full" />
      </div>
      <div>
        <img src="https://i.ibb.co/FbcSbkr/house5.jpg" alt="Image 4" className="w-full" />
      </div>
    </div>
        </Marquee>
      
    
        </div>
    );
};

export default Banner2;