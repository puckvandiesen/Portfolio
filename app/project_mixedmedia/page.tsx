"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

const POSTERS = [
  "/images/Mixed_poster_1.png",
  "/images/Mixed_poster_2.png",
  "/images/Mixed_poster_3.png",
]

function PosterSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % POSTERS.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <Image
      src={POSTERS[index]}
      alt="Mixed media poster"
      width={500}
      height={600}
      className="w-full object-contain"
    />
  )
}

export default function MixedMediaPage() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[29.3%_70.7%] gap-16 items-start">

        {/* LEFT: POSTER SLIDESHOW */}
        <div>
          <PosterSlideshow />
        </div>

        {/* RIGHT: TITLE + INTRO */}
        <div className="flex flex-col gap-4 max-w-2xl">

          <h1 className="text-4xl font-bold leading-tight">
            {t("Grafische posters", "Graphic posters")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Mixed media / Posterontwerp", "Mixed media / Poster design")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Een mogelijkheid tijdens de minor Design 360º om te experimenteren met een combinatie van analoge en digitale design opties.",
              "An opportunity during the Design 360º minor to experiment with a combination of analogue and digital design options."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Collage", "Collage")}</Tag>
            <Tag>{t("Fotografie", "Photography")}</Tag>
            <Tag>{t("Digitale montage", "Digital montage")}</Tag>
          </div>

          {/* VAN COLLAGE TOT DIGITALE MONTAGE */}
          <div className="flex flex-col gap-4 mt-4">

            <SectionHeading n="02" title={t("Van collage tot digitale montage", "From collage to digital montage")} />

            <p className="text-gray-700 leading-relaxed">
              {t(
                "Deze posters zijn begonnen als analoge collage, deze collage is opgebouwd uit materialen als papier, verf en fineline illustraties. De gehele collage is niet gebruikt, maar eerder gebruikt als geheel om verschillende interessante frames uit te halen.",
                "These posters started as an analogue collage, built up from materials such as paper, paint and fineliner illustrations. The collage wasn’t used in its entirety, but rather served as a whole from which to pull various interesting frames."
              )}
            </p>

            <p className="text-gray-700 leading-relaxed">
              {t(
                "Er is ingezoomd op de gehele collage en deze kleine onderdelen zijn gefotografeerd en vervolgens bewerkt in Photoshop. Tijdens de digitale montage heb ik kunnen spelen met verschillende layer styles om de interessante onderdelen in de gefotografeerde frames er uit te laten springen.",
                "I zoomed in on the collage, photographed these small sections and then edited them in Photoshop. During the digital montage I was able to play with different layer styles to make the interesting parts of the photographed frames stand out."
              )}
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}
