export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: string
          name: string
          email: string
          avatar_url: string | null
          bio: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
        }
      }
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image: string | null
          author_id: string
          category_id: string | null
          status: 'draft' | 'published' | 'scheduled'
          published_at: string | null
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          author_id: string
          category_id?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string
          category_id?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          published_at?: string | null
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_tags: {
        Row: {
          blog_id: string
          tag_id: string
        }
        Insert: {
          blog_id: string
          tag_id: string
        }
        Update: {
          blog_id?: string
          tag_id?: string
        }
      }
    }
  }
}

export type BlogRow = Database['public']['Tables']['blogs']['Row'];
export type AuthorRow = Database['public']['Tables']['authors']['Row'];
export type CategoryRow = Database['public']['Tables']['categories']['Row'];
export type TagRow = Database['public']['Tables']['tags']['Row'];
