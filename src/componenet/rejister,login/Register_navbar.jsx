import React, { useEffect, useState } from 'react';
import './SignUp.css';
import Anxious from "axios";

function Register_navbar() {
//   const [data,setData]=useState();
// useEffect(  async()=>{
// const responce=await Anxious.post("https://localhost:3000/signup")
// setData(responce);
// },[])
  return (    
<>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-600">zoom</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><span className='text-slate-950'>Already have an account?  </span>Sign In</a>
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
</nav><div className="h-1">
  <div className="md:flex">
    <div className=" w-1/3 h-screen.5 bg-slate-200 p-10  md:shrink-0 ">
      <img className=" object-cover md:w-full " src='https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png' alt="Modern building architecture"/>
      <ul className="  bg-white flex flex-col justify-between ml-10 mt-3 ps-6 rounded-2xl ">
        <li className='font-bold text-lg'>Create your free basic account</li>
        <li className='list-disc'>Unlimited meetings for up to 40 minutes and 100 <br/>participants each</li>
        <li className='list-disc'>Automated captions to help make meetings more <br/>inclusive</li>
        <li className='list-disc'>Secure, HD-quality audio and video</li>
        <li className='list-disc'>3 editable whiteboards</li>
        <li className='list-disc'>Team Chat for collaboration, file sharing, and more</li>
        <li  className='list-disc'>Zoom Mail and Calendar in the Zoom app</li>
        <li className='list-disc'>Notes for creating and sharing editable documents</li>
        <li className='list-disc'>Screen sharing, virtual backgrounds, breakout <br/>rooms, and local recording</li>
      </ul>
    </div>
    <div className="p-8 flex flex-col items:center ">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    <form className='mt-6 flex flex-col items:center justify-between h-60' >
      <h1 className=' text-5xl'>Sign Up</h1><br/>
      {/* <p>please conferm your birth year. This data will not be stored.</p> */}
      <input className='b border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  '
      onChange={(e)=>{}}
       type='text'/>
      <input className='border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  ' type='text'/>
      <input className='border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  ' type='text'/>
    </form>
    </div>
  </div>
</div>
{/* <div className='flex flex-col items-center justify-center w-1/2  mt-10'>
  <img src='https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png'className='w-1/2'/>
</div> */}
</>
  )
}

export default Register_navbar;