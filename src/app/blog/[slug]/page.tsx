import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedBlogDetail from '@/components/blog/AnimatedBlogDetail';
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
      
      <AnimatedBlogDetail blog={blog} />

    </div>
  );
}
