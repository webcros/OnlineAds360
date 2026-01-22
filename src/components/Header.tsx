'use client';

import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (direction === "down" && latest > 100 && isVisible) {
      setIsVisible(false);
    } else if (direction === "up" && !isVisible) {
      setIsVisible(true);
    }
    lastScrollY.current = latest;
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center z-50">
              <Image
                src="/images/Logo.png"
                alt="OnlineAds360"
                width={180}
                height={60}
                className="w-[140px] md:w-[180px] h-auto"
              />
            </Link>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <Link 
                    href={link.href} 
                    className={`text-[16px] font-medium transition-colors ${
                      isActive ? 'text-[#2563EB]' : 'text-[#1F2937] hover:text-[#2563EB]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Active Indicator Underscore */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[#2563EB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover Indicator (optional, but requested light underscore) */}
                  {!isActive && (
                    <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#2563EB]/30 group-hover:w-full transition-all duration-300" />
                  )}
                </motion.div>
              );
            })}
          </nav>
          
          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 md:gap-4 z-50"
          >
            <button className="hidden sm:flex items-center gap-2 text-[#2563EB] font-medium text-[16px] hover:text-[#1d4ed8] transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">Call Us</span>
            </button>
            <Link
              href="/contact"
              className="hidden sm:block px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold text-[16px] hover:bg-[#1d4ed8] transition-colors shadow-sm"
            >
              Plans & Pricing
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl z-40 py-8 px-5 overflow-hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#1F2937] font-bold text-[20px] hover:text-[#2563EB] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-gray-100 flex flex-col gap-4"
              >
                <button className="flex items-center justify-center gap-2 text-[#2563EB] font-bold text-[18px] py-4 border-2 border-[#2563EB] rounded-lg">
                  <Phone className="w-5 h-5" />
                  Call Us
                </button>
                <Link
                  href="/contact"
                  className="bg-[#2563EB] text-white font-bold text-[18px] py-4 rounded-lg shadow-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plans & Pricing
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
