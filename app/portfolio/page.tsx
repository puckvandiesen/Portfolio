"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { CurrentProjectsModal } from "@/components/project/CurrentProjectsModal"

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [currentProjectsOpen, setCurrentProjectsOpen] = useState(false)
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 pb-16">

      <section className="flex gap-6 items-start">

        {/* KOLOM 1 */}
        <div className="flex flex-col gap-12 flex-1">

          <h1 className="text-5xl font-bold text-right -mt-16 pr-6">
            Portfolio
          </h1>

          {/* CINECITY (NIEUW BOVEN HERO) */}
          <Link href="/project_cinecity" className="group">
            <div className="relative">

              <Image
                src="/images/star.jpeg"
                alt="decorative star"
                width={300}
                height={300}
                className="absolute -left-24 -top-32 w-[270px] opacity-80 -z-10"
              />

              <Image
                src="/images/thumbnail_cinecity.jpg"
                alt="CineCity"
                width={500}
                height={600}
                className="w-2/3 mx-auto object-cover group-hover:scale-105 transition relative z-10"
              />
            </div>
          </Link>

          {/* HERO */}
          <Link href="/project_organix" className="group">
            <div>
              <Image
                src="/images/thumbnail_organix.png"
                alt="HERO Organix"
                width={500}
                height={600}
                className="w-2/3 mx-auto translate-x-4 object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>

          {/* IN/OUT — tijdelijk verborgen, pagina blijft in de code staan voor later
          <Link href="/project_inout" className="group">
            <div>
              <Image
                src="/images/InOut.png"
                alt="InOut"
                width={500}
                height={600}
                className="w-2/3 mx-auto -translate-x-4 object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>
          */}

          {/* TYPOGRAFIE */}
          <Link href="/project_typografie" className="group">
            <div className="relative">

              <Image
                src="/images/star.jpeg"
                alt="decorative star"
                width={300}
                height={300}
                className="absolute -left-16 -top-12 w-[200px] opacity-80 -rotate-12 -z-10"
              />

              <Image
                src="/images/thumbnail_typografie.jpg"
                alt={t("Typografie poster", "Typography poster")}
                width={500}
                height={600}
                className="w-2/3 mx-auto -translate-x-4 object-cover group-hover:scale-105 transition relative z-10"
              />
            </div>
          </Link>

        </div>

        {/* KOLOM 2 */}
        <div className="flex flex-col gap-12 flex-1 pt-1 -mt-14">

          <p className="text-sm text-gray-700 leading-relaxed text-left max-w-sm">
{t(
            "Ik ben een creatieve geest met een passie voor visueel ontwerp en communicatie. Ik vind het geweldig om ideeën om te zetten in beelden die een verhaal vertellen, mensen raken en impact hebben.",
            "I'm a creative mind with a passion for visual design and communication. I love turning ideas into visuals that tell a story, move people and make an impact."
          )}
          </p>

          <p className="text-sm text-gray-700 leading-relaxed text-left max-w-sm">
{t(
            "Hier vind je een mix van projecten waaraan ik heb gewerkt, van branding en visual design tot campagnes en content.",
            "Here you'll find a mix of projects I've worked on, from branding and visual design to campaigns and content."
          )}
          </p>

          <button
            onClick={() => setCurrentProjectsOpen(true)}
            className="w-fit rounded-full border-2 border-black px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            {t("Lopende Projecten", "Current Projects")}
          </button>

          {/* DWARS */}
          <Link href="/project_dwars" className="group">
            <div>
              <Image
                src="/images/thumbnail_dwars.png"
                alt="Dwars"
                width={500}
                height={600}
                className="w-2/3 mx-auto object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>

          {/* MIXED MEDIA */}
          <Link href="/project_mixedmedia" className="group">
            <div>
              <Image
                src="/images/thumbnail_mixedmedia.png"
                alt="Mixed media posters"
                width={500}
                height={600}
                className="w-2/3 mx-auto translate-x-4 object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>

        </div>

        {/* KOLOM 3 */}
        <div className="flex flex-col gap-12 flex-1 -mt-10">

          {/* NAAKT */}
          <Link href="/project_naakt" className="group">
            <div>
              <Image
                src="/images/thumbnail_naakt.png"
                alt="Naakt Magazine"
                width={500}
                height={600}
                className="w-2/3 mx-auto object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>

          {/* NACHTBREKERS */}
          <Link href="/project_nachtbrekers" className="group">
            <div className="relative">

              <Image
                src="/images/star.jpeg"
                alt="decorative star"
                width={300}
                height={300}
                className="absolute -right-24 -top-16 w-[230px] opacity-80 rotate-6 -z-10"
              />

              <Image
                src="/images/thumbnail_nachtbrekers.png"
                alt="Nachtbrekers"
                width={500}
                height={600}
                className="w-2/3 mx-auto translate-x-4 object-cover group-hover:scale-105 transition relative z-10"
              />
            </div>
          </Link>

          {/* FOTOGRAFIE */}
          <Link href="/project_fotografie" className="group">
            <div>
              <Image
                src="/images/thumbnail_fotografie.png"
                alt={t("Fotografie", "Photography")}
                width={500}
                height={600}
                className="w-2/3 mx-auto -translate-x-4 object-cover group-hover:scale-105 transition"
              />
            </div>
          </Link>

        </div>

      </section>

      <CurrentProjectsModal open={currentProjectsOpen} onOpenChange={setCurrentProjectsOpen} />

    </main>
  )
}