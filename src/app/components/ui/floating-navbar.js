"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "../../../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Initially visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Scroll event handler
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const scrollDirection = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        // At the top, always visible
        setVisible(true);
      } else {
        if (scrollDirection < 0) {
          // Scrolling up: show the nav
          setVisible(true);
        } else if (current > lastScrollY) {
          // Scrolling down: hide the nav
          setVisible(false);
        }
      }

      // Update the last scroll position
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100, // Hide the nav when not visible
          opacity: visible ? 1 : 0, // Fade out when not visible
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-gray-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative group flex items-center space-x-2 text-neutral-600 dark:text-neutral-50 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
            )}
          >
            {/* Icon with hover effects */}
            <span className="flex-shrink-0">
              {navItem.icon}
            </span>
            {/* Text */}
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {/* Add a subtle underline or border effect on hover */}
            <span className="absolute inset-x-0 bottom-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
        {/* Button for Logo with Hover Effect */}
        <button
          className="w-16 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full group"
        >
          <img
            src="/Logo.png"
            alt="Logo"
            className="transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900 rounded-full"
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
