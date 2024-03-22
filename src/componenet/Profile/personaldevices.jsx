import React from 'react'

function PersonalDevices() {
  return (
    <div className='flex flex-col gap-14 p-14 w-full'>
      <h1 className='font-semibold text-3xl'>Perosonal Devices</h1>
    <div className='flex w-full justify-center'>
      <p className='text-2xl w-4/6'>You have no collaboration devices configured on your account.
See <span className='text-blue-600'>THIS LINK </span> for more information about Zoom for Home devices.</p>
    </div>
    </div>
  )
}

export default PersonalDevices
