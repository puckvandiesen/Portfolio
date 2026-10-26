"use client"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
     <footer className="w-full bg-gray-100 py-4 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        
        {/* Rechterkant */}
        <div className="ml-auto text-right">
          &copy; {currentYear} Puck van Diesen. {t("Alle rechten voorbehouden.", "All rights reserved.")}
        </div>

      </div>
    </footer>
  )
}