
import React, { useContext, useState } from 'react';
import Anxious from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../context';
import toast from "react-hot-toast";

function  Otp (){
  const navigate=useNavigate()
    const { data,setData,datas,setDatas,otp,setOtp,reciveotp,setreciveOtp}=useContext(myContext);
    const [otpValue,setOtpValue]=useState([1,2,3,4])
    async function handleotp(e){
    e.preventDefault();
    console.log(otpValue.join(""));
  
    // console.log(otpValue);
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    
    await Anxious.post("http://localhost:3003/api/register"
    ,{
      username: data.username,
      password : data.password,
      email : data.email,
      otp:otpValue.join(""),
    }
    ).then((res)=>{
      const {success,error}=res.data;
      // console.log(res)
      success?toast.success(success):toast.error(error);
      if(success){
        navigate("/login") }
        localStorage.removeItem('myData');
        })
  
  }
      return(
      <div>
       <>
       <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/ZoomNewLogo.b2fd5c95.png" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-600">zoom</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
             <Link to="/login"> <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"><span className='text-slate-950'>Already have an account?  </span>Sign In</a></Link>
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
   </>
      <div className='flex h-screen w-full'> 
      <div className='flex items-center justify-center'>
        <img src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-final.37b76098.png" alt="" />
      </div>
      <form className='flex flex-col gap-10 'onSubmit={handleotp}>
    <h1>Check Your Email For A Code</h1>
    <p>Please enter the verification code send to your enmail address {data.email}</p> 
    <input  />
    <div class="flex justify-center items-center mt-8">
   {otpValue.map((value,index)=>{return(<div class="flex justify-center items-center mt-8">
  <input type="text" maxlength="1" 
  onChange={(e)=>{otpValue[index]=e.target.value}}
   class="w-12 h-12 mx-1 text-3xl text-center border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" aria-label="OTP"/>
  </div>
  )
  })}
  </div>
  
  <button className='bg-blue-900 px-5 py-2 text-white'>verify</button>
      </form>
    </div> 
  </div>
    )
  }
  export default  Otp