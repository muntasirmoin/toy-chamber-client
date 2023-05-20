import React from 'react';

const BannerFour = () => {
    return (
        <div className='mt-2 mb-2'>
            <hr />
            <div className="flex flex-col w-full lg:flex-row mt-2 mb-2">
  <div className="grid flex-grow h-42 card bg-base-300 rounded-box place-items-center"><img src="https://i.ibb.co/5s3C8qY/salejpg.jpg" alt="" className='h-30 w-400' /></div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-42 card bg-base-300 rounded-box place-items-center font-bold ">To apply a <span className='text-green-500 animate-bounce'>25%</span> discount on the first purchase <br /> & <span className='text-green-500 animate-bounce'>15%</span> discount on the second purchase <br /> you can collect Coupon from our FaceBook Page!</div>
</div>
<hr /> 

        </div>
    );
};

export default BannerFour;