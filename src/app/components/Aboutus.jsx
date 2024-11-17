import React from "react";
import { Meteors } from "./ui/meteors";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import AnimationLaptop from "../../app/AnimationLaptop.json";

export function Aboutus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center space-x-12 w-full relative">
        {/* Gradient background for blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl z-0" />

        {/* Main content with shadow and blur behind the laptop */}
        <div className="relative w-full max-w-3xl bg-gray-900 border border-gray-800 px-4 py-8 rounded-2xl flex flex-col justify-between items-start z-10">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white mb-4 z-10 relative">
            Meteors because they're cool
          </h1>
         
           <div className=" space-x-12 sm:mt-16 lg:grid-cols-3 lg:flex row  ">
          

          <p className="font-normal text-base text-slate-500 mb-4 z-10 relative">
            Skills
            <br />
            Frontend Development: React, React Native, Next.js, HTML5, CSS3,
            JavaScript (ES6+), TypeScript
            <br />
            UI/UX Design: Modern CSS, SASS, Styled Components, responsive design,
            accessibility best practices
            <br />
            Backend Knowledge: Experience with Node.js, Express.js, RESTful APIs,
            and Strapi for content management
            <br />
            Tooling: Git, Webpack, Babel, NPM, Yarn, Jest, Vercel, Firebase, Figma
          </p>
         


          <div className="relative w-full max-w-xs">
          {/* The gradient blur effect behind the laptop animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl z-0" />

          <div className="relative z-10">
            {/* Lottie Animation */}
            <Lottie animationData={AnimationLaptop} loop={true} />
          </div>
        </div>
        </div>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />

        </div>



        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </motion.div>
  );
}
