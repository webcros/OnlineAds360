import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog | OnlineAds360',
  description: 'Read the latest marketing tips, trends, and news from OnlineAds360.',
};

export default async function BlogListingPage() {
  const supabase = await createClient();
  
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
      <Header />
      
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
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
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
