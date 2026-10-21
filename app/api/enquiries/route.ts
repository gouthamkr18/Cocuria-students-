import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, studentClass, message } = body;

    if (!name || !phone || !studentClass) {
      return NextResponse.json(
        { error: 'Name, phone, and student class are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('cocuria_enquiries')
      .insert([
        {
          name,
          phone,
          email: email || null,
          student_class: studentClass,
          message: message || null,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save enquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
