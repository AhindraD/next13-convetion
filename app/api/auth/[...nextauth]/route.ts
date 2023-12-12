import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),//to save session in database
    session: {
        strategy: "jwt" //when using adapter, it defaults to database <-- which is not supported in OAuth, so we have to explicitly set it to jwt
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "david@rose.com" },
                password: { label: "Password", type: "password", placeholder: "******" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials");
                }
                const user = await prisma.user.findUnique({ where: { email: credentials.email } });

                if (!user) {
                    throw new Error("No user found");
                }
                const ifPasswordsMatched = await bcrypt.compare(credentials.password, user.hashedPassword!);
                return ifPasswordsMatched ? user : null;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ]
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };