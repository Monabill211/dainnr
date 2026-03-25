"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesSection() {
  return (
    <section style={{padding:"10px",marginTop:"30px"}}>
      <div className="">

        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-sm text-gray-400 mb-3">
            ما الذي يجعلنا مميزين؟
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f2a3f] leading-snug">
            أربعة أسباب تجعل <br /> العرض المحظوظ هو الأفضل
          </h2>
        </motion.div>

        {/* MAIN BOX */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[50px] p-6 md:p-14 grid md:grid-cols-2 gap-14 shadow-sm">

          {/* 1 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" style={{margin:'auto', textAlign:"center",fontWeight:"bold"}} >
            <h3 className="text-2xl font-bold text-[#0f2a3f] mb-4">
              احصل على أعلى نسبة استرداد نقدي
            </h3>
            <p className="text-gray-600 leading-relaxed">
              وفر المال في كل عملية شراء باستخدام التطبيق سواء عبر الإنترنت
              أو داخل المتاجر.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] p-6 flex items-center justify-center hover:scale-105 transition"
          >
            <Image src="/iamge/WhatsApp Image 2026-03-25 at 11.04.28 PM_cleanup.png" alt="" width={320} height={320} />
          </motion.div>

          {/* 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          
          className="rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] p-6 flex items-center justify-center hover:scale-105 transition"
          >
            <Image src="/iamge/WhatsApp Image 2026-03-25 at 11.04.28 PM_cleanup.png" alt="" width={320} height={320} />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" style={{margin:'auto', textAlign:"center",fontWeight:"bold"}}>
            <h3 className="text-2xl font-bold text-[#0f2a3f] mb-4">
              هل تريد شراء شيء وليس لديك المال؟
            </h3>
            <p className="text-gray-600 leading-relaxed">
              احصل على حد ائتماني فوري واستخدمه بسهولة في الدفع.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" style={{margin:'auto', textAlign:"center",fontWeight:"bold"}}>
            <h3 className="text-2xl font-bold text-[#0f2a3f] mb-4">
              اعثر على أفضل العروض
            </h3>
            <p className="text-gray-600 leading-relaxed">
              اكتشف أفضل الخصومات والعروض من أشهر العلامات التجارية.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] p-6 flex items-center justify-center hover:scale-105 transition"
          >
            <Image src="/iamge/WhatsApp Image 2026-03-25 at 11.04.28 PM_cleanup.png" alt="" width={320} height={320} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}