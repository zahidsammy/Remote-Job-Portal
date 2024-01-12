import React from 'react'
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../Firebase/Firebase.config'

// AuthProvider utilizes Firebase Authentication for user aunthentication

// Creating a context to manage authentication state
export const AuthContext = createContext();

// Initializing Firebase authentication using the imported app configuration
const auth = getAuth(app);

// Creating a GoogleAuthProvider instance for Google Sign-In
const googleProvider = new GoogleAuthProvider();

// AuthProvider component responsible for managing authentication state
const AuthProvider = ({ children }) => {
  // State to manage user information and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to create a user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign up with Google
  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to log in with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to log out the user
  const logOut = () => {
    localStorage.removeItem('genius-token'); // Optionally removing an item from local storage
    return signOut(auth);
  };

  // Effect hook to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the onAuthStateChanged listener
    return () => {
      return unsubscribe();
    };
  }, []);

  // Authentication information to be provided to the context
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    signUpWithGmail,
  };

  // Render the AuthProvider component with the authentication context
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the AuthProvider as the default export
export default AuthProvider;