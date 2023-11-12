import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'Jane Smith'
        }
    ],{status:200})
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    if (!body.name) {
        return NextResponse.json({ message: "Name is Required" }, { status: 400 });
    }
    return NextResponse.json({ message: "Success", id: 1, name: body.name }, { status: 201 });
}