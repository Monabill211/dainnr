"use client";
import React, { useState } from "react";

// ─── Feature Cards ─────────────────────────────────────────────────

function VisaCard() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
      style={{
        width: 240, height: 140,
        background: "linear-gradient(135deg,#2d1b8e 0%,#7c3aed 50%,#4f46e5 100%)",
        animation: "floatY 4s ease-in-out infinite",
      }}
    >
      <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.3),transparent 50%)" }} />
      <div className="absolute top-4 right-4">
        <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
          <circle cx="14" cy="20" r="12" fill="white" opacity="0.9" />
          <circle cx="26" cy="20" r="12" fill="#a78bfa" opacity="0.85" />
        </svg>
      </div>
      <div className="absolute bottom-4 left-4">
        <span className="text-white text-2xl font-black italic tracking-wider">VISA</span>
      </div>
      <div className="absolute bottom-10 right-4 flex gap-1 items-center">
        {[...Array(3)].map((_, i) => <span key={i} className="w-1.5 h-1.5 bg-white/60 rounded-full" />)}
        <span className="mx-1" />
        {[...Array(3)].map((_, i) => <span key={i} className="w-1.5 h-1.5 bg-white/60 rounded-full" />)}
        <span className="ml-1 text-white/80 text-xs font-semibold">4521</span>
      </div>
    </div>
  );
}

