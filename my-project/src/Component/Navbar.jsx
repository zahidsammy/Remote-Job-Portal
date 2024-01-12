import React from 'react'
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'
import { AuthContext } from '../Context/AunthProvider';



const Navbar = () => {
     // State to manage mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Context to get user information and logout function
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
  
    // Function to handle user logout
    const handleLogout = () => {
      logOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    // Function to toggle the mobile menu visibility
    const handleMenuToggler = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    // Navigation items
    const navItems = [
      { path: "/", title: "Start a search" },
      { path: "/my-job", title: "My Jobs" },
      { path: "/salary", title: "Salary estimate" },
      { path: "/post-job", title: "Post A Job" },
    ];
    return (
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center gap-2 text-2xl">
          <svg
                    xmlns="/"
                    width="40"
                    height="40"
                    viewBox="0 0 30 40"
                    fill="none"
                >
                    {/* Lighter square for the reflection effect */}
                    <rect x="9" y="3" width="32" height="32" fill="#FFA9C4" opacity="0.4" />
                     {/* Darker square */}
                    <rect x="=8" y="7" width="32" height="32" fill="#EF9FAA" />
                </svg>
            <span>StayInYourPJ Jobs</span>
          </a>
  
          {/* nav items */}
          <ul className="hidden md:flex gap-12">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
  
          {/* sign up signout btn */}
          <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            {user ? (
              <>
                <div className="flex gap-4 items-center">
                  <div className="flex -space-x-2 overflow-hidden">
                    {
                      user?.photoURL ? <> <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src={user?.photoURL}
                      alt=""
                    /></> : <> 
                      
                    </>
                    }
                   
                  </div>
                  <button onClick={handleLogout} className="py-2 px-5 border rounded hover:bg-pink hover:text-white">Log out</button>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Link to="/login" className="py-2 px-5 border rounded">
                  Log in
                </Link>
                <Link
                  to="/sign-up"
                  className="bg-pink py-2 px-5 text-white rounded"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
  
          {/* mobile menu */}
          <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <>
                  <FaXmark className="w-5 h-5 text-primary/75" />
                </>
              ) : (
                <>
                  <FaBarsStaggered className="w-5 h-5 text-primary/75" />
                </>
              )}
            </button>
          </div>
        </nav>
  
        {/* mobile menu items */}
        <div
          className={`px-4 bg-pink py-5 rounded-sm ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul>
            {navItems.map(({ path, title }) => (
              <li
                key={path}
                className="text-base text-white first:text-white py-1"
              >
                <NavLink
                  onClick={handleMenuToggler}
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
  
            <li className="text-white py-1">
              <Link to="login">Log in</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  