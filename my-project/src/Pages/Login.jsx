import React from 'react';
import { useContext, useState } from 'react';
import { FaFacebook, FaFacebookF, FaGoogle, 
FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AunthProvider';


// Functional component for the login page
const Login = () => {
  // State to manage error messages during login
  const [errorMessage, setErrorMessage] = useState('');

  // Destructure necessary functions from the authentication context
  const { signUpWithGmail, login } = useContext(AuthContext);

  // Get the current location and navigation function from React Router
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the intended destination (or default to '/') from the location state
  const from = location.state?.from?.pathname || '/';

  // Function to handle the login form submission
  const handleLogin = (event) => {
    event.preventDefault();

    // Extract email and password from the form
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Call the login function from the authentication context
    login(email, password)
      .then((result) => {
        // If successful, update user information, show an alert, and navigate to the intended destination
        const user = result.user;
        console.log(user);
        alert('Login successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // If an error occurs during login, set an error message
        const errorMessage = error.message;
        setErrorMessage('Please provide valid email & password!');
      });
  };

  // Function to handle registration with Google
  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        // If successful, update user information and navigate to the intended destination
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

    return (
      <div className="h-screen mx-auto container flex items-center justify-center">
        <div className="w-full max-w-xs mx-auto">
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
          >
            <h3 className="text-xl font-semibold mb-4">Please Login!</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="name@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
  
              {/* show errors */}
              {errorMessage && (
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
                )}
            </div>
            <div className="flex items-center justify-between">
              <input
                className="bg-blue hover:bg-pink text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Sign in"
              />
  
              <a
                className="inline-block align-baseline font-bold text-sm text-primary hover:text-pink"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
        
            {/* social login */}
            <div className="mt-8 text-center w-full mx-auto">
              <p className="mb-4">Sign up with Social</p>
  
              <div className="flex items-center justify-center gap-4 w-full mx-auto">
                <button
                  className=" border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                  type="button"
                  onClick={handleRegister}
                >
                  <FaGoogle />
                </button>
                <button
                  className=" border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                  type="button"
                >
                  <FaFacebookF />
                </button>
                <button
                  className=" border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                  type="button"
                >
                  <FaLinkedin />
                </button>
                <button
                  className=" border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                  type="button"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
          
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 StayInYourPJ Jobs Portal. All rights reserved.
          </p>
        </form>
        </div>
    
      </div>
    );
  };
  
  export default Login;
  