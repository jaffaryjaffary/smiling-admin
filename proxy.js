import { NextResponse } from "next/server";

export default function proxy(req) {
    const path = req.nextUrl.pathname;

    const publicPaths = ['/', '/Login'];
    const isPublicPath = publicPaths.includes(path);

    const token = req.cookies.get("token")?.value || '';

    // User already logged in
    if (isPublicPath && token) {
        return NextResponse.redirect(
            new URL('/dashboard', req.url)
        );
    }

    // User not logged in
    if (!isPublicPath && !token) {
        return NextResponse.redirect(
            new URL('/Login', req.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/Login',
    
        '/dashboard/:path*',
    ],
};