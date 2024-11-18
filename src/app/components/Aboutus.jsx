import React from "react";
import { Meteors } from "./ui/meteors";
import Lottie from "lottie-react";
import AnimationLaptop from "../../app/AnimationLaptop.json";
import { Container } from "postcss";

export function Aboutus() {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
  
            <div className="flex w-full flex-col sm:flex-row sm:items-center sm:space-x-8">
              <div>
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  About Me
                </h1>
  
                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  I am a skilled Full Stack Web and App Developer with expertise in both front-end and back-end development.
                  I build responsive web and mobile applications using React, Vue.js, Node.js, Express, and Ruby on Rails.
                  On the mobile side, I create cross-platform apps with React Native.
                </p>
  
                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>
              </div>
  
              {/* لابتوب يظهر في الأسفل في وضع الشاشات الصغيرة */}
              <div className="w-full max-w-xs sm:max-w-full mt-8 sm:mt-0">
                <Lottie animationData={AnimationLaptop} />
              </div>
            </div>
  
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    );
  }
  