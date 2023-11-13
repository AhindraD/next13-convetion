import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: number
    }
}
export function GET(request: NextRequest, { params: { id } }: Props) {
    //simulate user doesn't exist
    if (id > 9) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }

    return NextResponse.json({
        id, name: 'Eebbe'
    }, { status: 200 })
}

//PUT  -->  update object
//PATCH  -->  partial update/ some properties update
export async function PUT(request: NextRequest, { params: { id } }: Props) {
    const body = await request.json();
    if (!body.name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }
    //simulate user doesn't exist
    if (id > 9) {
        return NextResponse.json({ error: "user out of scope" }, { status: 404 })
    }
    return NextResponse.json({ message: "Success", id, name: body.name }, { status: 201 })
}


export async function DELETE(request:NextRequest,{params:{id}}:Props){
    //simulate user doesn't exist
    if(id>9){
        return NextResponse.json({error:"user out of scope"},{status:404})
    }
    return NextResponse.json({message:`Deleted user with id{id}`},{status:200})
}