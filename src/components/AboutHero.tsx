"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 md:pt-16 lg:pt-20 flex flex-col justify-between">
      {/* Background Elements */}
      <div className="absolute top-[-20%] right-[0%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left pb-12 md:pb-20 lg:mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-8">
              We Help <br />
              <span className="text-blue-600">Small Business</span> <br />
              Grow
            </h1>

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-600/25">
              Start Growing Today
            </button>
          </motion.div>

          {/* Right Column: Image & Floaters */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:-mb-8 z-10"
          >
            <div className="relative rounded-t-2xl rounded-b-none overflow-hidden shadow-2xl bg-zinc-100 aspect-[4/3] lg:aspect-square translate-y-8">
              <Image
                src="/images/About Page/about-hero-team.png"
                alt="Marketing 360 Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                quality={60}
              />
            </div>

            {/* Floating Card 1: Revenue Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-4 -left-4 md:top-12 md:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-zinc-100 z-10"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-zinc-900">+250%</p>
                <p className="text-sm text-zinc-500">Revenue Growth</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Happy Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-12 -right-4 md:bottom-24 md:-right-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-zinc-100 z-10"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-zinc-900">2,000+</p>
                <p className="text-sm text-zinc-500">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Blue Strip - Trusted By */}
      <div className="w-full bg-[#111827] py-8 z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                 {/* Avatars */}
                 <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-[#111827] overflow-hidden bg-zinc-200 relative"
                    >
                       <div className={`w-full h-full bg-linear-to-br from-zinc-300 to-zinc-400 ${i === 4 ? 'bg-blue-600 flex items-center justify-center' : ''}`}>
                          {i === 4 && <span className="text-white text-xs font-bold">+50</span>}
                       </div>
                    </div>
                  ))}
                </div>

                <span className="text-white text-lg font-medium text-center md:text-left">
                    Trusted by <span className="font-bold">2,000+</span> businesses worldwide to manage and grow their operations
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}