function PadlockSVG() {
  return (
    <div style={{ animation: "floatY2 5s ease-in-out infinite" }} className="mx-auto">
      <svg width="120" height="140" viewBox="0 0 110 130" fill="none">
        <rect x="28" y="8" width="54" height="55" rx="27" fill="none" stroke="url(#sg)" strokeWidth="13" />
        <rect x="8" y="55" width="94" height="67" rx="16" fill="url(#bg2)" />
        <circle cx="55" cy="83" r="12" fill="url(#hg2)" />
        <rect x="50" y="83" width="10" height="18" rx="5" fill="url(#hg2)" />
        <ellipse cx="30" cy="70" rx="12" ry="6" fill="white" opacity="0.18" />
        <defs>
          <linearGradient id="sg" x1="28" y1="8" x2="82" y2="63" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c0c0c8" /><stop offset="1" stopColor="#a0a0b0" />
          </linearGradient>
          <linearGradient id="bg2" x1="8" y1="55" x2="102" y2="122" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9a8d4" /><stop offset="0.5" stopColor="#ec4899" /><stop offset="1" stopColor="#be185d" />
          </linearGradient>
          <linearGradient id="hg2" x1="43" y1="71" x2="67" y2="101" gradientUnits="userSpaceOnUse">
            <stop stopColor="#831843" /><stop offset="1" stopColor="#500724" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChatBubbles() {
  return (
    <div className="relative w-44 h-44 mx-auto flex items-center justify-center" style={{ animation: "floatY 4s ease-in-out infinite",margin:"a" }}>
      <div className="absolute w-28 h-28 rounded-full opacity-80" style={{ background: "linear-gradient(135deg,#c084fc,#a855f7)", right: -10, top: 0 }} />
      <div className="absolute w-24 h-24 rounded-full" style={{ background: "linear-gradient(135deg,#e879f9,#c026d3)", left: 0, bottom: 0 }}>
        <div className="absolute inset-0 flex items-center justify-center gap-1.5">
          {[...Array(3)].map((_, i) => <div key={i} className="w-2.5 h-2.5 bg-white rounded-full" />)}
        </div>
      </div>
      <div className="absolute w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#818cf8,#6366f1)", right: 5, bottom: 5 }}>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}

function InnovationPhone() {
  return (
    <div className="rounded-t-3xl overflow-hidden border-4 border-gray-700 w-2xs"
      style={{ width: 220,padding:"25px", background: "#0d0920", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.4))" }}>
      <div className="flex justify-between items-center px-4 pt-2.5 pb-1">
        <span className="text-white text-[10px] font-semibold">20:00</span>
        <div className="flex items-center gap-0.5 border border-white/60 rounded-sm px-0.5 py-0.5">
          <div className="bg-white h-2 rounded-sm w-3" />
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pb-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        <span className="text-white text-[10px] font-semibold">Lucky ONE™Card</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3" /></svg>
      </div>
      <div className="px-4 pb-2">
        <p className="text-gray-500 text-[8px] mb-0.5">CASH BALANCE</p>
        <p className="text-white text-xl font-bold">EGP 20,000</p>
        <p className="text-gray-600 text-[8px] mt-0.5">CREDIT BALANCE  EGP 20,000</p>
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-4">
        {[
          { label: "Add cash", d: <path d="M12 2v20M2 12h20" /> },
          { label: "Send money", d: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /> },
          { label: "Cash out", d: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></> },
        ].map(({ label, d }) => (
          <div key={label} className="flex flex-col items-center gap-1 rounded-xl py-2" style={{ background: "rgba(255,255,255,0.08)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">{d}</svg>
            <span className="text-white text-[7px]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCardsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 py-16" dir="rtl">
      <style>{`
        @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes floatY2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)}  }
        @keyframes fadeIn  { from{opacity:0;transform:translateX(14px)} to{opacity:1;transform:translateX(0)} }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5
      ">

        {/* Card 1 – Financial Inclusion */}
        <div className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[300px]"
          style={{ background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#7c3aed 100%)" }}>
          <div className="text-center z-10 relative" style={{padding:"25px ",margin:"auto"}}>
            <h3 className="text-white text-2xl font-bold mb-2">تمكين الشمول المالي</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs ml-auto">
              بطاقات مسبقة الدفع وخطوط ائتمان بمعايير تعتمد على التعلم الآلي توفر لك حلولاً مالية سهلة الوصول.
            </p>
          </div>
          <div className="z-10 relative mt-4"><VisaCard /></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle,#a78bfa,transparent 70%)" }} />
        </div>

        {/* Card 2 – Security */}
        <div className="bg-white relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[300px] border border-gray-100">
          <div className="flex-1 flex items-center justify-center"><PadlockSVG /></div>
          <div className="text-center mt-4" style={{padding:"25px ",margin:"auto"}}>
            <h3 className="text-gray-900 text-xl font-bold mb-2">أعلى مستوى من الأمن</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              الاستفادة من إجراءات أمنية متقدمة لحماية بيانات المستخدمين والمعلومات المالية، مما يضمن منصة آمنة وموثوقة
            </p>
          </div>
        </div>

        {/* Card 3 – Customer Support */}
        <div className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between min-h-[300px]" style={{ background: "#0f0f1a" }}>
          <div className="flex-1 flex items-center justify-center"><ChatBubbles /></div>
          <div className="text-center mt-4" style={{padding:"25px ",margin:"auto"}}>
            <h3 className="text-white text-xl font-bold mb-2">دعم عملاء مخصص</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              نقدم دعمًا للعملاء على مدار الساعة طوال أيام الأسبوع لمعالجة الاستفسارات وتقديم المساعدة، مما يضمن خدمة سريعة وموثوقة كلما احتجت إليها.
            </p>
          </div>
        </div>

        {/* Card 4 – Innovation */}
        <div className="relative rounded-3xl overflow-hidden p-8 flex flex-col min-h-[300px]"
          style={{ background: "linear-gradient(145deg,#1a0a3e 0%,#0d1b4b 60%,#1a1a3e 100%)" }}>
          <div className="text-center  mb-4 z-10 relative" style={{padding:"25px ",margin:"auto"}}>
            <h3 className="text-white text-xl font-bold mb-2">التركيز على الابتكار والتكنولوجيا</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs ml-auto">
              الاستثمار في أحدث التقنيات والابتكارات لتطوير ميزات وخدمات جديدة تعزز تجربة المستخدم.
            </p>
          </div>
          <div className="flex-1 flex items-end justify-center z-10 relative"><InnovationPhone /></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)" }} />
        </div>

      </div>
    </section>
  );
}

// ─── 3 Steps – Phone Screens ──────────────────────────────────────

function IDScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex justify-between items-center px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-800">
        <span>10:10</span><span>▌▌▌ 🔋</span>
      </div>
      <div className="flex-1 px-3 pb-3 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          <span className="text-[11px] font-semibold text-gray-800">ID Verification</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </div>
        <div className="h-[3px] bg-gray-200 rounded-full mb-1"><div className="h-full bg-violet-600 rounded-full w-[9%]" /></div>
        <p className="text-[9px] text-gray-400 mb-2">STEP 1/11</p>
        <p className="text-[11px] font-semibold text-gray-900 mb-2 leading-snug">Take a picture of the front of your ID</p>
        <div className="rounded-xl p-2.5 mb-2" style={{ background: "linear-gradient(135deg,#fef9c3,#fde68a)" }}>
          <div className="flex gap-2">
            <div className="w-8 h-10 rounded bg-amber-500 flex-shrink-0" />
            <div className="flex flex-col gap-1 flex-1 pt-1">
              {[100, 75, 85, 60].map((w, i) => <div key={i} className="h-[5px] rounded bg-amber-700/25" style={{ width: `${w}%` }} />)}
            </div>
          </div>
        </div>
        <p className="text-center text-[9px] font-bold text-gray-400 tracking-widest mb-2">FRONT</p>
        <div className="flex justify-around mb-3">
          {["Don't crop", "Not blurry", "No reflection"].map((t) => (
            <div key={t} className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </div>
              <span className="text-[7px] text-gray-500">{t}</span>
            </div>
          ))}
        </div>
        <button onClick={onNext} className="mt-auto bg-violet-700 text-white text-[11px] rounded-lg py-2 w-full hover:bg-violet-800 transition-colors">
          Next →
        </button>
      </div>
    </div>
  );
}

function SelfieScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex justify-between items-center px-4 pt-2 pb-1 text-[10px] font-semibold text-gray-800">
        <span>10:12</span><span>▌▌▌ 🔋</span>
      </div>
      <div className="flex-1 px-3 pb-3 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          <span className="text-[11px] font-semibold text-gray-800">Face Verification</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </div>
        <div className="h-[3px] bg-gray-200 rounded-full mb-1"><div className="h-full bg-violet-600 rounded-full w-[45%]" /></div>
        <p className="text-[9px] text-gray-400 mb-2">STEP 5/11</p>
        <p className="text-[11px] font-semibold text-gray-900 mb-3 leading-snug">Position your face in the oval to verify your identity</p>
        <div className="mx-auto mb-3 flex items-center justify-center border-2 border-violet-600"
          style={{ width: 70, height: 90, borderRadius: "50%" }}>
          <div className="flex flex-col items-center justify-end overflow-hidden" style={{ width: 56, height: 70 }}>
            <div className="w-8 h-8 rounded-full bg-gray-300 mb-0.5" />
            <div className="w-11 h-7 bg-gray-200 rounded-t-full" />
          </div>
        </div>
        <div className="text-[9px] text-gray-500 leading-relaxed mb-3 space-y-1">
          <p>✓ Look straight into the camera</p>
          <p>✓ Make sure your face is well-lit</p>
          <p>✓ Remove glasses or hat</p>
          <p>✓ Stay within the frame</p>
        </div>
        <button onClick={onNext} className="mt-auto bg-violet-700 text-white text-[11px] rounded-lg py-2 w-full hover:bg-violet-800 transition-colors">
          Take selfie →
        </button>
      </div>
    </div>
  );
}

function ActiveAppScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: "#0d0920" }}>
      <div className="flex justify-between items-center px-4 pt-2 pb-1 text-[10px] font-semibold text-white">
        <span>10:15</span><span>▌▌▌</span>
      </div>
      <div className="flex-1 px-3 pb-3 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          <span className="text-[11px] font-semibold text-white">Lucky ONE™Card</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /></svg>
        </div>
        <p className="text-[9px] text-gray-500 mb-0.5">CASH BALANCE</p>
        <p className="text-[22px] font-semibold text-white leading-tight">EGP 20,000</p>
        <p className="text-[9px] text-gray-600 mb-3">CREDIT BALANCE  EGP 20,000</p>
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {[
            { label: "Add cash",    d: <path d="M12 2v20M2 12h20" /> },
            { label: "Send money",  d: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /> },
            { label: "Cash out",    d: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></> },
          ].map(({ label, d }) => (
            <div key={label} className="flex flex-col items-center gap-1 rounded-xl py-2" style={{ background: "rgba(255,255,255,0.07)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">{d}</svg>
              <span className="text-[8px] text-white">{label}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-2" style={{ background: "rgba(255,255,255,0.05)" }}>
          <p className="text-[9px] text-gray-500 mb-2">Recent transactions</p>
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.97-1.61L23 6H6" />
                </svg>
              </div>
              <span className="text-[9px] text-gray-300">Online shop</span>
            </div>
            <span className="text-[9px] text-red-400">-EGP 450</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(52,211,153,0.15)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <span className="text-[9px] text-gray-300">Cash in</span>
            </div>
            <span className="text-[9px] text-emerald-400">+EGP 5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 3 Steps Section ──────────────────────────────────────────────

const stepsData = [
  { label: "الخطوة 1 من 3", title: "التحقق من الهوية",  desc: "ارفع صورة من بطاقتك الشخصية الأمامية والخلفية بوضوح كامل بدون ضبابية أو انعكاس" },
  { label: "الخطوة 2 من 3", title: "التحقق من الوجه",   desc: "ضع وجهك داخل الإطار البيضاوي وانظر مباشرة للكاميرا، تأكد من الإضاءة الجيدة وإزالة النظارة" },
  { label: "الخطوة 3 من 3", title: "البطاقة شغالة!",    desc: "تم التحقق بنجاح! بطاقتك Lucky ONE جاهزة، دلوقتي تقدر تحمل وتبعت وتسحب فلوس" },
];

function ThreeStepsSection() {
  const [current, setCurrent] = useState(0);

  const screens = [
    <IDScreen     key={0} onNext={() => setCurrent(1)} />,
    <SelfieScreen key={1} onNext={() => setCurrent(2)} />,
    <ActiveAppScreen key={2} />,
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-5 pb-16" dir="rtl">
      <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(145deg,#f0eeff,#ede8ff)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] ">

          {/* Text side */}
          <div className="p-10 flex flex-col justify-center text-right">
            <div className="inline-flex items-center gap-2 self-end mb-6">
              <span className="text-sm font-semibold text-gray-600">بطاقات لاكي ون المدفوعة مسبقاً</span>
              <span className="text-xl">🪪</span>
            </div>
            <h2 className="font-black text-gray-900 leading-tight mb-6 tracking-tight text-4xl md:text-5xl">
              احصل على بطاقتك<br />في ثلاث خطوات<br />بسيطة
            </h2>
            <div className="flex gap-2 justify-end mb-4">
              {stepsData.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === current ? 22 : 8, background: i === current ? "#111" : "#ccc" }}
                />
              ))}
            </div>
            <p className="text-sm text-gray-400 mb-1">{stepsData[current].label}</p>
            <p className="text-base font-semibold text-gray-900 mb-1">{stepsData[current].title}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">{stepsData[current].desc}</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0}
                className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-900 transition-colors disabled:opacity-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>
              <button onClick={() => setCurrent((c) => Math.min(2, c + 1))} disabled={current === 2}
                className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-700 transition-colors disabled:opacity-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Phone side */}
          <div className="relative flex items-end justify-center pt-8 px-8 overflow-hidden">
            <div className="relative z-10 rounded-[38px] overflow-hidden border-[5px] border-[#2a2a2a]"
              style={{ width: 230, background: "#1a1a1a", boxShadow: "0 24px 60px rgba(0,0,0,0.2)" }}>
              <div className="flex justify-center pt-1.5" style={{ background: "#1a1a1a" }}>
                <div className="w-20 h-[5px] rounded-full bg-black" />
              </div>
              <div style={{ height: 430, overflow: "hidden" }}>
                <div key={current} style={{ animation: "fadeIn 0.3s ease" }} className="h-full">
                  {screens[current]}
                </div>
              </div>
            </div>
            {/* Ghost phone */}
            <div className="absolute -right-14 bottom-0 opacity-35 z-0 rounded-[34px] border-4 border-gray-300"
              style={{ width: 200, height: 380, background: "linear-gradient(135deg,#e8e0ff,#d4c5ff)" }} />
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 60% 80%,rgba(167,139,250,0.15) 0%,transparent 70%)" }} />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────

export default function Play() {
  return (
    <div className="flex flex-col justify-between items-center text-center mt-10 bg-gray-100" style={{ padding: "20px" }}>
      <h1 className="text-5xl font-black" style={{ padding: "60px" }}>
        تجربة مستخدم سلسة ومكافآت
      </h1>
      <h3 className="text-xl font-black" style={{ padding: "20px" }}>
        ! تتيح واجهة المستخدم سهلة الاستخدام سهولة التنقل في التطبيق والوصول إلى جميع ميزاته.
        يمكنك الاطلاع على رصيد حسابك وسجل معاملاتك في مكان واحد، ودفع الفواتير، وتحويل الأموال،
        وشحن حسابك ببضع نقرات فقط.
      </h3>
      <img
        src="/iamge/WhatsApp Image 2026-03-25 at 7.33.53 PM.jpeg"
        alt="Hero Image"
        className="w-96"
        style={{ marginTop: "50px" }}
      />

      {/* ── 4 Feature Cards ── */}
      <FeatureCardsSection />

      {/* ── 3 Steps Interactive ── */}
      <ThreeStepsSection />
    </div>
  );
}
