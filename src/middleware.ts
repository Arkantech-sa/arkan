import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  localeDetection: true, // Ensure automatic locale detection
});

export const config = {
  // Match all routes including root "/"
  matcher: ["/", "/(ar|en)/:path*"],
};
