'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const companyLinks = ['Service', 'About', 'Blog', 'Careers'];
  const supportLinks = ['Help Center', 'Contact Us'];

  return (
    <footer className="bg-[#111827] py-16">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="max-w-[284px]">
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
              <Link href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div className="max-w-[284px]">
            <h3 className="text-white font-semibold text-[16px] leading-[24px] tracking-[-0.5px] mb-10">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'About' ? '/about' : link === 'Service' ? '/services' : link === 'Blog' ? '/blog' : '#'} 
                    className="text-[#9CA3AF] font-bold text-[16px] leading-[19px] tracking-[-0.5px] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="max-w-[284px]">
            <h3 className="text-white font-semibold text-[16px] leading-[24px] tracking-[-0.5px] mb-10">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Contact Us' ? '/contact' : '#'} 
                    className="text-[#9CA3AF] font-bold text-[16px] leading-[19px] tracking-[-0.5px] hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] font-bold text-[16px] leading-[24px] tracking-[-0.5px] text-center md:text-left">
            © 2024 OnlineAds360. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] font-bold text-[16px] leading-[24px] tracking-[-0.5px] text-center md:text-right">
            Designed & Developed By Webcros
          </p>
        </div>
      </div>
    </footer>
  );
}
