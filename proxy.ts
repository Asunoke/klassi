import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
    let session = null;
    try {
        const response = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
            headers: {
                cookie: request.headers.get("cookie") || "",
            },
        });
        if (response.ok) {
            session = await response.json();
        }
    } catch (e) {
        // Handle fetch error
    }


    if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (session && (request.nextUr