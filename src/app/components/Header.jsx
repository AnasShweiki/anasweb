'use client'

import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaBars, FaTimes } from 'react-icons/fa'  // استبدال الأيقونات بـ react-icons
import { motion } from 'framer-motion'  // مكتبة الأنيميشن

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative z-50 bg-slate-950 shadow-2xl">
      <header className="relative z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <motion.img
                alt="Logo"
                src="https://cdn.sanity.io/images/kts928pd/production/932e2f37f151c3f2a10b594834614b04af2cc6f2-1200x843.png"
                className="h-8 w-auto"
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
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-300 hover:text-indigo-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="#"
              className="text-sm font-semibold text-slate-300 hover:text-indigo-500"
              whileHover={{ scale: 1.05 }}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu - Modal with react-modal */}
        <Modal
          isOpen={mobileMenuOpen}
          onRequestClose={() => setMobileMenuOpen(false)}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-indigo-400"
            >
              <span className="sr-only">Close menu</span>
              <FaTimes aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-slate-300 hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="py-6">
                <motion.a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-300 hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                >
                  Log in
                </motion.a>
              </div>
            </div>
          </div>
        </Modal>
      </header>

      {/* خلفية ثابتة بدون ألوان */}
      <div className="absolute inset-0 z-10 bg-transparent" />
    </div>
  )
}

export default Header
