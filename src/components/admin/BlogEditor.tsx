'use client';

import { useState } from 'react';
import { Sparkles, Save, Globe, ArrowLeft, Upload, X, Bold, Italic, List, ListOrdered, Code, Quote, Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { BlogRow } from '@/types/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogEditorProps {
  initialData?: BlogRow;
  isEditing?: boolean;
}

export default function BlogEditor({ initialData, isEditing = false }: BlogEditorProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [markdown, setMarkdown] = useState(initialData?.content || '');
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image || '');
  const [metaTitle, setMetaTitle] = useState(initialData?.meta_title || '');
  const [metaDesc, setMetaDesc] = useState(initialData?.meta_description || '');
  const [metaKeywords, setMetaKeywords] = useState(initialData?.meta_keywords || '');
  const [status, setStatus] = useState(initialData?.status || 'draft');
  const [isPreview, setIsPreview] = useState(false);
  
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFeaturedImage(publicUrl);
    } catch (error) {
      console.error('Upload error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('Bucket not found')) {
        alert('Storage bucket not configured. Please create a "blog-images" bucket in Supabase Storage with public access enabled.');
      } else {
        alert('Image upload failed: ' + errorMessage);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('markdown-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);

    const newText = before + prefix + selection + suffix + after;
    setMarkdown(newText);
    
    // Reset focus and selection
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const handleAiGenerate = async () => {
    if (!markdown || !title) {
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
          content: markdown,
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
    if (!title || !slug || !markdown) {
      alert('Title, slug, and content are required.');
      return;
    }

    setIsSaving(true);
    const blogData = {
      title,
      slug,
      content: markdown,
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
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg self-start">
          <button 
            onClick={() => setIsPreview(false)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${!isPreview ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Write
          </button>
          <button 
            onClick={() => setIsPreview(true)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${isPreview ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
          >
            Preview
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Editor Area */}
        <div className="lg:col-span-3 space-y-6">
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
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-700">Content (Markdown)</label>
              {!isPreview && (
                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                  <button onClick={() => insertMarkdown('**', '**')} className="p-1.5 hover:bg-gray-50 rounded" title="Bold"><Bold size={16} /></button>
                  <button onClick={() => insertMarkdown('_', '_')} className="p-1.5 hover:bg-gray-50 rounded" title="Italic"><Italic size={16} /></button>
                  <button onClick={() => insertMarkdown('\n# ')} className="p-1.5 hover:bg-gray-50 rounded text-xs font-bold" title="H1">H1</button>
                  <button onClick={() => insertMarkdown('\n## ')} className="p-1.5 hover:bg-gray-50 rounded text-xs font-bold" title="H2">H2</button>
                  <button onClick={() => insertMarkdown('\n- ')} className="p-1.5 hover:bg-gray-50 rounded" title="Bullet List"><List size={16} /></button>
                  <button onClick={() => insertMarkdown('\n1. ')} className="p-1.5 hover:bg-gray-50 rounded" title="Numbered List"><ListOrdered size={16} /></button>
                  <button onClick={() => insertMarkdown('\n> ')} className="p-1.5 hover:bg-gray-50 rounded" title="Quote"><Quote size={16} /></button>
                  <button onClick={() => insertMarkdown('`', '`')} className="p-1.5 hover:bg-gray-50 rounded" title="Code"><Code size={16} /></button>
                  <button onClick={() => insertMarkdown('[', '](url)')} className="p-1.5 hover:bg-gray-50 rounded" title="Link"><LinkIcon size={16} /></button>
                </div>
              )}
            </div>
            
            <div className="min-h-[500px] border border-gray-200 rounded-xl overflow-hidden bg-white">
              {isPreview ? (
                <div className="p-8 prose prose-blue max-w-none prose-headings:font-bold prose-img:rounded-xl">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                </div>
              ) : (
                <textarea
                  id="markdown-editor"
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                  placeholder="Start writing your masterpiece in markdown..."
                  className="w-full h-[500px] p-6 focus:outline-none resize-none font-mono text-sm leading-relaxed"
                />
              )}
            </div>
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
                <label className="text-sm font-medium text-gray-600">Featured Image</label>
                
                {featuredImage ? (
                  <div className="mt-2 relative">
                    <img 
                      src={featuredImage} 
                      alt="Featured preview" 
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={() => setFeaturedImage('')}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <label className="mt-2 flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {isUploading ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                          <p className="text-sm text-gray-500">Uploading...</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span>
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                    />
                  </label>
                )}
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
