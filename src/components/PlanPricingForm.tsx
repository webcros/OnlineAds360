"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronDown,
  ArrowRight,
  Monitor,
  TrendingUp,
  Share2,
  Megaphone,
  ShieldCheck,
  CreditCard,
  Check,
  X,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { submitLead } from "@/app/plans-and-pricing/actions";

type Step = 1 | 2 | 3;

export default function PlanPricingForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    businessPage: "",
    employees: "",
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () =>
    setStep((prev) => (prev < 3 ? ((prev + 1) as Step) : prev));
  const prevStep = () =>
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    // Submit lead data to database
    const result = await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      industry: formData.industry,
      businessPage: formData.businessPage,
      employees: formData.employees,
      services: formData.services,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      // Handle error - you could show an error message here
      console.error("Failed to submit lead:", result.error);
    }
  };

  const industries = [
    "Automotive",
    "Real Estate",
    "Healthcare",
    "Professional Services",
    "Retail",
    "Home Services",
    "Technology",
    "Other",
  ];

  const employeeOptions = ["1-2", "3-9", "10+"];

  const serviceOptions = [
    { id: "website", name: "Designing a website", icon: Monitor },
    { id: "seo", name: "Content Marketing & SEO", icon: TrendingUp },
    { id: "social", name: "Social Media Marketing", icon: Share2 },
    { id: "ads", name: "Digital Advertising", icon: Megaphone },
    { id: "google", name: "Google Guaranteed", icon: ShieldCheck },
    { id: "payments", name: "Process Payments", icon: CreditCard },
  ];

  return (
    <div className="bg-[#F9FAFB] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-4 pb-12 px-6 max-w-4xl mx-auto w-full">
        {step > 1 && (
          <div className="w-full max-w-lg mb-8">
            <button
              onClick={prevStep}
              className="flex items-center gap-1 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
            >
              <ChevronLeft size={20} />
              Back
            </button>
          </div>
        )}
        {/* Progress Bar */}
        <div className="w-48 flex gap-2 mb-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-[#2563EB]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-2xl text-center space-y-8 py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
              >
                <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                  Thank you, {formData.firstName}!
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-blue-50 px-6 py-3 rounded-lg"
                >
                  <p className="text-lg font-semibold text-[#2563EB]">
                    Industry: {formData.industry}
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold text-green-600 pt-4"
                >
                  We have received your Request!
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed"
                >
                  Our agent will Contact You Soon with Plan and Price made
                  especially for your business
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  Return to Home
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <>
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-md space-y-8"
                >
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Let&apos;s get started
                    </h1>
                    <p className="text-gray-500">
                      Enter your contact information to begin
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            updateFormData({ firstName: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                          placeholder="Jane"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            updateFormData({ lastName: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData({ email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData({ phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.phone
                    }
                    className="w-full bg-[#2563EB] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 shadow-xl shadow-blue-500/60 hover:shadow-blue-500/80"
                  >
                    Continue
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-lg space-y-8"
                >
                  <div className="text-center">
                    <p className="text-[#82B1E5] font-semibold mb-2 uppercase tracking-wide">
                      Great to meet you, {formData.firstName}
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900">
                      Tell us about your business
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          updateFormData({ businessName: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                        placeholder="Your Business Name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700">
                        Industry *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.industry}
                          onChange={(e) =>
                            updateFormData({ industry: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none appearance-none bg-white"
                        >
                          <option value="">Select an industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                        {formData.industry && (
                          <button
                            onClick={() => updateFormData({ industry: "" })}
                            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <X size={16} />
                          </button>
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-gray-700">
                        Business Page (Website, Social URL, or Desired Page URL)
                      </label>
                      <input
                        type="text"
                        value={formData.businessPage}
                        onChange={(e) =>
                          updateFormData({ businessPage: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] outline-none"
                        placeholder="JanePipe.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Number of Employees? *
                      </label>
                      <div className="flex gap-4">
                        {employeeOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => updateFormData({ employees: opt })}
                            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all font-medium ${
                              formData.employees === opt
                                ? "bg-gray-200 border-gray-300 text-gray-900"
                                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    disabled={
                      !formData.businessName ||
                      !formData.industry ||
                      !formData.employees
                    }
                    className="w-full bg-[#2563EB] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 shadow-xl shadow-blue-500/60 hover:shadow-blue-500/80"
                  >
                    Continue
                    <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-2xl space-y-12"
                >
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      What areas would you like the most help with?
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => {
                      const isSelected = formData.services.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`flex items-center gap-4 p-6 rounded-xl border-2 transition-all text-left group ${
                            isSelected
                              ? "border-[#2563EB] bg-[#EFF6FF]"
                              : "border-gray-100 bg-white hover:border-gray-200"
                          }`}
                        >
                          <div
                            className={`p-3 rounded-lg transition-colors ${
                              isSelected
                                ? "bg-white"
                                : "bg-gray-50 group-hover:bg-gray-100"
                            }`}
                          >
                            <service.icon
                              size={24}
                              className={
                                isSelected ? "text-[#2563EB]" : "text-gray-600"
                              }
                            />
                          </div>
                          <span
                            className={`font-semibold ${isSelected ? "text-[#2563EB]" : "text-gray-700"}`}
                          >
                            {service.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={handleFinalSubmit}
                    disabled={formData.services.length === 0 || isSubmitting}
                    className="w-full bg-[#2563EB] text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-all disabled:opacity-50 shadow-xl shadow-blue-500/60 hover:shadow-blue-500/80"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={24} />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit
                        <ArrowRight size={24} />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
