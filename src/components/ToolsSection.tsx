"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
  index: number;
}

const FeatureCard = ({
  category,
  title,
  description,
  imageSrc,
  imagePosition = "left",
  index,
}: FeatureCardProps) => {
  const isEven = index % 2 === 0;
  const router = useRouter();

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Clear scroll position before navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.body.style.overflow = "hidden";

    // Navigate after a tiny delay to ensure scroll is locked
    setTimeout(() => {
      router.push("/services");
      // Re-enable scroll after navigation
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 100);
    }, 10);
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center p-6 lg:p-10"
    >
      <span className="text-[14px] font-bold tracking-[0.2px] text-[#103AB9] mb-3">
        {category}
      </span>
      <h3 className="text-[30px] leading-[36px] font-black tracking-[-0.5px] text-[#111827] mb-4">
        {title}
      </h3>
      <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px] text-[#4B5563] mb-6">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={handleLearnMoreClick}
          className="inline-flex items-center justify-center px-6 py-3 bg-[#2563EB] text-white font-bold text-[16px] tracking-[-0.5px] rounded-lg hover:bg-blue-700 transition-all hover:scale-105 cursor-pointer border-none"
        >
          Learn More
        </button>
        <Link
          href="/plans-and-pricing"
          className="text-[#2563EB] font-semibold text-[16px] tracking-[-0.5px] hover:underline transition-all hover:translate-x-1"
        >
          View Plans →
        </Link>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center w-full"
    >
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <Image
          src={imageSrc}
          alt={category}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105 rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={60}
        />
      </div>
    </motion.div>
  );

  return (
    <div className="py-8 overflow-hidden">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
        {imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

export default function ToolsSection() {
  const features = [
    {
      category: "WEBSITES",
      title: "Get a website or online store",
      description:
        "Build stunning, professional websites in minutes with our intuitive drag-and-drop builder. No coding required.",
      imageSrc: "/images/GetWebsite.png",
      imagePosition: "left" as const,
    },
    {
      category: "ECOMMERCE",
      title: "Sell your products online",
      description:
        "Launch your online store with powerful e-commerce tools. Manage inventory, process payments, and grow sales effortlessly.",
      imageSrc: "/images/Sell.png",
      imagePosition: "right" as const,
    },
    {
      category: "PAYMENTS",
      title: "Accept and manage payments",
      description:
        "Seamlessly process credit cards, invoices, and subscriptions. Get paid faster with automated payment reminders.",
      imageSrc: "/images/Accept.png",
      imagePosition: "left" as const,
    },
    {
      category: "CRM",
      title: "Stay organized your way",
      description:
        "Manage contacts, track deals, and automate follow-ups. Keep your entire team aligned with powerful CRM tools.",
      imageSrc: "/images/StayOrganied.png",
      imagePosition: "right" as const,
    },
    {
      category: "FORMS",
      title: "Create custom forms",
      description:
        "Build beautiful forms for any purpose. Collect leads, surveys, registrations, and more with our easy form builder.",
      imageSrc: "/images/CustomForms.png",
      imagePosition: "left" as const,
    },
    {
      category: "EMAIL MARKETING",
      title: "Send automated emails",
      description:
        "Create stunning email campaigns and automate your marketing. Nurture leads and drive conversions on autopilot.",
      imageSrc: "/images/Emails.png",
      imagePosition: "right" as const,
    },
    {
      category: "LISTINGS",
      title: "Control your business listings",
      description:
        "Manage your business presence across 50+ directories. Keep your information accurate and consistent everywhere.",
      imageSrc: "/images/Control.png",
      imagePosition: "left" as const,
    },
    {
      category: "REPUTATION",
      title: "Stand out with excellent reviews",
      description:
        "Monitor and respond to reviews across all platforms. Build trust and credibility with powerful reputation management.",
      imageSrc: "/images/Stand.png",
      imagePosition: "right" as const,
    },
    {
      category: "SOCIAL",
      title: "Manage your social media",
      description:
        "Schedule posts, engage with followers, and track performance across all social platforms from one dashboard.",
      imageSrc: "/images/Manage.png",
      imagePosition: "left" as const,
    },
    {
      category: "CONTENT",
      title: "Show up at the top of search",
      description:
        "Optimize your content for search engines. Get found by customers when they're searching for your services.",
      imageSrc: "/images/Show.png",
      imagePosition: "right" as const,
    },
    {
      category: "ADS",
      title: "Run ads where it counts",
      description:
        "Launch targeted ad campaigns on Google, Facebook, and Instagram. Maximize ROI with smart budget management.",
      imageSrc: "/images/Run.png",
      imagePosition: "left" as const,
    },
    {
      category: "INTELLIGENCE",
      title: "Business reporting",
      description:
        "Get actionable insights with comprehensive analytics. Track performance, identify trends, and make data-driven decisions.",
      imageSrc: "/images/BusinessReporting.png",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-[1376px] mx-auto px-5 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-black text-[#111827] text-center mb-16"
        >
          Plus a full suite of tools to help you scale with ease....
        </motion.h2>

        {/* Features Grid */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
