"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { Tag } from "@/components/project/ProjectUI"

export default function FotografiePage() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER + PORTFOLIO IMAGE */}
      <section className="grid md:grid-cols-[1fr_290px] gap-6 items-start max-w-6xl mx-auto mb-10">

        {/* LEFT: TEXT */}
        <div className="flex flex-col gap-4">

          <h1 className="text-4xl font-bold leading-tight">
            {t("Fotoreeks tribute aan Yaqine Hamzaoui", "Photo series as a tribute to Yaqine Hamzaoui")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Fotografie / Tribute project", "Photography / Tribute project")}
          </p>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            {t(
              "Een fotoreeks gemaakt als tribute naar Brusselse fotografe Yaqine Hamzaoui, waarbij rekening gehouden moest worden met het designprincipe van punt, lijn en vlak.",
              "A photo series created as a tribute to Brussels photographer Yaqine Hamzaoui, taking into account the design principle of point, line and plane."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            {t(
              "De reeks is met name geïnspireerd op Hamzaoui’s persoonlijke fotografie op haar Instagram account, hierbij wordt veel beweging getoond en zijn de foto’s vaak erg gesatureerd.",
              "The series is mainly inspired by Hamzaoui’s personal photography on her Instagram account, which shows a lot of movement and where the photos are often highly saturated."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            {t(
              "Deze experimentele stijl heeft mij de mogelijkheid gegeven om veel te spelen met de instellingen van mijn camera, hierdoor heb ik een beter idee gekregen van de functies van het diafragma, sluitertijd en ISO-waarde.",
              "This experimental style gave me the opportunity to play a lot with my camera settings, which gave me a better understanding of how aperture, shutter speed and ISO work."
            )}
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>{t("Fotografie", "Photography")}</Tag>
            <Tag>{t("Visual storytelling", "Visual storytelling")}</Tag>
          </div>

        </div>

        {/* RIGHT: PORTFOLIO IMAGE */}
        <div className="relative" style={{ transform: "translateX(-15px)" }}>
          <Image
            src="/images/thumbnail_fotografie.png"
            alt="Fotografie project"
            width={500}
            height={700}
            className="w-full object-contain"
          />
        </div>

      </section>

      {/* 02 — BIG IMAGE (FULL BROWSER WIDTH) */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-4">
        <Image
          src="/images/Fotografie_Total.jpeg"
          alt={t("Fotografie overzicht", "Photography overview")}
          width={1400}
          height={800}
          className="w-full object-cover"
        />
      </section>

    </main>
  )
}
