import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: {
        id: number
    }
}
export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id > 9) {
        return NextResponse.json({ "message": "user out of scope" }, { status: 404 })
    }
    return NextResponse.json({
        id, name: 'Eebbe'
    })
}