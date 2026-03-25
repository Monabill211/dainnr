      "use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "أحمد محمد",
    text: "خدمة ممتازة بجد! وفرت فلوس كتير باستخدام الكارت.",
  },
  {
    name: "سارة علي",
    text: "التجربة سهلة جدًا وسريعة، وأنصح أي حد يجربها.",
  },
  {
    name: "محمود حسن",
    text: "أفضل عروض شفتها في مصر بصراحة.",
  },
];

export default function Tstmoinas() {
  return (
  
     
    <section className="py-20 px-4 text-center" style={{padding:'100px 15px'}}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{marginBottom:"50px"}}>
        أصوات حقيقية، نتائج حقيقية
      </h2>

      <div className=" flex flex-wrap gap-6 justify-evenly mt-10 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-100 w-72 rounded-2xl p-6 shadow-md flex flex-col items-center gap-2.5"
            style={{padding:'40px'}}
          >
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <h4 className="font-bold">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>

    );
}
