import React from 'react'


const user = {name: "aerotech Logistics Ltd."}
const Navbar = () => {
  return (
    <div className='w-[100%] h-[10vh] flex justify-end items-center px-10 border-b border-gray-200'>
        <p className='font-semibold text-xl font-jost'>welcome, {user.name}</p>
        <button onClick={() => alert("logout")}>v</button>
    </div>
  )
}

export default Navbar