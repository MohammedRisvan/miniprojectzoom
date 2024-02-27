import React, { useState } from 'react';
import Axios from "axios";
import "./SignUp.css";
const SignIn = () => {
  const [data,setData]=useState({});
   const Signin=async()=>{
const response=await Axios.post("http://localhost:3003/api/signin",{
  email:data.email,
  password:data.password,
})
alert(response.data.message)
   } 
  return (
    <div className='loginmain'>
        <img />
      <div>
        <form className='form' onSubmit={Signin}>
        <h1>Sign In</h1>
        <input type='text' placeholder='email' name='email'onChange={(e)=>{setData({...data,email:e.target.value})}}/>
        <input type="password" placeholder='password'onChange={(e)=>{setData({...data,password:e.target.value})}}/>
        <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
