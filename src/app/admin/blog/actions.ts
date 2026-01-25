'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteBlogAction(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.from('blogs').delete().eq('id', id);
  
  if (error) {
    throw new Error(error.message);
  }
  
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  revalidatePath('/admin/dashboard');
  
  return { success: true };
}

export async function revalidateBlogPaths(slug?: string) {
  revalidatePath('/blog');
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
  revalidatePath('/admin/blog');
  revalidatePath('/admin/dashboard');
}
