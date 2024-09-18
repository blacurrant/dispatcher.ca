import React from 'react'
import Sidebar from '../pages/privatePages/Sidebar'
import Navbar from '../pages/privatePages/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col w-[100%] h-[100vh] bg-blue-100'>
        <div className='w-[100%] h-fit'>
            <Navbar />
        </div>
        <div className='flex w-[100%] h-full'>
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout