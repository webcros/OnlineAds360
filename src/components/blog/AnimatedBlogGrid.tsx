'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
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

interface Blog {
  id: string;
  slug: string;
  title: string;
  featured_image: string | null;
  excerpt: string | null;
  published_at: string | null;
  authors: {
    name: string | null;
  } | null;
}

export default function AnimatedBlogGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
    >
      {blogs.map((blog) => (
        <motion.div key={blog.id} variants={itemVariants}>
          <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] w-full bg-gray-100">
              {blog.featured_image ? (
                <Image
                  src={blog.featured_image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Marketing
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">
                  {blog.published_at ? format(new Date(blog.published_at), 'MMM dd, yyyy') : 'Recently'}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              
              <p className="text-[#4B5563] text-sm line-clamp-3 mb-6">
                {blog.excerpt || 'Read more about this interesting topic on our blog.'}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  {blog.authors?.name?.charAt(0) || 'A'}
                </div>
                <span className="text-sm font-medium text-[#1E293B]">
                  {blog.authors?.name || 'Admin'}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
