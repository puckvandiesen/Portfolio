"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function Project3Page() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[38.5%_61.5%] gap-10 items-start">

        {/* LEFT COLUMN */}
        <div>
          <Image
            src="/images/thumbnail_naakt.png"
            alt="Naakt Magazine"
            width={600}
            height={800}
            className="w-full object-contain"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 max-w-2xl">

          <h1 className="text-4xl font-bold leading-tight">
            {t("NAAKT Magazine", "NAAKT Magazine")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Magazine / Editorial design", "Magazine / Editorial design")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "NAAKT is een magazine dat speciaal is ontworpen voor jongeren tussen de 18 en 25 jaar oud en geschreven is door studenten. Het is een publicatie die gericht is op alles bespreekbaar maken.",
              "NAAKT is a magazine designed especially for young people aged 18 to 25 and written by students. It is a publication focused on making everything open for discussion."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Editorial design", "Editorial design")}</Tag>
            <Tag>{t("Branding", "Branding")}</Tag>
            <Tag>{t("Art direction", "Art direction")}</Tag>
          </div>

          {/* DE MISSIE VAN NAAKT */}
          <div className="flex flex-col gap-4 mt-4">

            <h2 className="text-2xl font-bold mb-3">
              {t("De missie van NAAKT", "NAAKT's mission")}
            </h2>

            <p className="text-gray-700 leading-relaxed text-[17.87px]">
              {t(
                "Met NAAKT willen de studenten-schrijvers, redacteurs en ontwerpers de doelgroep verrassen en inspireren met boeiende en diverse inhoud. Het is een magazine dat niet bang is om moeilijke onderwerpen aan te pakken en de lezers uit te dagen om na te denken over hun eigen perspectieven en meningen.",
                "With NAAKT, the student writers, editors and designers aim to surprise and inspire the target audience with engaging and diverse content. It is a magazine that isn’t afraid to tackle difficult topics and challenge readers to reflect on their own perspectives and opinions."
              )}
            </p>

            <p className="text-gray-700 leading-relaxed text-[14.47px]">
              {t(
                "NAAKT gaat verder dan de typische onderwerpen die in andere tijdschriften voor jongeren worden behandeld. Het biedt diepgaande en openhartige artikelen over onderwerpen die vaak als taboe worden beschouwd, waardoor lezers worden aangemoedigd om open te zijn en kwetsbaarheid te omarmen. Het tijdschrift is inclusief en benadrukt de waarde van diversiteit en gelijkheid.",
                "NAAKT goes beyond the typical topics covered in other magazines for young people. It offers in-depth and candid articles on subjects that are often considered taboo, encouraging readers to be open and embrace vulnerability. The magazine is inclusive and emphasises the value of diversity and equality."
              )}
            </p>

            <p className="text-gray-700 leading-relaxed font-medium text-[17.87px]">
              {t("Alles open en bloot bespreken, dát is NAAKT.", "Talking about everything, stripped bare: thát is NAAKT.")}
            </p>

          </div>

        </div>

      </section>

      {/* 03 — VISUELE IDENTITEIT */}
      <section className="mt-10">

        <SectionHeading n="03" title={t("Visuele identiteit", "Visual identity")} />

        <div className="grid md:grid-cols-[44%_56%] gap-6">

          <Image
            src="/images/Naakt_1.png"
            alt="Naakt visual 1"
            width={400}
            height={400}
            className="w-full object-cover rounded-lg"
          />

          <Image
            src="/images/Naakt_3.png"
            alt="Naakt visual 2"
            width={400}
            height={400}
            className="w-full object-cover rounded-lg"
          />

        </div>

        {/* INSTAGRAM LINK */}
        <div className="flex items-center gap-3 mt-6">

          <p className="text-[15.4px] text-gray-700">
            {t("Psst, bekijk ook eens de website en social media!", "Psst, check out the website and social media too!")}
          </p>

          <a href="https://www.instagram.com/naaktmagazine/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/instagram-icon.jpg"
              alt="Instagram"
              width={33}
              height={33}
              className="hover:scale-110 transition"
            />
          </a>

        </div>

      </section>

    </main>
  )
}
