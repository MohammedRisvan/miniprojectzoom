import React, { useState } from 'react';
import Axios from "axios";
import "./SignUp.css";
import image from '../images/img3.jpg';
import sso from "../images/sso.jpg";
import apple from "../images/Apple.jpg";
import google from "../images/google.jpg";
import facebook from "../images/facebook.jpg"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';



const SignIn = () => {
  const [data,setData]=useState({});
   const Signin=async(e)=>{
    e.preventDefault();
const response=await Axios.post("http://localhost:3003/api/signin",{
  email:data.email,
  password:data.password,
},
{    withCredentials: true,
}
)
.then(
  (res)=>{
    const {error,success,token}=res.data;
    success?toast.success(success):toast.error(error)
    if(success){
    localStorage.setItem('token',res.data.token)
    window.location='/profile'
}
  }
)
console.log("hello")
   } 
  return (<>
  <>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-600">zoom</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
           <Link to="/signup"> <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><span className='text-slate-950'>New to Zoom?</span>Sign up Free</a></Link>
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
</nav>
  
{/* <div className='flex flex-col items-center justify-center w-1/2  mt-10'>
  <img src='https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png'className='w-1/2'/>
</div> */}
</>
    <div className='flex items-center justify-center bg-slate-100 '>
       <div className='w-2/6 bg-slate-100  '> <img src={image} /></div>
      {/* <div className='w-1/2 h-screen
       bg-white flex flex-col items-center justify-around'> */}
        <form className='w-1/2 h-screen bg-white flex  flex-col bg-blue-300 items-center justify-center gap-5 rounded-xl' onSubmit={Signin}>
        <h1 className='font-semibold text-4xl'>Sign In</h1>
        <input type='text' className='bg-sky-200 rounded w-3/6 h-10' placeholder='email' name='email'onChange={(e)=>{setData({...data,email:e.target.value})}}/>
        <input type="password" className='bg-sky-200 rounded w-3/6 h-10' placeholder='password'onChange={(e)=>{setData({...data,password:e.target.value})}}/>
        <div className='flex justify-between w-3/6 text-blue-700'><p>Forget password?</p><p>Help</p></div>
        <button type='submit'className='px-3 py-2 text-white bg-blue-800 rounded w-3/6'>Submit</button>
        <p className='w-3/6'>By signing in, I agree to the<span className='text-blue-700'> Zoom's Privacy<br/>
             Statement and Terms of Service.</span></p>
        <p className='flex w-3/6 flex-start '><input type='checkbox'/>Stay signed in</p>
        <div className='w-3/6 text-slate-700'><div className='flex w-full h-20 items-center'><hr className='w-2/6 h-0.5 bg-slate-700'/><p>Or sign in with</p><hr className='w-2/6 h-0.5 bg-slate-700'/> </div>
        <div className='flex items-center justify-between '>
          <p className='flex flex-col items-center'><img className='w-1/4' src={sso}/>SSO</p>
          <p className='flex flex-col items=-center'><img className='w-1/4' src={apple}/>Apple</p>
          <p className='flex flex-col items-center'><img className='w-1/4' src={google}/>Google</p>
          <p className='flex flex-col items-center'><img className='w-1/4' src={facebook}/>Facebook</p>
        </div>
        </div>
        <p className='text-slate-700'>Zoom is protected by reCAPTCHA and the Google <br/><span className='text-blue-700'>Privacy Policy</span> and <span className="text-blue-700">Terms of Service</span> apply.</p>
        </form>
      {/* </di/v> */}
    </div>
    </>
  )
}

export default SignIn
