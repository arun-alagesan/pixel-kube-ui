export {default} from "next-auth/middleware";

export const config = { matcher: ["/","/bookspaces/:path*","/space","/user","/connector"] }


