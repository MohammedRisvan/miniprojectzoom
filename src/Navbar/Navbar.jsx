import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-first' >
        <div className='navbar-firest-titles'>
        <p>Search</p>
        <p>Support</p>
        <p>1.888.799.9666</p>
        <p>Request a Demo</p>
        <p>|</p>
        <p>Join</p>
        <p>Sign In</p>
        </div>
      </div>
      <div className='navbar-main'>
        <div className='mnavtstart'>
      <h1 className='H '>zoom</h1>
      <p className='P '>Products</p>
      <p className='P '>Solutions</p>
      <p className='P '>Resources</p>
      <p className='P '>Plans&Pricing</p>
        </div>
        <div className='nav-buttons'>
          <button className='navbutton1'>ContactSales</button>
          <button className='navbutton2'>Sign Up Free </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
