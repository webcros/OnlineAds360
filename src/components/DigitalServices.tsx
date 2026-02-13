import Image from "next/image";
import { Check } from "lucide-react";

const digitalServices = [
  {
    title: "Full Service",
    subtitle: "Your marketing team + platform",
    description:
      "Strategy, execution, reporting — in one place. Get a dedicated team that handles everything for you.",
    points: [
      "Dedicated marketing strategist",
      "Execution across all channels",
      "Real-time performance reporting",
      "Continuous strategy refinement",
    ],
    image: "/images/Service Page/FullService.png",
  },
  {
    title: "Digital Ads & PPC",
    subtitle: "Stop Guessing. Start Scaling.",
    description:
      "Data-driven ad campaigns across Google, Meta, LinkedIn, TikTok with ROAS optimization. We turn ad spend into predictable revenue.",
    points: [
      "Multi-platform campaigns",
      "Audience targeting & retargeting",
      "Creative testing & optimization",
      "ROAS tracking & reporting",
    ],
    image: "/images/Service Page/ads_service.png",
  },
  {
    title: "SEO & Content",
    subtitle: "Be Found When It Matters Most",
    description:
      "Technical SEO, keyword strategy, blogs, landing pages, and local SEO. Dominate search results and attract high-intent traffic.",
    points: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "Content creation & optimization",
      "Local SEO & GMB management",
    ],
    image: "/images/Service Page/seo_service.png",
  },
  {
    title: "Social Media",
    subtitle: "Spark Conversations that Convert",
    description:
      "Content creation, community management, influencer outreach, and brand awareness. Build an engaged audience.",
    points: [
      "Content strategy & creation",
      "Community engagement",
      "Influencer partnerships",
      "Performance analytics",
    ],
    image: "/images/Service Page/social_service.png",
  },
  {
    title: "Websites & Funnels",
    subtitle: "Build Your Digital Foundation",
    description:
      "Custom, conversion-optimized websites with mobile-first design, speed optimization, and UX focus.",
    points: [
      "Mobile-first responsive design",
      "Performance & speed optimization",
      "Conversion-focused UX/UI",
      "CMS integration & training",
    ],
    image: "/images/Service Page/website_service.png",
  },
  {
    title: "Branding & Creative",
    subtitle: "Stand Out from the Crowd",
    description:
      "Logos, video, and assets that stand out. We build visual identities that resonate with your target audience.",
    points: [
      "Logo & brand identity",
      "Video production & editing",
      "Graphic design & assets",
      "Brand style guides",
    ],
    image: "/images/Service Page/branding_service.png",
  },
  {
    title: "Email & Automation",
    subtitle: "The Highest ROI in Your Toolkit",
    description:
      "Automated email flows, newsletters, segmentation, and A/B testing. Turn your email list into a revenue machine.",
    points: [
      "Automated drip campaigns",
      "List segmentation & personalization",
      "A/B testing & optimization",
      "CRM integration",
    ],
    image: "/images/Service Page/email_service.png",
  },
];

export default function DigitalServices() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="mb-16">
          <h2 className="text-[36px] font-bold text-[#111827] mb-4">
            Digital Services
          </h2>
          <p className="text-[18px] text-[#4B5563]">
            Build a powerful online presence that converts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[24px] font-bold text-[#111827] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#2563EB] font-semibold text-[16px] mb-4">
                  {service.subtitle}
                </p>
                <p className="text-[16px] text-[#4B5563] mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-3">
                  {service.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-2 text-[14px] text-[#374151]"
                    >
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#2563EB]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
