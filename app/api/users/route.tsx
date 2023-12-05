import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
    const users= await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 })
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = userSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Success", id: 1, name: body.name }, { status: 201 });
}