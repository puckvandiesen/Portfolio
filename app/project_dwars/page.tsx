"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function DwarsPage() {
  const { t } = useLanguage()

  const books = [
    {
      value: "concept",
      tab: t("Conceptboek", "Concept book"),
      file: "/Files/Dwars_Conceptboek.pdf",
      caption: t("01 — Conceptboek", "01 — Concept book"),
      desc: t("Campagneconcept en uitgangspunten", "Campaign concept and starting points"),
    },
    {
      value: "inspiratie",
      tab: t("Inspiratieboek", "Inspiration book"),
      file: "/Files/Dwars_Inspiratieboek.pdf",
      caption: t("02 — Inspiratieboek", "02 — Inspiration book"),
      desc: t("Ideeën, moodboards en visuele inspiratie", "Ideas, moodboards and visual inspiration"),
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[40%_60%] gap-[51px] items-start">

        {/* LEFT: IMAGE */}
        <div className="relative max-w-[369px] ml-[10px]">
          <Image
            src="/images/thumbnail_dwars.png"
            alt="Dwars"
            width={600}
            height={800}
            className="w-full object-contain relative z-10"
          />
        </div>

        {/* RIGHT: TITLE + INTRO */}
        <div className="flex flex-col gap-4 mt-[25px] -ml-[30px]">

          <h1 className="text-4xl font-bold leading-tight">
            {t("Dwars & Co en de rampenregen", "Dwars & Co and the Storm of Disasters")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Kinderboeken / Campagneconcept", "Children's books / Campaign concept")}
          </p>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            {t(
              "‘Dwars & Co en de rampenregen’ is het tweede deel in de kinderboekenserie over de avonturen van de Dwarsliggers. Na het succes van het eerste deel, waarvan er een theatershow geweest is die ongeveer 60 keer heeft gespeeld en er edities zijn uitgebracht in België en Italië, biedt deze nieuwe titel kansen voor een creatieve en ludieke campagne passend bij het boek en haar lezers.",
              "'Dwars & Co and the Storm of Disasters' is the second instalment in the children's book series about the adventures of the Dwarsliggers. Following the success of the first book — which spawned a theatre show performed around 60 times and editions released in Belgium and Italy — this new title offers opportunities for a creative, playful campaign that suits the book and its readers."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Conceptontwikkeling", "Concept development")}</Tag>
            <Tag>{t("Art direction", "Art direction")}</Tag>
            <Tag>{t("Sprintproject", "Sprint project")}</Tag>
          </div>

          {/* VAN SPRINTWEEK NAAR INSPIRATIEBOEK */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-lg font-semibold">
              {t("Van sprintweek naar inspiratieboek", "From sprint week to inspiration book")}
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm">
              {t(
                "Deze promotiecampagne was een sprintproject. Het was de bedoeling dat we binnen een week een concept konden presenteren aan de schrijver, Rico Hop. Het uiteindelijke concept is niet meer door ons uitgewerkt, maar het snelle proces is wel heel waardevol geweest.",
                "This promotional campaign was a sprint project. The goal was to present a concept to the author, Rico Hop, within a single week. The final concept was never developed further by us, but the fast-paced process proved very valuable."
              )}
            </p>

            <p className="text-gray-700 leading-relaxed text-sm">
              {t(
                "Tijdens deze sprintweek hebben we een hele hoop ideeën opgedaan die we niet zomaar wilden weggooien, deze hebben we gebundeld in een inspiratieboek en meegegeven met onze eindpresentatie.",
                "During this sprint week we came up with a huge number of ideas that we didn't want to simply discard, so we bundled them into an inspiration book and included it with our final presentation."
              )}
            </p>
          </div>

        </div>

      </section>

      {/* 03 — DE TWEE BLADERBOEKEN */}
      <section className="mt-10">

        <Tabs defaultValue="concept">

          <div className="relative ml-[10px] -mt-[20px] flex items-center justify-between gap-4 flex-wrap">
            <SectionHeading n="03" title={t("Dompel je onder in het concept", "Immerse yourself in the concept")} />

            <TabsList className="bg-transparent p-0 gap-2 h-auto -translate-y-[10px]">
              {books.map((book) => (
                <TabsTrigger
                  key={book.value}
                  value={book.value}
                  className="rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-semibold bg-white text-black data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:shadow-none"
                >
                  {book.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {books.map((book) => (
            <TabsContent key={book.value} value={book.value}>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mt-2">

                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  <iframe
                    src={`${book.file}#toolbar=0&navpanes=0&statusbar=0`}
                    title={book.tab}
                    className="w-full h-[70vh]"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="font-semibold text-sm">{book.caption}</p>
                    <p className="text-sm text-gray-600">{book.desc}</p>
                  </div>

                  <a
                    href={book.file}
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

        <p className="text-xs text-gray-500 mt-4">
          {t(
            "Deze pagina toont de echte PDF-bestanden via de ingebouwde PDF-viewer van je browser — klik en scrol om door de pagina's te bladeren, of open het PDF-bestand in een nieuw tabblad voor een groter aanzicht.",
            "This page shows the real PDF files through your browser's built-in PDF viewer — click and scroll to browse through the pages, or open the PDF file in a new tab for a larger view."
          )}
        </p>

      </section>

    </main>
  )
}
