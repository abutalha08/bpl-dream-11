import React from 'react';
import dollarImg from "../../assets/DoubleDollar.png";
import logoImg from "../../assets/logo.png"

const Navbar = ({coins}) => {
    return (
        <div className='max-w-full bg-base-200 sticky top-0 z-50'>
            <div className='max-w-10/12 mx-auto'>

           <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <a><img src= {logoImg} alt="Logo" className='w-12 h-12' /></a>
  </div>

  <div className="navbar-end flex items-center gap-16">
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
    </ul>
  </div>

  <a className="btn flex items-center gap-2">
      <img src={dollarImg} alt="" />
      {coins} Coin
    </a>
  </div>
</div>
            </div>
        </div>
    );
};

export default Navbar;