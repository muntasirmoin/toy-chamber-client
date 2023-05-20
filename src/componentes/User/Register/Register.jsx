import React, { useContext } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProvider';

const auth = getAuth();

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleRegister = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name,email, password);

        // form auth provide get createUSer

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log('user Created',createdUser);
            // 1111
            updateProfile(auth.currentUser, {
              displayName: name, 
              photoURL: photoUrl
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch(error => {
            console.log(error);
        })
}

    return (
        <div>
            <NavBar></NavBar>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6">Registration</h1>
    
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="flex flex-col">
        <label  className="text-sm font-semibold">Name</label>
        <input type="text" id="name" name='name' className="input input-bordered"/>
      </div>
      
      <div className="flex flex-col">
        <label className="text-sm font-semibold">Email</label>
        <input type="email" id="email" name='email' className="input input-bordered"/>
      </div>
      
      <div className="flex flex-col">
        <label  className="text-sm font-semibold">Password</label>
        <input type="password" id="password" name='password' className="input input-bordered"/>
      </div>
      
      <div className="flex flex-col">
        <label  className="text-sm font-semibold">Photo URL</label>
        <input type="text" id="photo" name='photoUrl' className="input input-bordered"/>
      </div>
      
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    
    <p className="mt-4 text-center">
      Already have an account?  <Link className="text-blue-500 hover:underline" to='/login'>Login</Link>
    </p>
  </div>
</div>


            <Footer></Footer>
        </div>
    );
};

export default Register;