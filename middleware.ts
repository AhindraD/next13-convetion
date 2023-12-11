import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/404", request.url))
}

export const config = {
    /*
    * --> zero or more parameters
    + --> one or more parameters
    ? --> zero or one parameters
    */
    matcher: ["/admin/*"]
}