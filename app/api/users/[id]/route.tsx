import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: number
    }
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!user) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
}

//PUT  -->  update object
//PATCH  -->  partial update/ some properties update
export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json();
    //Validation via zod package
    const validation = userSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    }
    //simulate user doesn't exist
    if (id > 9) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }
    return NextResponse.json({ message: "Success", id, name: body.name }, { status: 201 })
}


export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    //simulate user doesn't exist
    if (id > 9) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }
    return NextResponse.json({ message: `Deleted user with id{id}` }, { status: 200 })
}