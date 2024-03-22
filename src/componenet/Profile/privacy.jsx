import React from 'react'

function Privacy() {
  return (
    <div className='w-full h-full p-14 '>

    <div className='flex flex-col gap-10'>
      <nav className='flex flex-col gap-5'>
      <h1 className='font-bold text-3xl'>Data & Privacy</h1>
      <div>

      <h2 className='font-semibold text-3xl text-blue-700  border-b-4 border-solid border-blue-700 z-10 pb-1 w-fit'>Data Settings
      </h2><div className='w-full h-1 bg-black'/>
      </div>
      </nav>
      <ul className='flex flex-col gap-10'>
        <li className='flex flex-col gap-5'>
          <h3 className='text-xl font-semibold'>Diagnostic Data Preferences</h3>
          <p>Diagnostic data includes all service-generated data when you use Zoom services. It does not include <br />any customer content. <span className='text-blue-700'>Learn More</span> </p>
        </li>
        <li className='flex flex-col gap-5'>
          <h3 className='text-xl font-semibold'>Required Diagnostic Data</h3>
          <p>This data is necessary to help Zoom operate our services, provide support, and troubleshoot. <br /><span className='text-blue-700'>Learn More</span> </p>
        </li>
        <li className='flex w-full justify-between'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-xl font-semibold'>Optional Diagnostic Data</h3>
          <p>Allow collection of additional data that helps Zoom make product improvements and provide <br />enhanced information to help Zoom detect, diagnose, and remediate issues.<span className='text-blue-700'>Learn More</span></p>
        </div>

        </li>
      </ul>
      
    </div>
    </div>
  )
}

export default Privacy
