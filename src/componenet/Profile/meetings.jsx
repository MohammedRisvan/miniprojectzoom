import React from 'react'

function Meetings() {
  return (
    <div className='flex flex-col h-30 w-5/6 px-14 gap-10'>
        <div className='flex  justify-between pt-10'>
        <h1 className='text-3xl font-semibold'>Meetings</h1>
        <p>Get Training</p>
        </div>
      <div  className='flex flex-col gap-3'>
        <div className=' flex w-full text-3xl gap-5'>
        <h1>Upcoming</h1>
        <h1>Previous</h1>
        <h1>Personal Room</h1>
        <h1>Meeting Templates</h1>
        </div>
      <div className='w-full h-1 bg-slate-200'/>
      </div>
    </div>
  )
}

export default Meetings
