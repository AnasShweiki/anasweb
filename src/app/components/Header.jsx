// Header.jsx
'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll'; // مكتبة للتحكم في التمرير

const navigation = [
  { name: 'Protfolio', href: 'tab1' }, // اجعل href يمثل ID للقسم المطلوب
  { name: 'Skills', href: 'tab2' },
  { name: 'AboutUs', href: 'tab3' },
  { name: 'Contact', href: 'Contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // دالة التمرير للعنصر المحدد مع إضافة انيميشن سلس
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800, // مدة الحركة
      delay: 0,
      smooth: 'easeInOutQuart', // نوع الحركة
    });
  };

  return (
    <div className="relative z-50 bg-slate-950 shadow-2xl">
      <header className="relative z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <motion.img
                alt="Logo"
                src="/Logo.jpg"
                className="h-20 w-auto rounded-full bg-slate-950 "
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-slate-300 hover:text-indigo-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="#"
              className="text-sm font-semibold text-slate-300 hover:text-indigo-500"
              whileHover={{ scale: 1.05 }}
            >
              Contact <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </nav>
      </header>
      <div className="absolute inset-0 z-10 bg-transparent" />
    </div>
  );
};

export default Header;
