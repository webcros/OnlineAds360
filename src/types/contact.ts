export interface ContactMessage {
  id: string;
  first_name: string;
  last_name: string;
  business_name: string;
  email: string;
  phone_number?: string;
  help_type: string;
  needs: string;
  is_existing_customer: boolean;
  created_at: string;
}

export type ContactMessageInsert = Omit<ContactMessage, 'id' | 'created_at'>;
