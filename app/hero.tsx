import React from 'react'

export default function Hero() {
  return (
        <div className='bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] flex flex-col align-center items-center text-center mt-10 bg-gray-100 h-screen' style={{padding:"20px", overflow:"hidden",marginBottom:"100px"}}>
        <h1 className='text-5xl font-black' style={{padding:"60px"}}>ادفع بذكاء بلمسة واحدة</h1>
        <h2 className='text-2xl font-black' style={{padding:"20px" ,marginBottom:"40px"}}> منصة دينار تمنحك القوة لأصدار بطاقات فيزا وماستر كارد افتراضية فورية للتسوق من أي مكان في العالم ,مع تحكم كامل وأمان لا يضاهي </h2>
<button className='text-white font-black bg-blue-400 rounded-4xl cursor-pointer  hover:bg-gray-300 hover:shadow-md transition-all hover:-translate-y-1 ' style={{padding:'20px 30px', marginBottom:'20px'}}>تحميل التطبيق</button>       
<button className='text-white font-black bg-blue-400 rounded-4xl cursor-pointer  hover:bg-gray-300 hover:shadow-md transition-all hover:-translate-y-1 ' style={{padding:'20px 30px'}}>كيف يعمل؟</button>       
    </div>
  )
}
