'use client';

import { ChevronDown, Phone, Menu, X, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    if (isCallModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCallModalOpen]);

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
        <div className="flex items-center justify-between h-16 sm:h-20">
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
                className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
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
                    onClick={(e) => handleLinkClick(e, link.href)}
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
            <button 
              onClick={() => setIsCallModalOpen(true)}
              className="hidden sm:flex items-center gap-2 text-[#2563EB] font-medium text-[14px] sm:text-[16px] hover:text-[#1d4ed8] transition-colors"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xl:inline">Call Us</span>
            </button>
            <Link
              href="/plans-and-pricing"
              onClick={(e) => handleLinkClick(e, '/plans-and-pricing')}
              className="hidden sm:block px-4 py-2 sm:px-6 sm:py-3 bg-[#2563EB] text-white rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-[#1d4ed8] transition-colors shadow-sm"
            >
              Plans & Pricing
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1.5 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl z-40 py-8 px-5 overflow-hidden"
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
                    onClick={(e) => handleLinkClick(e, link.href)}
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
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsCallModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 text-[#2563EB] font-bold text-[18px] py-4 border-2 border-[#2563EB] rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </button>
                <Link
                  href="/plans-and-pricing"
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

      {/* Call Us Modal */}
      <AnimatePresence>
        {isCallModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCallModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative pointer-events-auto"
              >
                <button 
                  onClick={() => setIsCallModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">How would you like to connect?</h3>
                  <p className="text-gray-500 mt-2">Choose your preferred way to reach us</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="tel:+13472519545"
                    className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-[#2563EB] hover:bg-blue-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                      <Phone className="w-6 h-6 text-[#2563EB] group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Phone Call</p>
                      <p className="text-sm text-gray-500">+1 (347) 251-9545</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/13472519545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-[#22C55E] hover:bg-green-50/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-[#22C55E] transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#22C55E] group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">WhatsApp</p>
                      <p className="text-sm text-gray-500">Message us on WhatsApp</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
