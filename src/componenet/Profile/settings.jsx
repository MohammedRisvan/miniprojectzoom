import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-col w-full p-14 bg-slate-200'>
      <div className='flex flex-col gap-10'>
      <div className='flex w-full p'>
        <input className='border-1 border-solid border-black w-1/2 text-lg' type='text'placeholder='Search Settings'/>
      </div>
    <ul className=' overflow-hidden h-10 flex w-full gap-5 text-3xl'>
        <li>General</li>
        <li>Meeting</li>
        <li>Recording</li>
        <li>Audio Conferencing</li>
        <li>Zoom Apps</li>
        <li>Whiteboards</li>
        <li>Notes <span>New</span></li>
        <li>Clips <span>New</span></li>
    </ul>
    </div>
    </div>
  )
}

export default Settings
