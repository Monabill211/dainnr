import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between align-center shadow-2xl  bg-blue-500 shadow text-white ' style={{padding:"20px"}}>
      <h1 className='text-4xl ' style={{padding:"10px"}}>Dinna</h1>
      <button className='bg-white text-black text-2xl rounded-4xl cursor-pointer hover:bg-gray-300 hover:shadow-md transition-all hover:-translate-y-1  ' style={{padding:"15px"}}>حمل التطبيق الان</button>
    </div>
  )
}
