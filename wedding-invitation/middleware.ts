// middleware.ts
// Protect all /admin routes using Edge-compatible authConfig

import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// In production or on Vercel, ignore any accidental "localhost" AUTH_URL
if (process.env.VERCEL || process.env.NODE_ENV === "production") {
  if (process.env.AUTH_URL?.includes("localhost")) {
    delete process.env.AUTH_URL;
  }
  if (process.env.NEXTAUTH_URL?.includes("localhost")) {
    delete process.env.NEXTAUTH_URL;
  }
}

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  // Derive canonical origin from request headers to prevent redirects to localhost in production
  const host =
    req.headers.get("x-forwarded-host") ||
    req.headers.get("host") ||
    "localhost:3000";
  const protocol =
    req.headers.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  const { pathname } = req.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/login";

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", baseUrl));
  }

  if (isLoginRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/dashboard", baseUrl));
  }

  if (pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", baseUrl));
  }
});

export const config = {
  matcher: ["/admin", "/admin/:path*", "/login"],
};
