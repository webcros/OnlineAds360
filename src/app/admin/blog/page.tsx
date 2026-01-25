'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { BlogRow } from '@/types/blog';
import Link from 'next/link';
import { Edit, Trash2, ExternalLink, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { deleteBlogAction } from './actions';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<BlogRow[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setBlogs(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, [supabase]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await deleteBlogAction(id);
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      alert('Error deleting blog: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Manage your blog posts and content.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          New Blog Post
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Title</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Published At</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  Loading blogs...
                </td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No blogs found. Create your first post!
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{blog.title}</div>
                    <div className="text-xs text-gray-500 truncate max-w-xs">{blog.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        blog.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : blog.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {blog.published_at
                      ? format(new Date(blog.published_at), 'MMM dd, yyyy')
                      : 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Live"
                      >
                        <ExternalLink size={18} />
                      </Link>
                      <Link
                        href={`/admin/blog/edit/${blog.id}`}
                        className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
