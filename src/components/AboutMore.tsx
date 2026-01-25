"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { format } from "date-fns";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
}

export default function AboutMore() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("blogs")
          .select("id, title, slug, excerpt, featured_image, published_at")
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .limit(3);

        if (error) {
          console.error("Error fetching blogs:", error);
          setLoading(false);
          return;
        }

        setBlogs(data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const sections = blogs.length > 0 ? blogs : [];

  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[20px] font-medium text-[#717171] text-center mb-16 tracking-wide"
        >
          Latest Blog from Online360®
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {loading ? (
            <div className="col-span-3 text-center text-gray-500">
              Loading...
            </div>
          ) : sections.length > 0 ? (
            sections.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <Link href={`/blog/${item.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.featured_image || "/images/default-blog.png"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-8">
                  <Link href={`/blog/${item.slug}`}>
                    <h3 className="text-[24px] font-bold text-[#2C3E50] mb-2 hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-[14px] text-[#9CA3AF] mb-4">
                    {item.published_at &&
                      format(new Date(item.published_at), "MMM dd, yyyy")}
                  </p>
                  <p className="text-[16px] text-[#717171] leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No blog posts available
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
