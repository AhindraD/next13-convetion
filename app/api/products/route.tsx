import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = productSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }
    try {
        const product = await prisma.product.create({
            data: {
                name: body.name,
                price: body.price
            }
        })
        return NextResponse.json({ message: "Success", id: 11, name: body.name, price: body.price }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}