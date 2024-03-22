import React from 'react'
import Downloadzoom from"../images/download.jpg"
function MyHome() {
  return (
    <div className='flex items-center justify-center flex-col w-full p-14'>
      
      <div className='bg-blue-200 flex h-10 w-4/6'> <p>0 of 6 completed</p></div>
      <p>You'r on your way to receiving a spetial gift !</p>
      <div className='flex items-center gap-5 flex-col w-full bg-slate-400 rounded-xl p-10 h-full'>

      <div className='overflow-hidden  flex h-full'>
      <div className='flex w-0.5screen items-center'>
        <ul className='flex flex-col h-2/4 gap-5 w-3/5 bg-white text-lg p-10  rounded-xl '>
      <h1 className='text-xl text-slate-800'>Let's get started! </h1>
            <li>Download Zoom to Your <br />Computer</li>
            <li>Check Your Audio & Video</li>
            <li>Invite Others to Join</li>
        </ul>
        <div className='flex h-1/2 text-2xl font-semibold flex-wrap w-1/2 p-10'>
            <pre className='w-full'>Start,join,and shedule meetings <br />directly from  Your Desktop <br />Client. </pre>
            
         <pre>          
             <button className='bg-blue-800 text-white p-5 rounded-xl'>Download Now</button>
          </pre>
            <img className=' h-5/6 mr-0 mb-0 ' src={Downloadzoom} />
        </div>
      </div>

      {/* <div className='flex width-screen h-screen'>
        <ul>
            <li>Download Zoom to Your <br />Computer</li>
            <li>Check Your Audio & Video</li>
            <li>Invite Others to Join</li>
        </ul>
        <div>
            <h1>Start,join,and shedule meetings <br />directly from  Your Desktop <br />Client. </h1>
            <button>Download Now</button>
            <img src={Downloadzoom} />
            </div>
          </div> */}
      </div>
      <div className='flex w-full justify-center gap-5'>
        <div>
        <h2 className='font-bold text-lg text-black'>TRAINNING/WEBINARS </h2>
        <ul className='text-lg p-10 bg-white rounded-xl w-0.5screen'>
        <li className='flex gap-5 '><p><span className='text-slate-500 text-sm'>LIVE DEMO</span> <br />
        Attend a 30-minute Daily Live <br /> Demo.</p>
        <button> Register Today</button>
        </li>
        <li className='flex gap-5 '><p><span className='text-slate-500 text-sm'> NEED HELP?</span> <br />
        Browse our quick “show me” <br />videos.</p>
        <button>Watch Now</button>
        </li>
        <li className='flex gap-5'><p><span className='text-slate-500 text-sm'>LIVE WEBINAR</span> <br />
        Join Zoom experts for a deep <br />dive into our products.</p>
        <button> Register Today</button>
        </li>
        </ul>
        </div>
        <div>
            <h2 className='font-bold text-lg'>RECURCES</h2>
        <ul className='text-lg p-10 bg-white rounded-xl w-0.5screen'>
            <li>Getting Started with Zoom</li>
            <li>Show Me Video-in-MeetingChat& <br />Reactions</li>
            <li>How Essential Apps Can Help Automate and <br />Grow Your Business</li>
            <li>6 Reasons to Upgrade Your Zoom Account <br />from Basic to Pro</li>
        </ul>
        </div>
      </div>
          </div>
    </div>
  )
}

export default MyHome
