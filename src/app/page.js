// pages/index.jsx
"use client";
import { useRef } from "react";
import Dimages from "./components/dImages";
import Portfolio from "./components/Portfolio";
import Typewriter from "./components/Typewriter";
import ScrollAnimation from "./components/ScrollAnimation";
import { motion } from "framer-motion";
import BackgroundGradient from "./components/BackgroundGradient";
import Footer from "./components/Footer"

export default function Example() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="isolate px-6 pt-14 lg:px-4 bg-gray-950">
      <BackgroundGradient />

      <div className="sm:flex sm:justify-center">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <ScrollAnimation>
            <motion.div className="hidden sm:mb-8 sm:flex sm:justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                You In SlashWeb Injoy.
                <a href="#" className="font-semibold text-[#7775D6]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] leading-tight" initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
              Transform Your Ideas into{" "}
              <span className="text-[#7775D6]">
                <Typewriter text="Innovative Tech Solutions" speed={120} />
              </span>
            </motion.h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <motion.p className="mt-4 text-lg sm:text-xl font-medium text-[#555555]" initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}>
              We create websites and apps that help your business grow, turning your digital ideas into reality.
            </motion.p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.button onClick={scrollToFooter} className="rounded-md bg-[#7775D6] px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7775D6]" whileHover={{ scale: 1.1, backgroundColor: "#4c51bf" }} transition={{ duration: 0.3 }}>
                Get started
              </motion.button>
              <motion.a href="#" className="text-lg font-semibold text-[#333333]" whileHover={{ scale: 1.1, color: "#7775D6" }} transition={{ duration: 0.3 }}>
                Learn more <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <Dimages />
      <Portfolio />

      {/* Footer Section */}
      <footer ref={footerRef} >
        <Footer/>
      </footer>
    </div>
  );
}
