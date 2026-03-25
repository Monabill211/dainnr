export function CTASection() {
  return (
    <section className="px-4 py-20" style={{padding:'100px 15px'}}>
      <div className="max-w-5xl mx-auto rounded-3xl p-10 text-center text-white
     bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] relative overflow-hidden" style={{padding:"100px"}}>

        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{padding:'10px'}}>
          فوق فلوسك مع لاكي وان
        </h2>

        <p className="mb-6 opacity-90"style={{padding:'10px'}}>
          ابدأ دلوقتي واستمتع بأفضل الكاش باك والعروض
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"style={{padding:'20px 40px',marginTop:"10px"}}>
          حمّل التطبيق
        </button>
      </div>
    </section>
  );
}