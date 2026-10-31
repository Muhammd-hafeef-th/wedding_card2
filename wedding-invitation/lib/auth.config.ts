import type { NextAuthConfig } from "next-auth";

// In production or on Vercel, ignore any accidental "localhost" AUTH_URL
if (process.env.VERCEL || process.env.NODE_ENV === "production") {
  if (process.env.AUTH_URL?.includes("localhost")) {
    delete process.env.AUTH_URL;
  }
  if (process.env.NEXTAUTH_URL?.includes("localhost")) {
    delete process.env.NEXTAUTH_URL;
  }
}

export const authConfig: NextAuthConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  providers: [], // Add providers in auth.ts
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
};
