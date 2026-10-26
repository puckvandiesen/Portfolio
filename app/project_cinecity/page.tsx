"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function CinecityPage() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* BLOK 1 — INTRO + CONCEPT TEKST, THUMBNAIL */}
      <section className="grid md:grid-cols-[48%_52%] gap-[150px] items-stretch max-w-6xl mx-auto">

        {/* LEFT: TEXT SECTION 1 + 2 */}
        <div className="flex flex-col gap-10">

          {/* TEKSTSECTIE 1 — INTRO */}
          <div className="flex flex-col gap-4 max-w-xl">

            <h1 className="text-4xl font-bold leading-tight">
              {t("CineCity Filmfestival", "CineCity Film Festival")}
            </h1>

            <p className="text-xs tracking-widest uppercase text-gray-500">
              {t("Concept / Visuele identiteit", "Concept / Visual identity")}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t(
                "Cinecity is een fictief filmfestival in Antwerpen, hiervoor heb ik een visuele identiteit ontwikkeld die wordt doorgetrokken in verschillende conceptdragers.",
                "Cinecity is a fictional film festival in Antwerp, for which I developed a visual identity that carries through across various deliverables."
              )}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <Tag>{t("Conceptontwikkeling", "Concept development")}</Tag>
              <Tag>{t("Illustratie", "Illustration")}</Tag>
              <Tag>{t("Art direction", "Art direction")}</Tag>
            </div>

          </div>

          {/* TEKSTSECTIE 2 — CONCEPT */}
          <div className="flex flex-col gap-4">

            <SectionHeading title={t("Het Concept", "The Concept")} />

            <p className="text-gray-700 leading-relaxed">
              {t(
                "Het concept is ontwikkeld voor het dagprogramma met als thema ‘coming of age’. Dit thema heb ik geïnterpreteerd als een verzameling van alles wat jou, jou maakt. Deze verzameling heeft zich vervolgens geuit in een illustratie van een Chinese draak.",
                "The concept was developed for the day programme with the theme ‘coming of age’. I interpreted this theme as a collection of everything that makes you, you. This collection was then expressed in an illustration of a Chinese dragon."
              )}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t(
                "Draken worden in de verhalen afgebeeld als verzamelaars en de Chinese draken specifiek staan ook voor voorspoed, groei en wijsheid, 3 onderwerpen die goed aansluiten bij het thema ‘coming of age’.",
                "In stories, dragons are portrayed as collectors, and Chinese dragons in particular also stand for prosperity, growth and wisdom, 3 subjects that fit well with the theme ‘coming of age’."
              )}
            </p>

          </div>

        </div>

        {/* RIGHT: THUMBNAIL — vult het blok, boven/onder uitgelijnd */}
        <div className="h-full flex justify-start">
          <div className="w-[64%] h-full">
            <Image
              src="/images/thumbnail_cinecity.jpg"
              alt="Cinecity poster"
              width={500}
              height={700}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

      </section>

      {/* BLOK 2 — ANIMATIE */}
      <section className="max-w-6xl mx-auto mt-[52px]">
        <video
          src="/MP4/Cinecity.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        />
      </section>

      {/* BLOK 3 — TOEGEPAST OP DE CONCEPTDRAGERS */}
      <section className="mt-[52px] max-w-6xl mx-auto">

        <SectionHeading title={t("Toegepast op de conceptdragers", "Applied across the deliverables")} />

        <p className="text-gray-700 leading-relaxed max-w-2xl mb-8">
          {t(
            "Binnen deze identiteit zijn er verschillende dragers uitgewerkt zoals filmaffiches, een programmaboekje, entreetickets, title sequence en een website.",
            "Within this identity, various deliverables were developed, such as film posters, a programme booklet, entry tickets, a title sequence and a website."
          )}
        </p>

        <Image
          src="/images/Cinecity.png"
          alt="Cinecity visuals"
          width={1400}
          height={800}
          className="w-full object-cover rounded-lg"
        />

      </section>

    </main>
  )
}
