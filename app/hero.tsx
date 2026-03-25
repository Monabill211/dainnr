import React from 'react'

export default function Hero() {
  return (
        <div className='bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] flex flex-col justify-between align-center items-center text-center mt-10 bg-gray-100 h-screen' style={{padding:"20px", overflow:"hidden",marginBottom:"100px"}}>
        <h1 className='text-5xl font-black' style={{padding:"60px"}}>انضم الي اكثر من 10 مليون مستخدم</h1>
        <h2 className='text-2xl font-black' style={{padding:"20px"}}> .استمتع بحلول مالية بسيطة ومجزية ومتاحة للجميع كل يوم</h2>
        <h3 className='text-xl font-black' style={{padding:"20px"}}>!العرض الذي طال انتظاره</h3>
        <img src="https://images.ctfassets.net/3h69mkdgxn20/7f3q5Zywa4DEk6oPoU3Y1g/fa1114f9f9c2f0d7d95efcffe621a9bc/260126_TIDE_George_Ford_0955_rt-woBlue_1.svg" alt="Hero Image" 
        className='w-96'  />
    </div>
  )
}
