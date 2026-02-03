-- Add new columns to profiles table for user information
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS phone text,
ADD COLUMN IF NOT EXISTS company_name text,
ADD COLUMN IF NOT EXISTS job_role text;

-- Add check constraint for valid job roles
ALTER TABLE public.profiles 
ADD CONSTRAINT valid_job_role CHECK (
  job_role IS NULL OR job_role IN (
    'founder',
    'ceo',
    'marketer',
    'sales_manager',
    'business_developer',
    'operations_manager',
    'other'
  )
);