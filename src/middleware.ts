import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Site-wide auth gate.
 *
 * - Refreshes the Supabase session on every request (so cookies stay current).
 * - Unauthenticated users are redirected to /login?next=<original path>.
 * - Authenticated users on /login are redirected to /.
 * - /_next/* and common static asset extensions are excluded via the matcher.
 */
export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);
  const { pathname, search } = request.nextUrl;

  const isLogin = pathname === "/login";

  if (!user && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }

  if (user && isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match every path except:
     *   _next/static, _next/image, favicon.ico,
     *   any asset with an extension (svg/png/jpg/jpeg/gif/webp/ico/woff/woff2/ttf/otf/mp4/webm/avif).
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2|woff|ttf|otf|mp4|webm|avif)$).*)",
  ],
};
