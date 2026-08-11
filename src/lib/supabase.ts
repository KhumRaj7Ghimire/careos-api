import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  // Create a client side supabase project credentials
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);
}
