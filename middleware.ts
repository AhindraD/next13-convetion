// import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";
// export { default } from "next-auth/middleware";   //to make the middleware export in one line

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/404", request.url))
// }
export default middleware;

export const config = {
    /*
    * --> zero or more parameters
    + --> one or more parameters
    ? --> zero or one parameters
    */
    matcher: ["/dashboard/:path*"]
}