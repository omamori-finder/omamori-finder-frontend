import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";

const notoSans = localFont({
  src: "./fonts/NotoSans-Regular.ttf",
  variable: "--font-noto-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Omamori Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
