import React, { useContext, useState } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Footer from '../../shared/Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signIn, user, signInGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    // navigate previous page
    const location = useLocation();
    console.log('login page location:',location);
    const from = location.state?.from?.pathname || '/';

    // 

    // email password login
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      
      form.reset();
  
      signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log('login in', user);
          navigate(from, {replace: true})
          
        })
        .catch(error => {
            console.log(error);
            setErrorMessage('Invalid username or password. Please try again.');
        })
      }
  
        // google login
        const handleGoogleLogin = (event) =>{
          event.preventDefault();
          signInGoogle()
          .then(result => {
              const loggedInUser = result.user;
              console.log(loggedInUser);
              navigate(from, {replace: true})
          })
          .catch(error => {
              console.log('error', error);
              setErrorMessage('failed google login. Please try again.');
          })
  
      }
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Login</h1>

                    <h4 className="font-bold mb-6 text-red-500">{errorMessage}</h4>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Email</label>
                            <input type="email" name='email' id="email" className="input input-bordered" />
                        </div>

                        <div className="flex flex-col">
                            <label  className="text-sm font-semibold">Password</label>
                            <input type="password" name='password' id="password" className="input input-bordered" />
                        </div>
                        

                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <div className="mx-2 text-gray-500">or</div>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <button onClick={handleGoogleLogin} className="btn btn-danger">Google Sign-in</button>

                    <p className="mt-4 text-center">
                        Don't have an account?  <Link className="text-blue-500 hover:underline" to='/register'>Register now</Link>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;