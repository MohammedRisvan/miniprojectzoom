import React from 'react'

function Note() {
  return (
    <div className='w-full h-full bg-blue-100 p-14'>
      <div className='flex flex-col gap-7'>

        <div className='flex justify-between'>
            <h1 className="text-3xl font-semibold">Notes</h1>
            <button className='bg-blue-700 text-white py-2 px-3 rounded-lg font-semibold'>New</button>
        </div>
        <div className='flex flex-col'>
            <ul className='flex text-2xl gap-3'>
                <li>All Notes</li>
                <li>Recent</li>
                <li>My Notes</li>
                <li>Shared with Me</li>
                <li>Starred</li>
                <li>Trash</li>
            </ul>
            <div className='w-full h-1  '/>
        </div>
      </div>
    </div>
  )
}

export default Note
