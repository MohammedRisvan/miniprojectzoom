import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


function Saidbar() {

  const navigate=useNavigate()
  return (
    <div className='  flex flex-col gap-5 w-1/4 h-screen h-full bg-slate-100 overflow-scroll'>  <h2>PEROSONAL</h2>
      <div className='flex flex-col gap-5 justify-between'>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2' onClick={()=>navigate("/myhome")}>Home</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 ' onClick={()=>navigate("/profile")}>Profile</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/meetings")}>Meetings</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 ' onClick={()=>navigate("/webinar")}>Webinars</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/personalContact")}>Perosanal Contact</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 ' onClick={()=>navigate("/personal-devices")}>Perosonal Devices</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/wb")}>White boards</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/notes")}>Notes New</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/recording")}>Recordings</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/clips")}>Clips New</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/appointment")}>Sheduler</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/settings")}>Settings</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/privacy")}>Data^Privacy New</p>
      <p className='hover:bg-blue-800 hover:text-white px-10 py-2 'onClick={()=>navigate("/meetings")}>Reports</p>
      </div>
      <h3>ADMIN</h3>
      <p className='px-3 py-2'>>Plans and Billing</p>
      <p className='px-3 py-2'> >User Management</p>
      <p className='px-3 py-2'> >Room Management</p>
      <p className='px-3 py-2'> >Workspace Management</p>
      <p className='px-3 py-2'>>Account Management</p>
      <p className='px-3 py-2'>>Advanced</p>
      <hr />
      <div>
      <p className='px-3 py-2 text-blue-800'>Zoom Learning Center</p>
      <p className='px-3 py-2 text-blue-800'>Video Tutorials</p>
      <p className='px-3 py-2 text-blue-800'>knowledge Base</p>
      </div>
      </div>
  )
}

export default Saidbar
