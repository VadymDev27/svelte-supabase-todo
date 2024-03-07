
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_ROLE_KEY, 
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
  }
})

// Access auth admin api
export const adminAuthClient = supabase.auth.admin