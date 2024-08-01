import React from 'react'
import Sidebar from '../pages/privatePages/Sidebar'
import Navbar from '../pages/privatePages/Navbar'
import CreateTrip from '../pages/privatePages/CreateTrip'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex w-[100%] h-[100vh]'>
        <div className='w-[20%] h-[100vh]'>
            <Sidebar />
        </div>
        <div className='flex flex-col w-[80%] h-[100vh]'>
            <Navbar />
            <Outlet />
            {/* <CreateTrip /> */}
        </div>
    </div>
  )
}

export default Layout