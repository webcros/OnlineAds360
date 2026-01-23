-- ============================================
-- Supabase Setup Script for OnlineAds360
-- ============================================

-- ============================================
-- 1. Create Storage Bucket for Blog Images
-- ============================================
-- Go to Supabase Dashboard > Storage > Create Bucket
-- Bucket Name: blog-images
-- Public Bucket: Yes (check this option)

-- Then run these policies:

-- Allow authenticated users to upload blog images
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Allow public read access
CREATE POLICY "Public can view blog images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update blog images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');


-- ============================================
-- 2. Create Leads Table
-- ============================================

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  business_page TEXT,
  employees TEXT NOT NULL,
  services TEXT[] NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'retry', 'not_interested')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users (admins) to view all leads
CREATE POLICY "Authenticated users can view all leads"
ON leads FOR SELECT
TO authenticated
USING (true);

-- Policy: Allow anyone to insert leads (for form submission)
CREATE POLICY "Anyone can create leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Allow authenticated users to update leads
CREATE POLICY "Authenticated users can update leads"
ON leads FOR UPDATE
TO authenticated
USING (true);

-- Policy: Allow authenticated users to delete leads
CREATE POLICY "Authenticated users can delete leads"
ON leads FOR DELETE
TO authenticated
USING (true);


-- ============================================
-- 3. Setup Instructions
-- ============================================

-- Step 1: Create Storage Bucket via Supabase Dashboard
--   1. Go to your Supabase project dashboard
--   2. Navigate to Storage section
--   3. Click "New Bucket"
--   4. Enter name: blog-images
--   5. Check "Public bucket" option
--   6. Click "Create bucket"

-- Step 2: Run Storage Policies
--   Copy and run the storage policies above in SQL Editor

-- Step 3: Create Leads Table
--   Copy and run the leads table creation script above in SQL Editor

-- Step 4: Verify Setup
--   - Storage: Try uploading an image in the blog editor
--   - Leads: Submit a test lead through Plans & Pricing form
--   - Admin: Check if leads appear in Admin Dashboard > Leads section

-- ============================================
-- DONE! Your OnlineAds360 database is ready
-- ============================================
