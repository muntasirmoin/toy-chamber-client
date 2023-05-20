import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-8">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        <a href="#" className="flex items-center text-white">
        <img src={`https://i.ibb.co/vzW9VHc/logocar.jpg`} alt="User Profile" className="w-12 h-12 rounded-full mr-2 ms-2" />
          <span className="font-bold text-xl">Toy Chamber</span>
        </a>
      </div>
      
      <div className="w-full md:w-auto">
        <ul className="flex-col space-y-2">
          {/* <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Services</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li> */}
          <Link className="text-white hover:underline" to='/'>Home</Link>
                        <Link className="text-white hover:underline" to='/alltoys'><li>All Toys</li></Link>
                        <Link className="text-white hover:underline" to='/mytoy'><li>My Toys</li></Link>
                        <Link className="text-white hover:underline" to='/addtoy'><li>Add A Toy</li></Link>
                        <Link className="text-white hover:underline" to='/blog'><li>Blog</li></Link>
        </ul>
      </div>
      
      <div className="w-full md:w-auto">
        <ul className="flex-col space-y-2">
          <li><a href="#" className="hover:text-white">Facebook</a></li>
          <li><a href="#" className="hover:text-white">Twitter</a></li>
          <li><a href="#" className="hover:text-white">Instagram</a></li>
        </ul>
      </div>
      
      <div className="w-full md:w-auto mt-4 md:mt-0 me-3">
        <ul className="flex flex-col space-y-2">
          <li>Sylhet,</li>
          <li>Bangladesh.</li>
          <li>Email: toychamber@google.com</li>
          <li>Phone: +88 1768968938</li>
        </ul>
      </div>
    </div>
    
    <hr className="my-6 border-gray-800"/>
    
    <div className="text-center">
      <p>&copy; 2023 Toy Chamber. All rights reserved.</p>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;