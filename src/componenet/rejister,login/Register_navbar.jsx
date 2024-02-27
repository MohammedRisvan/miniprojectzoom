import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link, Outlet } from 'react-router-dom';
// import { response } from '../../../../backend/Rout/userRout';

function Register_navbar() {
  const [sign,setSign]=("in")
    
// useEffect(  ,[])
  return (    
<>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-600">zoom</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
           <Link to={sign}> <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><span className='text-slate-950'>Already have an account?  </span>Sign In</a></Link>
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Support</a>
            <select href="tel:5541251234" className="text-sm text-blue-600  hover:underline">
              <option>English</option>
              <option>Malayalam</option>
              <option>Arabic</option>
              <option>Hindi</option>
              </select>
        </div>
    </div>
    <hr/>
    <Outlet/>
</nav>
  
{/* <div className='flex flex-col items-center justify-center w-1/2  mt-10'>
  <img src='https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png'className='w-1/2'/>
</div> */}
</>
  )
}

export default Register_navbar;