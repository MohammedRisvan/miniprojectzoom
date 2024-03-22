import React, { useState } from 'react'

function Business() {
    const [hide,setHide]=useState(false);
    const mordetailes=()=>{
        setHide(!hide)
    }
  return (
    <div className='px-10 py-5 w-full h-full'>
      <div className='flex items-center justify-around'>
        <button>Zoom One</button>
        <button>Zoom Phone</button>
        <button>Zoom Events & Webinars</button>
        <button>Zoom Rooms</button>
        <button>Zoom Contact Center</button>
        <button>Zoom Whiteboard</button>
        </div>
        <div className=''>
            <div className='flex flex-col'>
                <h1>Basic</h1>
                <h2>Free</h2>
                <button>View Current Plan</button>
                <ul>
                    <li>Meetings <span>up to 40 minutes per <br />meeting</span></li>
                    <li>100 Attendees <span>per meeting</span></li>
                    <li>White Board Basic</li>
                    <li>Team Chat</li>
                    <li>Mail & Calendar <br /><span>client</span></li>
                    <li>Clips Basic</li>
                    <li>Notes</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p>₹2,400 savings /year/user</p>
                <h1>Pro</h1>
                <h2>₹13,200. <span>/year/user</span> </h2>
                <button>Upgrade</button>
                <ul>
                    <li>Meetings <span>up to 30 hours per <br />meeting</span></li>
                    <li>100 Attendees <span>per meeting</span></li>
                    <li>Whiteboard Basic</li>
                    <li>Team Chat</li>
                    <li>Mail & Calendar <br /><span>Clients&Services</span></li>
                    <li>Clips Plus</li>
                    <li>Notes</li>
                    <li>AI ComPanion</li>
                    <li>Cloud Storage <span>5GB</span></li>
                    <li>Essential Apps <br /><span>Free premium apps for 1 year <br />(terms apply)</span></li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p>Best Value</p>
                <p>₹3,998 savings /year/user</p>
                <h1>Business</h1>
                <h2>₹19,990.<span>/year/user</span></h2>
                <button>Upgrade</button>
                <ul>
                    <li>Meetings <span>up to 30 hours per <br />meeting</span></li>
                    <li>300 Attendees <span>per meeting</span></li>
                    <li>Whiteboard</li>
                    <li>Team Chat</li>
                    <li>Mail & Calendar <span>Client & Service</span></li>
                    <li>Clips Plus</li>
                    <li>Notes</li>
                    <li>AI Companion </li>
                    <li>Cloud Storage <span>5GB</span></li>
                    <li>Essential Apps <span>Free premium apps for 1 year (terms apply)</span></li>
                    <li>Extras <span>SSO, managed domains & more</span> </li>
                    <li>Scheduler</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h1>Business Plus</h1>
                <p>Contact us for pricing information and more</p>
                <button>Contact Sales</button>
                <ul>
                    <li>Meetings  <span>up to 30 hours per meeting</span></li>
                    <li>300Atendees <span>per meeting</span></li>
                    <li>Whiteboard</li>
                    <li>Team Chat</li>
                    <li>Mail & Calendar <span>Clint&Service</span></li>
                    <li>Clips plus</li>
                    <li>Notes</li>
                    <li>AI Companion </li>
                    <li>Cloud Storage <span>10GB</span></li>
                    <li>Essential App</li>
                    <li>Essential Apps <span>Free premium apps for 1 year (terms apply)</span></li>
                    <li>Extras <span> SSO, managed domains & more</span></li>
                    <li>Scheduler</li>
                    <li>Phone<span> Global Select</span></li>
                    <li>Translated Captions</li>
                    <li>Workspace Reservation</li>
                    <li><span>NEW</span> Visitor Management</li>
                </ul>
            </div>
            <div>
                <h1>Enterprise</h1>
                <p>Contact us for pricing <br />information and more</p>
                <button>Contact Sales</button>
                <ul>
                    <li>Meetings <span> up to 30 hours per meeting</span></li>
                    <li>1000 Attendees <span>per meeting</span></li>
                    <li>Whiteboard</li>
                    <li>Team Chat</li>
                    <li>Mail&Calendar <br /><span>Clint&service</span></li>
                    <li>Clips plus</li>
                    <li>Notes</li>
                    <li>Ai Campanion</li>
                    <li>Sheduler</li>
                    <li>Cloud Storage <span> unlimited</span></li>
                    <li>Extras <span>SSO,managed domains <br />& more</span></li>
                    <li>Phone <span>Full-featured PBX</span></li>
                    <li>Translated Captions*</li>
                    <li>Rooms & Webinars</li>
                    <li>Workspace Reservation*</li>
                    <li><span>NEW</span> Visitor Management</li>
                </ul>
                <button onClick={mordetailes}>See detailes</button>
            </div>
        </div>
    </div>
  )
}

export default Business
