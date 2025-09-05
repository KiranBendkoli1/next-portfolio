import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = request.headers.get('host') || ''
  
  // If www, redirect to non-www
  if (hostname.startsWith('www.')) {
    return NextResponse.redirect(
      `https://${hostname.replace('www.', '')}${url.pathname}${url.search}`,
      301
    )
  }

  // If neither www nor non-www, proceed as normal
  return NextResponse.next()
}

// Configure matcher for all paths
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
}
