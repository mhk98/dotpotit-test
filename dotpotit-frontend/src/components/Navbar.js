import React from 'react';
import { IoSettings } from 'react-icons/io5';
import "./Navbar.css"
import logo from "../../src/images/Logo/Landsacpe.png"
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Menu 1</a></li>
      <li><a>Menu 2</a></li>
      <li><a>Menu 3</a></li>
      <li><a>Menu 4</a></li>
      <li><a>Menu 5</a></li>
      <li><a className="text-gray-600">Login</a></li>
    <li>
      <button className="btn-bg rounded-full px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition duration-300">
        Register
      </button>
    </li>
    <li>
      <div className="dropdown dropdown-end">
        {/* Removed background and added hover effect */}
        <div
          tabIndex={0}
          role="button"
          className=" flex items-center justify-center hover:text-gray-700 transition duration-300"
        >
          <IoSettings size={20} className="text-gray-600" />
        </div>
        
        {/* Added more margin-top for dropdown */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4w-52 p-2 shadow pt-12"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo}/></a>
    <div className="hidden lg:flex items-center mt-3">
    <ul className="menu menu-horizontal lg:gap-12">
      <li><a>Menu 1</a></li>
      <li><a>Menu 2</a></li>
      <li><a>Menu 3</a></li>
      <li><a>Menu 4</a></li>
      <li><a>Menu 5</a></li>
      

    </ul>
  </div>
  </div>
  
 
  <div className="navbar-end flex items-center lg:flex hidden">
  <ul className="menu menu-horizontal px-1 flex items-center lg:gap-12 ">
    <li><a className="text-gray-600">Login</a></li>
    <li>
      <button className="btn-bg rounded-full px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition duration-300">
        Register
      </button>
    </li>
    <li><span className="text-gray-400">|</span></li>
    <li>
      <div className="dropdown dropdown-end">
        {/* Removed background and added hover effect */}
        <div
          tabIndex={0}
          role="button"
          className=" flex items-center justify-center hover:text-gray-700 transition duration-300"
        >
          <IoSettings size={20} className="text-gray-600" />
        </div>
        
        {/* Added more margin-top for dropdown */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4w-52 p-2 shadow pt-12"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>


</div>
  );
};

export default Navbar;
