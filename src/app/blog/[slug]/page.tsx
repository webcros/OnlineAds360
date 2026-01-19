import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: blog } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
    keywords: blog.meta_keywords,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      images: blog.featured_image ? [blog.featured_image] : [],
      type: 'article',
      publishedTime: blog.published_at || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      images: blog.featured_image ? [blog.featured_image] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*, authors(*)')
    .eq('slug', slug)
    .single();

  if (error || !blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="container mx-auto px-5 lg:px-20 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                Marketing
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                {blog.published_at ? format(new Date(blog.published_at), 'MMMM dd, yyyy') : 'Recently'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] mb-8 leading-[1.1]">
              {blog.title}
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                {blog.authors?.name?.charAt(0) || 'A'}
              </div>
              <div className="text-left">
                <div className="font-bold text-[#1E293B]">{blog.authors?.name || 'Admin'}</div>
                <div className="text-xs text-gray-500">Marketing Strategist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {blog.featured_image && (
          <div className="container mx-auto px-5 lg:px-20 mb-16">
            <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={blog.featured_image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="container mx-auto px-5 lg:px-20">
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
        </div>
      </article>

      <Footer />
    </div>
  );
}
