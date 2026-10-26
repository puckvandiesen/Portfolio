"use client"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n"

export default function GlobalNavbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"|| pathname === "/home"
  const { lang, setLang, t } = useLanguage()

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        isHome ? "bg-transparent" : "bg-white border-b shadow-sm"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 text-lg ${
          isHome ? "text-white" : "text-black"
        }`}
      >
        {/* LINKS: menu */}
        <div className="flex space-x-14 items-center">
          <a href="/home" className="hover:text-gray-300">Home</a>
          <a href="/ervaring" className="hover:text-gray-300">{t("Ervaring", "Experience")}</a>
          <a href="/portfolio" className="hover:text-gray-300">Portfolio</a>
        </div>

        {/* RECHTS: taalwissel */}
        <div
          role="group"
          aria-label={t("Taal kiezen", "Choose language")}
          className={`flex items-center rounded-full border text-sm overflow-hidden ${
            isHome ? "border-white/70" : "border-black/30"
          }`}
        >
          {(["nl", "en"] as const).map((code) => {
            const active = lang === code
            return (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={active}
                className={`px-3 py-1 uppercase transition ${
                  active
                    ? isHome
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : "hover:opacity-70"
                }`}
              >
                {code}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
