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
import AnimationLaptop from "../app/AnimationLaptop.json"
import { NavHeader } from "./components/Header";
import { HeroParallaxDemo } from "./components/Heroparallax";
import { Aboutus } from "./components/Aboutus";

export default function Example() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
          <div className=" dark:bg-black isolate px-6 pt-14 lg:px-4 bg-gray-950  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">

         <NavHeader/>
      <BackgroundGradient />
      <HeroParallaxDemo/>
              <Aboutus/>
      <Dimages />
      <Portfolio />

      {/* Footer Section */}
      <footer ref={footerRef} >
        <Footer/>
      </footer>
    </div>
  );
}
