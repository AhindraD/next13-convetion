import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),//to save session in database
    session: {
        strategy: "jwt" //when using adapter, it defaults to database <-- which is not supported in OAuth, so we have to explicitly set it to jwt
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };