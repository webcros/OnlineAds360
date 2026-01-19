'use client';

import { useEffect, useState, use } from 'react';
import { createClient } from '@/utils/supabase/client';
import BlogEditor from '@/components/admin/BlogEditor';
import { BlogRow } from '@/types/blog';

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [blog, setBlog] = useState<BlogRow | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();

      if (data) setBlog(data);
      setLoading(false);
    };

    fetchBlog();
  }, [id, supabase]);

  if (loading) return <div className="p-8 text-center text-gray-500">Loading blog data...</div>;
  if (!blog) return <div className="p-8 text-center text-red-500">Blog not found.</div>;

  return <BlogEditor initialData={blog} isEditing />;
}
