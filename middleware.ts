import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    if (request.nextUrl.pathname.startsWith('/dashboard') &&
    !request.cookies.get('token'))
    {
        return NextResponse.redirect(new URL('/', request.url));
    }
}