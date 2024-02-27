import React, { useState } from 'react';
import Anxious from "axios";

export function Register() {
  const [data,setData]=useState({});
  const [datas,setDatas]=useState("");
  
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
  const  handleSubmit= async(e)=>{
    e.preventDefault();
      const responce =await Anxious.post("http://localhost:3003/api/signup"
      ,{
        username: data.username,
        password : data.password,
        email : data.email
      }
      )
      // setDatas(responce.data),
      alert(responce.data.message)
      // console.log(data);

      }
  return (
  <>
  <div className="h-1">
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
    <form className='mt-6 flex flex-col items:center justify-between h-60'onSubmit={handleSubmit} >
      <h1 className=' text-5xl'>Sign Up</h1><br/>
      {/* <p>please conferm your birth year. This data will not be stored.</p> */}
      <input className='b border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  '
      onChange={(e)=>{setData({...data,username:e.target.value})}} 
      placeholder='Username' 
      type='text'/>
      <input className='border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  '
      onChange={(e)=>{setData({...data,email:e.target.value})}} 
      name="email"
      type='text'/>
      <input className='border-black bg-slate-300 w-80   h-10 autofill:bg-yellow-200  '
      onChange={(e)=>{setData({...data,password:e.target.value})}}
      name='Password' 
       type='text'/>
       <button onclick="">submit</button>
    </form>
    </div>
  </div>
</div>
  </>
  )
}

