import { Metadata } from 'next';
import { createStaticClient } from '@/utils/supabase/server';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedBlogGrid from '@/components/blog/AnimatedBlogGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest marketing tips, trends, and news from OnlineAds360. Expert insights to help you grow your business.',
  openGraph: {
    title: 'Blog | OnlineAds360',
    description: 'Read the latest marketing tips, trends, and news from OnlineAds360. Expert insights to help you grow your business.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | OnlineAds360',
    description: 'Read the latest marketing tips, trends, and news from OnlineAds360.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogListingPage() {
  const supabase = createStaticClient();

  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*, authors(*)')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
  }

  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-5 lg:px-20 py-16 lg:py-24">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
            Latest from our blog
          </h1>
          <p className="text-xl text-[#4B5563]">
            Expert insights to help you grow your business and master digital marketing.
          </p>
        </div>

        {blogs && blogs.length > 0 ? (
          <AnimatedBlogGrid blogs={blogs} />
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </main>
    </div>
  );
}
