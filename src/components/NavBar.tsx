import React from 'react';
import logo from "../assets/logo-text.png"

const NavBar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
             <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>
              <a>Home</a>
            </li>
          
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            </ul>
          </div>
             <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
          
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-1">
            
          <p className="btn rounded-full">SignUp</p>
          <p className="btn rounded-full text-white bg-pink-500">SignIn</p>
        </div>
      </div>
        </div>
    );
};

export default NavBar;