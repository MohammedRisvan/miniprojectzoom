import React from 'react'
import csv from '../images/csv.jpg'
function PersonalContact() {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center'>
        <div className='flex w-full justify-between'>
      <h1 className='text-3xl font-semibold'>Personal Contacts</h1>
      <p><a href="#">Help</a></p>
        </div>
        <div className='flex flex-col gap-5 items-center'>
            <img src={csv} alt="" />
            <p>No contacts added to your Zoom account.</p>
            <button className='flex gap-3'>
                <button className='bg-blue-600 px-3 py-2 rounded-xl text-white'>+ Import from CSV File</button>
                <button className='border-2 border-solid px-3 py-2 border-black rounded-xl'>+ Add Contact</button>
            </button>
            <p>For Google Calendar, Microsoft Exchange, and Microsoft Office 365, sync your contacts <span> here</span>.</p>
        </div>
    </div>
  )
}

export default PersonalContact
