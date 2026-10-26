"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

const HEADER_IMAGES = [
  "/images/thumbnail_nachtbrekers.png",
  "/images/nachtbrekers2.png",
]

function HeaderSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HEADER_IMAGES.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <Image
      src={HEADER_IMAGES[index]}
      alt="Nachtbrekers poster"
      width={600}
      height={800}
      className="w-full object-contain"
    />
  )
}

export default function Project2Page() {
  const { t } = useLanguage()

  const documents = [
    {
      value: "concept",
      tab: t("Conceptboek", "Concept book"),
      file: "/Files/CONCEPTBOEK_NACHTBREKERS.pdf",
      caption: t("01 — Conceptboek", "01 — Concept book"),
      desc: t("Campagneconcept en uitgangspunten", "Campaign concept and starting points"),
    },
    {
      value: "styleguide",
      tab: t("Styleguide", "Style guide"),
      file: "/Files/STYLEGUIDE_NACHTBREKERS.pdf",
      caption: t("02 — Styleguide", "02 — Style guide"),
      desc: t("Huisstijl en visuele richtlijnen", "Brand identity and visual guidelines"),
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[28%_72%] gap-16 items-start">

        {/* LEFT: BIG IMAGE SLIDESHOW */}
        <div>
          <HeaderSlideshow />
        </div>

        {/* RIGHT: TITLE + INTRO */}
        <div className="flex flex-col gap-4 max-w-lg">

          <h1 className="text-4xl font-bold leading-tight">
            {t("NACHTBREKERS, Hall of Fame", "NACHTBREKERS, Hall of Fame")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Rebranding / Conceptontwikkeling", "Rebranding / Concept development")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Volgens Hall of Fame verdiende Tilburg een muzikaal nachtprogramma zodat alternatieve jongeren kunnen genieten, zich kunnen ontplooien en verbinding kunnen vinden met niche communities en muziekgenres.",
              "According to Hall of Fame, Tilburg deserved a musical night programme where alternative young people can enjoy themselves, grow, and connect with niche communities and music genres."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Rebranding", "Rebranding")}</Tag>
            <Tag>{t("Logo design", "Logo design")}</Tag>
          </div>

          {/* OVER NACHTBREKERS */}
          <div className="mt-4">
            <SectionHeading n="02" title={t("Over Nachtbrekers", "About Nachtbrekers")} />
            <p className="text-gray-700 leading-relaxed max-w-lg">
              {t(
                "NACHTBREKERS is een nachtprogramma wat gericht is op jongeren die net op stap mogen gaan, klaar zijn met de kroegen en willen ontdekken wat de nacht nog meer te bieden heeft. Hier vind je veel verschillende niche elektronische muziekgenres zoals club, techno, drum and bass en house.",
                "NACHTBREKERS is a night programme aimed at young people who have just started going out, are done with the bars and want to discover what else the night has to offer. Here you’ll find many different niche electronic music genres such as club, techno, drum and bass and house."
              )}
            </p>
          </div>

        </div>

      </section>

      {/* 03 — MISSIE & VISIE + DOCUMENTEN */}
      <section className="mt-24">

        <h2 className="text-2xl font-bold mb-0">
          {t("Missie & visie", "Mission & vision")}
        </h2>

        <div className="grid md:grid-cols-[38%_62%] gap-10 items-start mt-14">

          {/* LEFT: TEXT */}
          <div className="flex flex-col gap-4">

            {/* MISSIE */}
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>{t("Missie:", "Mission:")}</strong>{" "}
              {t(
                "Door Tilburg te voorzien van een levendig nachtprogramma willen we een bruisende thuisbasis worden voor degenen die op zoek zijn naar meer dan alleen de standaard uitgaansgelegenheden. Bij NACHTBREKERS gaat het niet alleen om het feesten, maar ook om het ontdekken en vieren van de unieke subculturen die onze stad rijk is.",
                "By giving Tilburg a vibrant night programme, we want to become a lively home base for those looking for more than the standard nightlife venues. At NACHTBREKERS it’s not just about partying, but also about discovering and celebrating the unique subcultures our city has to offer."
              )}
            </p>

            {/* VISIE */}
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>{t("Visie:", "Vision:")}</strong>{" "}
              {t(
                "Door onze passie voor muziek en subcultuur te delen, kunnen we een positieve impact hebben op Tilburg als culturele stad waarin je als alternatieveling herkenning kan vinden, kunt genieten en kan verbinden met gelijkgestemden. Hierdoor drukken wij een blijvende stempel op de culturele erfenis van Tilburg.",
                "By sharing our passion for music and subculture, we can have a positive impact on Tilburg as a cultural city where alternative people can find recognition, enjoy themselves and connect with like-minded people. In doing so, we leave a lasting mark on Tilburg’s cultural heritage."
              )}
            </p>

          </div>

          {/* RIGHT: PDF DOCUMENTEN */}
          <Tabs defaultValue="concept" className="relative">
            <TabsList className="absolute -top-14 right-0 bg-transparent p-0 gap-2 h-auto">
              {documents.map((doc) => (
                <TabsTrigger
                  key={doc.value}
                  value={doc.value}
                  className="rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-semibold bg-white text-black data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:shadow-none"
                >
                  {doc.tab}
                </TabsTrigger>
              ))}
            </TabsList>

            {documents.map((doc) => (
              <TabsContent key={doc.value} value={doc.value}>
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6">

                  <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <iframe
                      src={`${doc.file}#toolbar=0&navpanes=0&statusbar=0&view=Fit`}
                      title={doc.tab}
                      className="w-full h-[70vh]"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="font-semibold text-sm">{doc.caption}</p>
                      <p className="text-sm text-gray-600">{doc.desc}</p>
                    </div>

                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition"
                    >
                      {t("Open PDF in nieuw tabblad", "Open PDF in new tab")}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </TabsContent>
            ))}
          </Tabs>

        </div>

      </section>

    </main>
  )
}
