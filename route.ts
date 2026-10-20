import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const enquirySchema = z.object({
  ageGroup: z.enum(['under-18', 'adult']),
  activity: z.string().trim().min(2).max(80),
  subStyle: z.string().trim().min(2).max(80),
  mode: z.enum(['home', 'academy']),
  userName: z.string().trim().min(2).max(100),
  parentName: z.string().trim().max(100).optional().default(''),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  pincode: z.string().regex(/^\d{6}$/),
  area: z.string().trim().min(2).max(100),
  address: z.string().trim().max(240).optional().default(''),
  consent: z.literal(true),
  guardianConfirmed: z.boolean(),
  marketingConsent: z.boolean(),
  honeypot: z.string().max(0).optional().default(''),
});

function getSupabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { autoRefreshToken: false, persistSession: false } });
}

function createReference() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `COC-${date}-${suffix}`;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success || (parsed.data.ageGroup === 'under-18' && (!parsed.data.parentName || !parsed.data.guardianConfirmed))) {
      return NextResponse.json({ error: 'Please check the required enquiry details.' }, { status: 400 });
    }
    if (parsed.data.honeypot) return NextResponse.json({ error: 'Unable to process this request.' }, { status: 400 });

    const supabase = getSupabase();
    const recentWindow = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabase.from('enquiries').select('id', { count: 'exact', head: true }).eq('phone', parsed.data.phone).eq('activity', parsed.data.activity).gte('created_at', recentWindow);
    if (countError) throw countError;
    if ((count ?? 0) > 0) return NextResponse.json({ error: 'A similar enquiry was recently received. Please wait a few minutes before trying again.' }, { status: 429 });

    const enquiryRef = createReference();
    const { error } = await supabase.from('enquiries').insert({ enquiry_ref: enquiryRef, age_group: parsed.data.ageGroup, activity: parsed.data.activity, sub_style: parsed.data.subStyle, mode: parsed.data.mode, user_name: parsed.data.userName, parent_name: parsed.data.parentName || null, phone: parsed.data.phone, pincode: parsed.data.pincode, area: parsed.data.area, address: parsed.data.mode === 'home' ? parsed.data.address || null : null, consent_given: parsed.data.consent, guardian_confirmed: parsed.data.guardianConfirmed, marketing_consent: parsed.data.marketingConsent });
    if (error) throw error;
    return NextResponse.json({ enquiryRef }, { status: 201 });
  } catch (error) {
    console.error('enquiry submission failed', error);
    return NextResponse.json({ error: 'We could not save your enquiry. Please try again.' }, { status: 500 });
  }
}
