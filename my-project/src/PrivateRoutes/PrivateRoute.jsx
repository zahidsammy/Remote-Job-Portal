import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AunthProvider';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
    // Access authentication context and current location
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

      // If authentication information is still loading, show a loading message
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    // If the user is authenticated, render the protected content
    if (user) {
      return children;
    }

    // If not authenticated, redirect to the login page with the current location in the state
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };
  
  export default PrivateRoute;