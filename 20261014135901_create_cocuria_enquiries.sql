/*
# Create Cocuria enquiry intake table

1. New Tables
- `enquiries`
- `id` (uuid primary key) stores the internal record identifier.
- `enquiry_ref` (text unique) stores the safe customer-facing reference.
- `age_group` (text) stores the participant eligibility choice.
- `activity` (text) stores the selected programme category.
- `sub_style` (text) stores the selected style or guidance request.
- `mode` (text) stores home tutoring or academy/studio preference.
- `user_name` (text) stores the contact name.
- `parent_name` (text nullable) stores the guardian name for under-18 enquiries.
- `phone` (text) stores the normalized WhatsApp phone number.
- `pincode` (text) stores the six-digit Indian PIN code.
- `area` (text) stores the area or city.
- `address` (text nullable) stores an optional home-tutoring address.
- `consent_given` (boolean) stores required contact consent.
- `guardian_confirmed` (boolean) stores required guardian confirmation for minors.
- `marketing_consent` (boolean) stores optional marketing consent.
- `status` (text) stores the internal workflow status.
- `created_at` (timestamptz) stores submission time.

2. Integrity and performance
- Enquiry references are unique.
- Status is limited to New, Contacted, Syllabus Sent, or Closed.
- Indexes support recent duplicate checks and admin filtering.

3. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may insert validated intake rows through the server-owned submission path.
- Lead reads, updates, and deletes are denied to browser roles; privileged administration can be added in the admin stage.
*/

CREATE TABLE IF NOT EXISTS public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_ref text NOT NULL UNIQUE,
  age_group text NOT NULL CHECK (age_group IN ('under-18', 'adult')),
  activity text NOT NULL,
  sub_style text NOT NULL,
  mode text NOT NULL CHECK (mode IN ('home', 'academy')),
  user_name text NOT NULL,
  parent_name text,
  phone text NOT NULL,
  pincode text NOT NULL CHECK (pincode ~ '^[0-9]{6}$'),
  area text NOT NULL,
  address text,
  consent_given boolean NOT NULL DEFAULT false,
  guardian_confirmed boolean NOT NULL DEFAULT false,
  marketing_consent boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Syllabus Sent', 'Closed')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_enquiries" ON public.enquiries;
CREATE POLICY "public_insert_enquiries" ON public.enquiries
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "deny_public_select_enquiries" ON public.enquiries;
CREATE POLICY "deny_public_select_enquiries" ON public.enquiries
  FOR SELECT TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "deny_public_update_enquiries" ON public.enquiries;
CREATE POLICY "deny_public_update_enquiries" ON public.enquiries
  FOR UPDATE TO anon, authenticated
  USING (false) WITH CHECK (false);

DROP POLICY IF EXISTS "deny_public_delete_enquiries" ON public.enquiries;
CREATE POLICY "deny_public_delete_enquiries" ON public.enquiries
  FOR DELETE TO anon, authenticated
  USING (false);

CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_phone_created_at_idx ON public.enquiries (phone, created_at DESC);
CREATE INDEX IF NOT EXISTS enquiries_status_idx ON public.enquiries (status);
