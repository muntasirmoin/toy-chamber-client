import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const photoURl = user?.photoURL;
    return (

        <div>
            <nav className="bg-orange-600 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <a href="#" className="flex items-center text-white">
                        <img src="https://i.ibb.co/vzW9VHc/logocar.jpg" alt="Website Logo" className="w-8 h-8 rounded-full mr-2 ms-2" />
                        <span className="font-bold text-xl">Toy Chamber</span>
                    </a>

                    <div className="flex space-x-4 items-center">
                    <Link className="text-white hover:underline" to='/'>Home</Link>
                        <Link className="text-white hover:underline" to='/alltoys'>All Toys</Link>
                        <Link className="text-white hover:underline" to='/mytoy'>My Toys</Link>
                        <Link className="text-white hover:underline" to='/addtoy'>Add A Toy</Link>
                        <Link className="text-white hover:underline" to='/blog'>Blog</Link>
                        <div className="relative">
                            <div className="flex items-center">

                                {
                                    user ? <>
                                    <div className="relative group me-2">
                                    <img src={photoURl} alt="User Profile" className="w-8 h-8 rounded-full mr-2 ms-2" />
                                        {/* <span className="text-white hidden md:inline">{user.displayName}</span> */}
                                        <div className="absolute bottom-0 left-0 top-4 right-10 px-4 py-2 bg-gray-900 bg-opacity-75 text-gray-900 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {user.displayName}
  </div>
                                        </div>
                                        <button className="text-white hover:underline me-2" onClick={handleLogOut}>logout</button>
                                        
                                        
                                        </> : <Link className="text-white hover:underline me-2" to='/login'>Login</Link>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar;