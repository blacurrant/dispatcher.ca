import React from 'react'


const user = {name: "aerotech Logistics Ltd."}
const Navbar = () => {
  return (
    <div onClick={() => alert("logout")} className='w-[100%] h-[10vh] flex justify-end items-center px-10 border-b border-gray-200 cursor-pointer'>
        <p className='font-semibold text-xl font-jost'>welcome, {user.name}</p>
        <button>v</button>
    </div>
  )
}

export default Navbar