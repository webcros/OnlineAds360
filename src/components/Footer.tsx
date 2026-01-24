'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  const pathname = usePathname();
  const companyLinks = ['Service', 'About', 'Blog', 'Careers'];
  const supportLinks = ['Help Center', 'Contact Us'];

  const getCompanyHref = (link: string) => {
    switch (link) {
      case 'About': return '/about';
      case 'Service': return '/services';
      case 'Blog': return '/blog';
      case 'Careers': return '/careers';
      default: return '#';
    }
  };

  const getSupportHref = (link: string) => {
    if (link === 'Contact Us') return '/contact';
    if (link === 'Help Center') return '/contact#support';
    return '#';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111827] py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="max-w-[284px]">
            <div className="mb-2">
              <Image 
                src="/images/DarkLogo.png" 
                alt="OnlineAds360" 
                width={218} 
                height={92}
                className="-ml-4"
              />
            </div>
            <p className="text-[#9CA3AF] font-bold text-[16px] leading-[24px] tracking-[-0.5px] mb-6">
              The all-in-one platform for small business growth and marketing success.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>

        {/* Company Column */}
        <motion.div variants={itemVariants} className="max-w-[284px]">
          <h3 className="text-white font-semibold text-[16px] leading-[24px] tracking-[-0.5px] mb-10">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link) => {
              const href = getCompanyHref(link);
              return (
                <li key={link}>
                  <Link 
                    href={href} 
                    onClick={(e) => handleLinkClick(e, href)}
                    scroll={true}
                    className="text-[#9CA3AF] font-bold text-[16px] leading-[19px] tracking-[-0.5px] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants} className="max-w-[284px]">
            <h3 className="text-white font-semibold text-[16px] leading-[24px] tracking-[-0.5px] mb-10">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href={getSupportHref(link)} 
                    className="text-[#9CA3AF] font-bold text-[16px] leading-[19px] tracking-[-0.5px] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-800"
        >
          <p className="text-[#9CA3AF] font-bold text-[16px] leading-[24px] tracking-[-0.5px] text-center md:text-left">
            © 2024 OnlineAds360. All rights reserved.
          </p>
          <Link 
            href="https://www.webcros.in/" 
            target="_blank" 
            className="text-[#9CA3AF] font-bold text-[16px] leading-[24px] tracking-[-0.5px] text-center md:text-right hover:text-white transition-colors"
          >
            Designed & Developed By Webcros
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
