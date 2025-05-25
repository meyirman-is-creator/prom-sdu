import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from 'jwt-decode'

interface JWTPayload {
    exp: number
    sub: string
    email: string
}

const protectedRoutes = ['/payment/final']
const authRoutes = ['/auth/login', '/auth/create-password', '/auth/forgot-password']

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value
    const { pathname } = request.nextUrl

    // Check if the route is protected
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute) {
        if (!token) {
            const url = new URL('/auth/login', request.url)
            url.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(url)
        }

        try {
            const decoded = jwtDecode<JWTPayload>(token)
            const currentTime = Date.now() / 1000

            if (decoded.exp < currentTime) {
                const response = NextResponse.redirect(new URL('/auth/login', request.url))
                response.cookies.delete('access_token')
                return response
            }
        } catch (error) {
            const response = NextResponse.redirect(new URL('/auth/login', request.url))
            response.cookies.delete('access_token')
            return response
        }
    }

    // Redirect authenticated users away from auth pages
    if (isAuthRoute && token && pathname !== '/auth/create-password') {
        try {
            const decoded = jwtDecode<JWTPayload>(token)
            const currentTime = Date.now() / 1000

            if (decoded.exp > currentTime) {
                return NextResponse.redirect(new URL('/payment/final', request.url))
            }
        } catch (error) {
            // Invalid token, allow access to auth page
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}