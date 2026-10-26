"use client"

import "./globals.css"

import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"
import { AppToaster } from "@/components/ui/toast"
import { usePathname } from "next/navigation"
import { LanguageProvider } from "@/lib/i18n"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // ✅ bepaalt of je op de homepage zit
  const isHome = pathname === "/" || pathname === "/home"

  return (
    <html lang="nl">
      <body className="overflow-x-hidden">
        <LanguageProvider>
        <GoogleAnalyticsTracker />

        <GlobalNavbar />

        {/* Content */}
        <div className={isHome ? "" : "p-20 mx-auto mt-10"}>
          {children}
        </div>

        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>

        <AppToaster />
        </LanguageProvider>
      </body>
    </html>
  )
}