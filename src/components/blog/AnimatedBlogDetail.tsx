'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { format } from 'date-fns';

interface Blog {
  title: string;
  published_at: string | null;
  featured_image: string | null;
  content: string;
  authors: {
    name: string | null;
  } | null;
}

export default function AnimatedBlogDetail({ blog }: { blog: Blog }) {
  return (
    <article className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-5 lg:px-20 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
              Marketing
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">
              {blog.published_at ? format(new Date(blog.published_at), 'MMMM dd, yyyy') : 'Recently'}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-8 leading-[1.1]"
          >
            {blog.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
              {blog.authors?.name?.charAt(0) || 'A'}
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1E293B]">{blog.authors?.name || 'Admin'}</div>
              <div className="text-xs text-gray-500">Marketing Strategist</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featured_image && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-5 lg:px-20 mb-16"
        >
          <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-5 lg:px-20"
      >
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg prose-blue max-w-none text-[#4B5563] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* Tags/Categories Section */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {['Marketing', 'Growth', 'Small Business'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
