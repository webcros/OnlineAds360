'use server';

import { createClient } from '@/utils/supabase/server';
import { ContactMessageInsert } from '@/types/contact';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(data: ContactMessageInsert) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('contact_messages')
    .insert([data]);

  if (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }

  revalidatePath('/admin/messages');
  return { success: true };
}
