
/* import { NextRequest, NextResponse } from 'next/server'

export async function middleware (req:NextRequest) {
  // return early if url isn't supposed to be protected
  const url = req.nextUrl.clone()
  url.pathname = '/login'
  const isLogin = req.cookies.get('next-auth.session-token')
  const csrf = await getCsrfToken({ req })
  console.log('csrf', csrf)
  // You could also check for any property on the session object,
  // like role === "admin" or name === "John Doe", etc.
  if (!isLogin) return NextResponse.redirect(url)

  // If user is authenticated, continue.
  return NextResponse.next()
}

export const config = { matcher: ['/userAccount', '/empresaAccount'] }
*/
import withAuth from 'next-auth/middleware'
import { TypeToken } from './types/models/enums'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware (_req) {

  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        console.log(token, 'req', req.destination, req.url, req.nextUrl)
        if (!token) return false
        if (req.nextUrl.pathname.includes('userAccount') && token.tipo === TypeToken.User) return true
        if (req.nextUrl.pathname.includes('empresaAccount') && token.tipo === TypeToken.Proveedor) return true
        return false
      }
    }
  }
)

export const config = { matcher: ['/userAccount/:path*', '/empresaAccount/:path*'] }
