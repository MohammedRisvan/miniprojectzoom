import React from 'react';
import shedulerlogo from'../images/scheduler-logo.849b4093191d0e458328065a997d4123.svg'
function Sheduler() {
  return (
    <div className='flex w-full items-center justify-center'>
      <img className="h-60" src={shedulerlogo} alt="" />
      <div className='flex flex-col gap-3 '>
        <h1 className='font-semibold text-3xl'>Looks like you don't have Zoom Scheduler</h1>
        <ul>
            <li className='flex gap-5'>✅<p>Eliminate back and forth emails trying to find a time that works for everyone.</p></li>
            <li className='flex gap-5'>✅<p>Free up time and resources needed to manage multiple appointment requests.</p></li>
            <li className='flex gap-5'>✅<p>Connect with customers faster to book more appointments.</p></li>
        </ul>
        <div className='flex gap-3'>
            <button className='bg-blue-800 text-white rounded-lg px-3 py-2'>Buy Now</button>
            <a href="#" className='text-blue-600 text-lg' >Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default Sheduler
