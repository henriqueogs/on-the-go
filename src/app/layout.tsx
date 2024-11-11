import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "On The Go",
  description: "Consumer Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable}`}
        style={{
          fontFamily: "var(--font-public-sans), Arial, Helvetica, sans-serif",
          color: "var(--foreground)",
          backgroundColor: "var(--background)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
