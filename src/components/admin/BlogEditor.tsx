'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { useState, useEffect } from 'react';
import { Sparkles, Save, Globe, Eye, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { BlogRow } from '@/types/blog';

interface BlogEditorProps {
  initialData?: BlogRow;
  isEditing?: boolean;
}

export default function BlogEditor({ initialData, isEditing = false }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image || '');
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || '');
  const [metaDesc, setMetaDesc] = useState(initialData?.meta_description || '');
  const [metaKeywords, setMetaKeywords] = useState(initialData?.meta_keywords || '');
  const [status, setStatus] = useState(initialData?.status || 'draft');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true }),
    ],
    content: initialData?.content || '',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none min-h-[400px] focus:outline-none p-4 border border-gray-200 rounded-lg bg-white',
      },
    },
  });

  const handleAiGenerate = async () => {
    if (!editor?.getText() || !title) {
      alert('Please add a title and some content first.');
      return;
    }

    setIsAiLoading(true);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content: editor.getText(),
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMetaTitle(data.meta_title);
      setMetaDesc(data.meta_description);
      setMetaKeywords(data.meta_keywords);
      if (!slug) setSlug(data.slug);
    } catch (error) {
      alert('AI Generation failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSave = async (publish: boolean = false) => {
    if (!title || !slug || !editor?.getHTML()) {
      alert('Title, slug, and content are required.');
      return;
    }

    setIsSaving(true);
    const blogData = {
      title,
      slug,
      content: editor.getHTML(),
      featured_image: featuredImage,
      meta_title: metaTitle,
      meta_description: metaDesc,
      meta_keywords: metaKeywords,
      status: publish ? 'published' : status,
      published_at: publish ? new Date().toISOString() : initialData?.published_at,
      updated_at: new Date().toISOString(),
      author_id: (await supabase.auth.getUser()).data.user?.id,
    };

    try {
      if (isEditing && initialData) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', initialData.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blogs').insert([blogData]);
        if (error) throw error;
      }
      router.push('/admin/dashboard');
    } catch (error) {
      alert('Save failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Blog Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              className="w-full text-3xl font-bold px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Content</label>
            <EditorContent editor={editor} />
          </div>

          {/* SEO Section */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold flex items-center gap-2">
                SEO Metadata
                <span className="text-xs font-normal text-blue-600 bg-blue-50 px-2 py-1 rounded">AI Powered</span>
              </h2>
              <button
                onClick={handleAiGenerate}
                disabled={isAiLoading}
                className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                <Sparkles size={16} />
                {isAiLoading ? 'Generating...' : 'Auto-generate with AI'}
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Meta Title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Meta Description</label>
                <textarea
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Keywords (comma separated)</label>
                <input
                  type="text"
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <h2 className="font-bold text-gray-900 border-b pb-2">Publishing Settings</h2>
            
            <div className="space-y-4 pt-2">
              <div>
                <label className="text-sm font-medium text-gray-600">Slug (URL)</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1 text-sm font-mono bg-gray-50"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'draft' | 'published' | 'scheduled')}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1 text-sm bg-white"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Featured Image URL</label>
                <input
                  type="text"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg mt-1 text-sm"
                  placeholder="https://..."
                />
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => handleSave(false)}
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSaving ? 'Saving...' : 'Save Draft'}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={isSaving}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
                >
                  <Globe size={18} />
                  Publish Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
