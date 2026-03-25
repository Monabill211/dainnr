export function CTASection() {
  return (
    <section className="" style={{padding:'100px 15px'}}>
      <div className="  rounded-3xl text-center text-white
     bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] relative overflow-hidden" style={{padding:"100px 30px" }}>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{padding:'10px'}}>
      مستقبلك المالي يبدا من    <span className="text-blue-5 b 00">هنا</span>
        </h2>

        {/* <p className="mb-6 opacity-90"style={{padding:'10px'}}>
          ابدأ دلوقتي واستمتع بأفضل الكاش باك والعروض
        </p> */}

        {/* <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"style={{padding:'20px 40px',marginTop:"10px"}}>
          حمّل التطبيق
        </button> */}
        <img src="/iamge/WhatsApp Image 2026-03-26 at 12.09.43 AM (1).jpeg" style={{borderRadius:'16px',width:"150px",margin:"10PX auto"}} />
        <img src="/iamge/WhatsApp Image 2026-03-26 at 12.09.43 AM.jpeg"  style={{borderRadius:'16px',width:"150px",margin:"10PX auto"}}/>
      </div>
    </section>
  );
}