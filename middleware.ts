import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "./auth/session";
import { sharedPages, pages } from "./lib/pages";

// 1. Ignore certain paths
export const config = {
	matcher: ["/((?!api|static|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};

export async function middleware(req: NextRequest) {
	// 2. Get the currently logged in user
	const user = await getSessionUser();

	// 3. Redirect
	if (user) {
		if (sharedPages.some((page) => page.path === req.nextUrl.pathname)) return NextResponse.rewrite(new URL("/private/shared" + req.nextUrl.pathname, req.nextUrl));

		let hit = null;

		user.roles.forEach((role) => {
			if (pages[role].some((page) => req.nextUrl.pathname.startsWith(page.path))) {
				hit = NextResponse.rewrite(new URL("/private/" + role + req.nextUrl.pathname, req.nextUrl));
			}
		});

		return hit ?? NextResponse.redirect(new URL("/", req.nextUrl));
	} else return NextResponse.rewrite(new URL("/public" + req.nextUrl.pathname, req.nextUrl));
}
