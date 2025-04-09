import { NextResponse, NextRequest } from "next/server"
import acceptLanguage from "accept-language"
import { fallbackLng, languages, cookieName } from "./app/i18n/settings"

acceptLanguage.languages(languages)

export const config = {
    matcher: [
        // eslint-disable-next-line @stylistic/max-len
        "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)"
    ]
}

export function middleware(req: NextRequest) {
    /*
     * Exclude paths with icon/chrome
     * Checks if substring includes icon/chrome, for eg if checking for icon 
     * it will return positive if found and -1 if not found
     */
    const isIconPath = req.nextUrl.pathname.indexOf("icon") > -1
    const isChromePath = req.nextUrl.pathname.indexOf("chrome") > -1
    if (isIconPath || isChromePath) {
        return NextResponse.next()
    }

    let lng: string | undefined | null

    // Check and use cookies if available
    if (req.cookies.has(cookieName)) {
        lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
    }
    // No cookie = fall back to header
    if (!lng) {
        lng = acceptLanguage.get(req.headers.get("Accept-Language"))
    }
    // No cookie and no header
    if (!lng) {
        lng = fallbackLng
    }

    // Redirect if language in path is not supported
    if (
        !languages.some((loc) => {
            return req.nextUrl.pathname.startsWith(`/${loc}`)
        }) &&
    !req.nextUrl.pathname.startsWith("/_next")
    ) {
        return NextResponse.redirect(
            new URL(
                `/${lng}${req.nextUrl.pathname}${req.nextUrl.search}`,
                req.url
            )
        )
    }

    /**
     * Detect language from referer url 
     *(url of page the user came from before arriving on the current page)
     */
    const hasRefererHeader = req.headers.has("referer")
    if (hasRefererHeader) {
        const refererUrl = new URL(req.headers.get("referer") || "")
        const lngInReferer = languages.find((l) => {
            return refererUrl.pathname.startsWith(`/${l}`)
        })
        const response = NextResponse.next()
        // Store language in cookie
        if (lngInReferer) {
            response.cookies.set(cookieName, lngInReferer)
        }
        return response
    }

    return NextResponse.next()
}
