import React from 'react'
import { Outlet } from 'react-router-dom'

function WhiteBoard() {
  return (
    <div className='flex flex-col w-full  p-14'>
        <div className='flex justify-between p-2 w-full'>
      <h1 className='text-3xl font-semibold'> Whiteboards</h1>
      <button className='text-white bg-blue-600 px-3 py-2 rounded'>+ New Whiteboard</button>
        </div>
        <div className='flex flex-col gap-3'>
        <ul className='flex gap-5 w-full text-3xl p-5'>
            <li>All Whiteboards</li>
            <li>Recent</li>
            <li>My Whiteboards</li>
            <li>Shared With Me</li>
            <li>Starred</li>
            <li>Trash</li>
            <li>Projects</li>
        </ul>
        <div className='h-1 w-full bg-slate-300'/>
        </div>
        <Outlet/>
    </div>
  )
}

export default WhiteBoard
