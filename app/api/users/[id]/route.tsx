import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string
    }
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!user) {
        return NextResponse.json({ error: "user doesn't exist" }, { status: 404 })
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
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!user) {
        return NextResponse.json({ error: "user does't exist" }, { status: 404 })
    }

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: body.name,
                email: body.email
            }
        })
        return NextResponse.json(updatedUser, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}


export async function DELETE(request: NextRequest, { params: { id } }: Props) {
    //simulate user doesn't exist
    const user= await prisma.user.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    if (!user) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }

    try {
        await prisma.user.delete({
            where:{
                id:parseInt(id)
            }
        })
        return NextResponse.json({ message: `Deleted user with id ${id}` }, { status: 200 })
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}