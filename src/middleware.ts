import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { isAPIRoute, isMobile, isMobileRoute } from "./lib/route";
import { usePathname } from "next/navigation";
import { DESKTOP_HOME_PAGE, MOBILE_HOME_PAGE } from "./constants/route";

const redirectTo = (url: string, req: NextRequest) => {
  return NextResponse.redirect(new URL(url, req.url));
};

export default async function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") ?? "";
  const {pathname} = new URL(req.url);
  const isMobileDevice = isMobile(userAgent);

  if (!isAPIRoute(pathname)) {
    if (isMobileDevice && !isMobileRoute(pathname)) {
      return redirectTo(MOBILE_HOME_PAGE, req);
    } else if (!isMobileDevice && isMobileRoute(pathname)) {
      return redirectTo(DESKTOP_HOME_PAGE, req);
    }
  }
}
