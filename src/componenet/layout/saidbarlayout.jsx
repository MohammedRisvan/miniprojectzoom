import React from 'react'
import Saidbar from '../Profile/saidbar'
import IndexNavbar from '../home/homeNav'
import Footer from '../home/Footer'
import { Outlet } from 'react-router-dom'

function SaidbarLayout() {
  return (
    <div className='flex flex-col'> 
        <IndexNavbar/>
        <div className='flex '>
      <Saidbar/>
        <Outlet />
        </div>
<Footer/>
    </div>
  )
}

export default SaidbarLayout
