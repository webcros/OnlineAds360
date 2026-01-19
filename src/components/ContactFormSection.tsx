'use client';

import React, { useState } from 'react';
import { Phone, Headset, MapPin, ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import { submitContactForm } from '@/app/contact/actions';
import { motion, Variants, AnimatePresence } from 'framer-motion';

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

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      first_name: formData.get('first_name') as string,
      last_name: formData.get('last_name') as string,
      business_name: formData.get('business_name') as string,
      email: formData.get('email') as string,
      phone_number: formData.get('phone_number') as string,
      help_type: formData.get('help_type') as string,
      needs: formData.get('needs') as string,
      is_existing_customer: formData.get('is_existing_customer') === 'on',
    };

    const result = await submitContactForm(data);
    
    if (result.success) {
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-20 flex flex-col lg:flex-row gap-8">
        {/* Left: Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white border border-[#E5E7EB] rounded-2xl p-6 lg:p-10 shadow-sm"
        >
          <h2 className="text-[30px] font-bold text-[#1E293B] leading-[36px] tracking-[-0.5px]">
            Send Us a Message
          </h2>
          <p className="mt-4 text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
            Fill out the form below and we&apos;ll get back to you within one business day.
          </p>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mt-10 p-8 bg-green-50 border border-green-100 rounded-2xl text-center space-y-4"
              >
                <div className="flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-[24px] font-bold text-green-900">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. We&apos;ll get back to you within one business day.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-[#2563EB] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 space-y-6" 
                onSubmit={handleSubmit}
              >
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                      First Name *
                    </label>
                    <input
                      name="first_name"
                      type="text"
                      placeholder="John"
                      className="w-full h-[50px] px-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                      Last Name *
                    </label>
                    <input
                      name="last_name"
                      type="text"
                      placeholder="Smith"
                      className="w-full h-[50px] px-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                    Business Name *
                  </label>
                  <input
                    name="business_name"
                    type="text"
                    placeholder="Your Company Inc."
                    className="w-full h-[50px] px-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="w-full h-[50px] px-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                      Phone Number
                    </label>
                    <input
                      name="phone_number"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full h-[50px] px-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* How can we help? */}
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                    How can we help? *
                  </label>
                  <div className="relative">
                    <select
                      name="help_type"
                      className="w-full h-[48px] px-3 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1F2937] pointer-events-none" />
                  </div>
                </div>

                {/* Tell us about your needs */}
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#374151] tracking-[-0.5px]">
                    Tell us about your needs *
                  </label>
                  <textarea
                    name="needs"
                    placeholder="Please provide details about your inquiry..."
                    className="w-full h-[146px] p-4 bg-white border border-[#D1D5DB] rounded-lg text-[16px] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                {/* Existing Customer Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    name="is_existing_customer"
                    type="checkbox"
                    id="existingCustomer"
                    className="w-4 h-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label htmlFor="existingCustomer" className="text-[14px] text-[#4B5563] tracking-[-0.5px]">
                    I am an existing customer
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[60px] bg-[#2563EB] text-white text-[18px] font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: Sidebar Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[373.34px] flex flex-col gap-6"
        >
          {/* Direct Contact Card */}
          <motion.div variants={itemVariants} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 lg:p-7">
            <h3 className="text-[18px] font-semibold text-[#111827] leading-[28px] tracking-[-0.5px]">
              Direct Contact
            </h3>
            <div className="mt-6 space-y-6">
              {/* Sales Team */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-4 h-4 text-[#2563EB]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-[14px] text-[#4B5563] leading-[20px] tracking-[-0.5px]">
                    Sales Team
                  </p>
                  <p className="mt-0.5 text-[16px] font-medium text-[#111827] leading-[16px] tracking-[-0.5px]">
                    (800) 555-1234
                  </p>
                </div>
              </div>
              {/* Client Services */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Headset className="w-4 h-4 text-[#16A34A]" fill="currentColor" />
                </div>
                <div>
                  <p className="text-[14px] text-[#4B5563] leading-[20px] tracking-[-0.5px]">
                    Client Services
                  </p>
                  <p className="mt-0.5 text-[16px] font-medium text-[#111827] leading-[16px] tracking-[-0.5px]">
                    (800) 555-5678
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Hours Card */}
          <motion.div variants={itemVariants} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 lg:p-7">
            <h3 className="text-[18px] font-semibold text-[#111827] leading-[28px] tracking-[-0.5px]">
              Office Hours
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                  Monday - Friday
                </p>
                <p className="text-[16px] font-medium text-[#111827] leading-[24px] tracking-[-0.5px]">
                  8:00 AM - 8:00 PM EST
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                  Saturday
                </p>
                <p className="text-[16px] font-medium text-[#111827] leading-[24px] tracking-[-0.5px]">
                  9:00 AM - 5:00 PM EST
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                  Sunday
                </p>
                <p className="text-[16px] font-medium text-[#111827] leading-[24px] tracking-[-0.5px]">
                  Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Location Card */}
          <motion.div variants={itemVariants} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 lg:p-7">
            <h3 className="text-[18px] font-semibold text-[#111827] leading-[28px] tracking-[-0.5px]">
              Our Location
            </h3>
            <div className="mt-6 space-y-1">
              <p className="text-[16px] font-medium text-[#111827] leading-[24px] tracking-[-0.5px]">
                MarketPro Headquarters
              </p>
              <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                123 Business District Drive
              </p>
              <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                Suite 400
              </p>
              <p className="text-[16px] text-[#4B5563] leading-[24px] tracking-[-0.5px]">
                Austin, TX 78701
              </p>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#2563EB] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" fill="currentColor" />
                  View on Map
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
