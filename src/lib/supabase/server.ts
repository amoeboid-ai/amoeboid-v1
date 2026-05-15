import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Server-side Supabase client.
 *
 * Reads cookies via next/headers and writes them back through the cookie store.
 * In Server Components the setAll call may throw because cookies cannot be
 * mutated during render — that's expected. The middleware refreshes the
 * session and writes cookies; here we just need to read whatever it set.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // setAll from a Server Component — ignored. Middleware
            // is responsible for refreshing the session.
          }
        },
      },
    }
  );
}
