"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function TypoPosterPage() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20 -mt-4">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[25.2%_74.8%] gap-[89px] items-start max-w-6xl mx-auto">

        {/* LEFT: ANIMATION */}
        <div className="relative w-full max-w-[421px]">
          <video
            src="/MP4/Typo_poster.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* RIGHT: TITLE + INTRO */}
        <div className="flex flex-col gap-4 max-w-xl mt-4">

          <h1 className="text-4xl font-bold leading-tight">
            {t("Geïllustreerde en geanimeerde typografische poster", "Illustrated and animated typographic poster")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Typografie / Animatie", "Typography / Animation")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Een gegeven citaat en achtergrondverhaal worden samengevoegd in een typografische poster, animatie en social media post.",
              "A given quote and backstory are combined into a typographic poster, animation and social media post."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Typografie", "Typography")}</Tag>
            <Tag>{t("Animatie", "Animation")}</Tag>
            <Tag>{t("Social media", "Social media")}</Tag>
          </div>

          {/* HET ONTWERPPROCES */}
          <div className="flex flex-col gap-4 mt-4">
            <SectionHeading n="02" title={t("Het ontwerpproces", "The design process")} />
            <p className="text-gray-700 leading-relaxed">
              {t(
                "Tijdens het ontwerpen van deze poster heb ik kunnen werken met verschillende soorten typografie. Ik heb bestaande lettertypes gebruikt, maar ook gespeeld met de ruimte die ik tot mijn beschikking had. De poster is opgedeeld in verschillende vlakken, deze vlakken worden soms opgevuld met een bestaande letter, maar soms ook met aparte overliggende vormen die optisch gezien een letter vormen.",
                "While designing this poster I was able to work with different kinds of typography. I used existing typefaces, but also played with the space I had at my disposal. The poster is divided into different planes, which are sometimes filled with an existing letter, but sometimes also with separate overlapping shapes that optically form a letter."
              )}
            </p>
          </div>

        </div>

      </section>

      {/* 03 — VAN POSTER NAAR CAROUSEL */}
      <section className="mt-20 max-w-6xl mx-auto">

        <SectionHeading n="03" title={t("Van poster naar carousel", "From poster to carousel")} />

        <p className="text-gray-700 leading-relaxed mb-8">
          {t(
            "De poster is verder uitgebreid naar een animatie en een carrousel-post, volgens de briefing die ik heb gekregen vanuit de Hogeschool.",
            "The poster was further expanded into an animation and a carousel post, following the brief I received from the university of applied sciences."
          )}
        </p>

        <Image
          src="/images/Typo_poster2.png"
          alt="Typography poster detail"
          width={800}
          height={600}
          className="w-full object-contain rounded-lg"
        />

      </section>

    </main>
  )
}
