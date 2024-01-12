import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AunthProvider';
import { useContext } from 'react';

// Functional component for user sign-up
const SignUp = () => {
    // State to manage error messages
    const [errorMessage, setErrorMessage] = useState("");
    // React Router's useNavigate hook for programmatic navigation
    const navigate = useNavigate();
  
    // Function to handle sign-up form submission
    const handleSignUp = async (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
      // Access form elements by their IDs
      const form = event.target;
      const fullName = form.fullName.value;
      const email = form.email.value;
      const password = form.password.value;
      const retypePassword = form.retypePassword.value;
  
      // Check if passwords match
      if (password !== retypePassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }
  
      // Create user data object
      const userData = { fullName, email, password };
      try {
         // Make a POST request to the sign-up endpoint
        const response = await fetch("http://localhost:8000/users/sign-up", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
  
        // Parse the response JSON
      const result = await response.json();

      // If the response is successful, show an alert and navigate to the login page
      if (response.ok) {
        alert("Sign-up successful!");
        navigate('/login');
      } else {
        // If there's an error, set the error message
        setErrorMessage(result.message || "Sign-up failed. Please try again!");
      }
    } catch (error) {
      // Handle any fetch or processing errors
      console.error("Sign-up error:", error);
      setErrorMessage("Sign-up failed. Please try again!");
    }
  };

   // JSX structure for the sign-up form
    return (
      <div className="h-screen mx-auto container flex items-center justify-center">
        <div className="w-full max-w-xs mx-auto">
          <form
            onSubmit={handleSignUp}
            className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4"
          >
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="John Doe"
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="123-456-7890"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Retype Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="retypePassword"
                type="password"
                placeholder="******************"
              />
              {errorMessage && (
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <input
                className="bg-white hover:bg-pink text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUp;