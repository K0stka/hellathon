import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "./auth/session";
import { sharedPages } from "./lib/pages";

// 1. Ignore certain paths
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};

export async function middleware(req: NextRequest) {
	// 2. Get the currently logged in user
	const user = await getSessionUser();

	// 3. Redirect
	if (user) {
		console.log(req.nextUrl.pathname);

		if (sharedPages.some((page) => page.path === req.nextUrl.pathname)) return NextResponse.rewrite(new URL("/private/shared" + req.nextUrl.pathname, req.nextUrl));

		return NextResponse.rewrite(new URL("/private/superadmin" + req.nextUrl.pathname, req.nextUrl));
	} else return NextResponse.rewrite(new URL("/public" + req.nextUrl.pathname, req.nextUrl));
}
