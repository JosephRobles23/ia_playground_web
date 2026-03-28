import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Press_Start_2P } from "next/font/google"

import { HtmlLang } from "@/components/html-lang"
import { ThemeProvider } from "@/components/theme-provider"
import { DEFAULT_LOCALE } from "@/public/i18n/config"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

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
  icons: {
    icon: "/images/favicon/favicon_white.png",
    shortcut: "/images/favicon/favicon_white.png",
    apple: "/images/favicon/favicon_white.png",
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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, pressStart2P.variable, "font-sans", inter.variable)}
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
