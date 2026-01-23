'use server';

import { createClient } from '@/utils/supabase/server';

export async function submitLead(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  businessPage?: string;
  employees: string;
  services: string[];
}) {
  const supabase = await createClient();

  const { error } = await supabase.from('leads').insert({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    business_name: data.businessName,
    industry: data.industry,
    business_page: data.businessPage || '',
    employees: data.employees,
    services: data.services,
    status: 'pending',
  });

  if (error) {
    console.error('Error submitting lead:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
