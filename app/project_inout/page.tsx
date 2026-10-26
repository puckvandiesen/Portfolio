"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function InOutPage() {
  const { t } = useLanguage()
  return (
    <main className="max-w-6xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[45%_55%] gap-10 items-start mt-16">

        {/* LEFT - IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/InOut.png"
            alt="IN/OUT project"
            width={600}
            height={800}
            className="w-full max-w-md object-contain -mt-24"
          />
        </div>

        {/* RIGHT - TITLE + INTRO */}
        <div className="flex flex-col gap-4">

          <h1 className="text-4xl font-bold leading-tight text-black">
            {t("Illustratie en editorial design", "Illustration and editorial design")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Publicatie / Illustratie", "Publication / Illustration")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Deze opdracht was vooral gericht op snel werken, de bedoeling was om in 2 weken tijd een volledige publicatie te hebben vormgegeven rondom het thema IN/OUT.",
              "This assignment was mainly about working fast: the goal was to design a complete publication around the theme IN/OUT within 2 weeks."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Illustratie", "Illustration")}</Tag>
            <Tag>{t("Editorial design", "Editorial design")}</Tag>
            <Tag>{t("Publicatieontwerp", "Publication design")}</Tag>
          </div>

        </div>

      </section>

      {/* 02 — HET CONCEPT */}
      <section className="mt-20 max-w-2xl">
        <SectionHeading n="02" title={t("Het concept", "The concept")} />
        <p className="text-gray-700 leading-relaxed">
          {t(
            "Het thema en de teksten waren een gegeven, ons doel was om het thema in elke pagina terug te laten komen en de publicatie te laten voelen als een ervaring van begin tot eind. Door te werken met verschillende lagen en deze samen te voegen in een carrousel boek wordt je letterlijk in het verhaal en de illustratie getrokken.",
            "The theme and texts were given; our goal was to bring the theme back on every page and make the publication feel like an experience from start to finish. By working with different layers and combining them into a carousel book, you are literally drawn into the story and the illustration."
          )}
        </p>
      </section>

      {/* 03 — STATUS VAN HET PROJECT */}
      <section className="mt-16 max-w-2xl">
        <SectionHeading n="03" title={t("Status van het project", "Project status")} />
        <p className="text-gray-700 leading-relaxed text-sm bg-gray-50 border border-gray-200 rounded-lg px-5 py-4">
          {t(
            "Dit project is momenteel nog niet afgerond, de afbeelding is een sfeerimpressie totdat de publicatie daadwerkelijk geprint is.",
            "This project isn’t finished yet; the image is an artist’s impression until the publication has actually been printed."
          )}
        </p>
      </section>

    </main>
  )
}
