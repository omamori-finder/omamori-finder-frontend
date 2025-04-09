import type { Metadata } from "next"

import localFont from "next/font/local"
import "./globals.css"

import NavBar from "./_components/NavBar"

import { dir } from "i18next"
import { languages } from "../i18n/settings"

const notoSans = localFont({
    src: "./_fonts/NotoSans-Regular.ttf",
    variable: "--font-noto-sans",
    weight: "100 900"
})

export const metadata: Metadata = {
    title: "Omamori Finder"
}

// Pre-render language paths during build
export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ lng: string }>;
}) {
    const { lng } = await params
    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={`${notoSans.variable} antialiased`}>
                <NavBar lng={lng} />
                {children}
            </body>
        </html>
    )
}
