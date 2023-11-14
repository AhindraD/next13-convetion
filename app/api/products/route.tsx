import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export function GET(request:NextRequest){
    return NextResponse.json([
        {
            id:1,
            name:"Protein",
            price:35
        },
        {
            id:2,
            name:"Citrulline",
            price:15
        }
    ],{status:200})
}

export async function POST(request:NextRequest){
    const body=await request.json();
    const validation=productSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error.errors},{status:400})
    }
    return NextResponse.json({message:"Success",id:11,name:body.name,price:body.price},{status:201})
}