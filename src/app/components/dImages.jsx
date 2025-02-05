import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import "../globals.css";

const Dimages = () => {
  const [isInViewport, setIsInViewport] = useState(false);

  const handleScroll = () => {
    const images = document.querySelectorAll(".image");
    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      // إذا كانت الصورة في منطقة العرض، نزيل البلور
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        img.classList.add('visible');
        img.classList.remove('blur-sm');  // Remove blur when image is in view
      } else {
        img.classList.remove('visible');
        img.classList.add('blur-sm');  // Reapply blur when image is out of view
      }
    });
  };

  // لتفعيل تأثير التمرير فقط عند تحميل الصفحة
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // الاستدعاء الأولي للتحقق من الصورة عند التمرير
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <motion.p 
          className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, color: "#ff80b5" }}
        >
          Everything you need to deploy your app
        </motion.p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* First Card with Motion */}
          <motion.div
            className="relative lg:row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="absolute inset-px rounded-lg bg-slate-950 blur-sm lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] hover:bg-slate-950 rounded-sm hover:scale-105 motion-reduce:transform-none hover:shadow-lg hover:shadow-slate-800">
              <motion.div 
                className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#ff80b5" }}
              >
                <p className="mt-2 text-lg font-medium tracking-tight text-red-50 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </motion.div>

              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw]">
                  <motion.img
                    className="size-full object-cover object-top blur-sm image hover:scale-110 motion-reduce:transform-none hover:blur-none"
                    src="/0_1Bt22q3kisohif6A.png"
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </motion.div>

          {/* Second Card with Motion */}
          <motion.div
            className="relative max-lg:row-start-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="absolute inset-px rounded-lg bg-slate-950 blur-sm max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] hover:bg-slate-950 rounded-sm hover:scale-105 motion-reduce:transform-none hover:shadow-lg hover:shadow-slate-800">
              <motion.div 
                className="px-8 pt-8 sm:px-10 sm:pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#ff80b5" }}
              >
                <p className="mt-2 text-lg font-medium tracking-tight text-red-50 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </motion.div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <motion.img
                  className="scale-x-95 rounded-lg w-full max-lg:max-w-xs border-spacing-72 blur-sm image hover:blur-none"
                  src="/c1268070-750f-4104-9877-bf199175ba0a-cover.png"
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </motion.div>

          {/* Third Card with Motion */}
          <motion.div
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="absolute inset-px rounded-lg bg-slate-950 blur-sm "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] hover:bg-slate-950 rounded-sm hover:bg-slate-950 hover: rounded-full transform hover:scale-105 motion-reduce:transform-none  hover:shadow-lg hover:shadow-slate-800">
              <motion.div 
                className="px-8 pt-8 sm:px-10 sm:pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#ff80b5" }}
              >
                <p className="mt-2 text-lg font-medium tracking-tight text-red-50 max-lg:text-center">TeamWork</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </motion.div>

              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <motion.img
                  className="h-[min(152px,40cqw)] object-cover object-center w-full rounded scale-95 blur-sm image hover:blur-none"
                  src="/images.jpg"
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </motion.div>

          {/* Fourth Card with Motion */}
          <motion.div
            className="relative lg:row-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="absolute inset-px rounded-lg bg-slate-950 blur-sm max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]  hover:bg-slate-950 rounded-sm hover:scale-105 motion-reduce:transform-nonehover:shadow-lg hover:shadow-slate-800">
              <motion.div 
                className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, color: "#ff80b5" }}
              >
                <p className="mt-2 text-lg font-medium tracking-tight text-red-50 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </motion.div>

              <div className="w-full grow">
                <motion.img
                  className=" scale-95 w-full h-full rounded blur-sm image hover:blur-none"
                  src="/DTFsuperstore.com++Responsive+E-Commerce+Website+Design.jpg"
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dimages;
