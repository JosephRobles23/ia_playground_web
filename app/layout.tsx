import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import { HtmlLang } from "@/components/html-lang"
import { ThemeProvider } from "@/components/theme-provider"
import { DEFAULT_LOCALE } from "@/public/i18n/config"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "AI PlayGrounds",
    template: "%s",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={DEFAULT_LOCALE}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HtmlLang />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
