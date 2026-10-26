"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n"

export default function PersoonlijkPage() {
  const { t } = useLanguage()
  const items = [
    {
      text: t("Het Zwanenmeer van Tchaikovsky dansen als Odile", "Dance Tchaikovsky’s Swan Lake as Odile"),
      image: "/images/zwanenmeer.png",
    },
    {
      text: t("Werken als boerin op mijn eigen boerderij", "Work as a farmer on my own farm"),
      image: "/images/boer.png",
    },
    {
      text: t("Zieke kindjes in het Ronald McDonald huis beter maken als CliniClown", "Make sick children in the Ronald McDonald House feel better as a CliniClown"),
      image: "/images/cliniclown.png",
    },
    {
      text: t("Als prinses op de kermis werken", "Work as a princess at the funfair"),
      image: "/images/prinses.png",
    },
    {
      text: t("Modeontwerpster worden", "Become a fashion designer"),
      image: "/images/mode.png",
    },
    {
      text: t("Reclame maken voor Chocomel", "Make commercials for Chocomel"),
      image: "/images/chocomel.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative max-w-6xl mx-auto px-4 pb-16">

      {/* ⭐ STAR */}
      <Image
        src="/images/star.jpeg"
        alt="decorative star"
        width={120}
        height={120}
        className="absolute top-0 right-0 w-[190px] h-auto opacity-80 rotate-6"
      />

      {/* TITLE */}
      <h1 className="text-5xl font-bold mb-10">
        {t(
          "Persoonlijk",
          "Personal"
        )}
      </h1>

      {/* TOP SECTION */}
      <section className="grid md:grid-cols-[30%_70%] gap-10 items-center">
        <Image
          src="/images/Puck.jpeg"
          alt="Puck"
          width={300}
          height={300}
          className="object-contain"
        />

        <p className="text-gray-700 leading-relaxed max-w-xl">
          {t(
            "Ik vind dat een persoon niet puur en alleen beoordeeld moet worden op diploma’s en vaardigheden, maar dat persoonlijkheid minstens net zo belangrijk is. Op deze pagina vertel ik daarom wat meer over mijzelf, buiten mijn opleidingen, stages en skills om. Nieuwsgierig naar mijn ervaring en achtergrond? Die vind je in mijn",
            "I believe a person shouldn’t be judged purely on diplomas and skills, but that personality is at least as important. That’s why on this page I share a bit more about myself, beyond my education, internships and skills. Curious about my experience and background? You can find it in my"
          )}{" "}
          
          <a
            href="/files/CV_Puck_van_Diesen.pdf"
            download
            className="font-bold underline hover:opacity-70 transition"
          >
            CV
          </a>
          !
        </p>
      </section>

      {/* COFFEE + BOOKS */}
      <section className="grid md:grid-cols-[40%_60%] gap-8 items-start mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {t(
              "Een sneak peek in mijn camerarol!",
              "A sneak peek into my camera roll!"
            )}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t(
              "Na 4 jaar barista te zijn geweest kan ik ontzettend genieten van een lekker kopje koffie, zeker als ik deze zelf heb gemaakt met wat mooie latte art! Ik herinner me nog goed hoe trots ik was toen mijn allereerste latte art-pogingen eindelijk lukten!",
              "After 4 years as a barista, I can really enjoy a good cup of coffee, especially when I’ve made it myself with some beautiful latte art! I still remember how proud I was when my very first latte art attempts finally worked out!"
            )}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Zoals je kan zien hou ik ook erg van boeken, dit is altijd al zo geweest. Als klein meisje zat ik altijd met mijn neus in een boek of met een kleurpotlood in mijn hand.",
              "As you can see, I also love books, and I always have. As a little girl I always had my nose in a book or a coloured pencil in my hand."
            )}
          </p>
        </div>

        <div className="flex gap-3">
          <Image src="/images/Coffee_1.jpg" alt="" width={200} height={200} className="h-[220px] w-auto object-contain" />
          <Image src="/images/Coffee_2.jpg" alt="" width={200} height={200} className="h-[220px] w-auto object-contain" />
          <Image src="/images/Coffee_3.jpg" alt="" width={200} height={200} className="h-[220px] w-auto object-contain" />
          <Image src="/images/Books.jpg" alt="" width={200} height={200} className="h-[220px] w-auto object-contain" />
        </div>
      </section>

      {/* ROTATING DREAM */}
      <section className="flex justify-center mt-8">
        <div className="flex items-center gap-12 max-w-3xl w-full">

          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed">
              {t(
                "Als klein meisje waren er een hoop dingen die ik graag wilde doen, ik kan zo een heel lijstje maken van alle potentiële beroepen die kleine Puck graag had willen beoefenen.",
                "As a little girl there were lots of things I wanted to do; I could easily make a whole list of all the potential careers little Puck would have loved to pursue."
              )}
            </p>

            <p className="mt-4 font-semibold">
              {t(
                "Zo wilde ik graag:",
                "For example, I wanted to:"
              )}
            </p>

            <p className="mt-4 text-lg font-medium">
              {items[currentIndex].text}
            </p>
          </div>

          <div className="flex-shrink-0 -mt-4">
            <Image
              src={items[currentIndex].image}
              alt={t("droom", "dream")}
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* ART / CITY */}
      <section className="flex gap-10 items-center mt-8">

        <div className="flex gap-3">
          <Image src="/images/Antwerpen.jpg" alt="" width={300} height={400} className="h-[280px] w-auto object-contain" />
          <Image src="/images/Train.jpg" alt="" width={300} height={400} className="h-[280px] w-auto object-contain" />
          <Image src="/images/Wall.jpg" alt="" width={300} height={400} className="h-[280px] w-auto object-contain" />
          <Image src="/images/Art.jpg" alt="" width={300} height={400} className="h-[280px] w-auto object-contain" />
        </div>

        <p className="text-gray-700 leading-relaxed max-w-sm">
          {t(
            "Ik vind het heerlijk om overal kleine kunstwerkjes te vinden. Of dit nu daadwerkelijke posters, stickers, muurschilderingen etc. zijn, of ‘gewoon’ een hele mooie zonsondergang. Als het er mooi uitziet en mijn aandacht trekt zal er gegarandeerd een foto van worden gemaakt.",
            "I love finding little works of art everywhere. Whether they’re actual posters, stickers, murals etc., or ‘just’ a really beautiful sunset. If it looks beautiful and catches my eye, I’m guaranteed to take a photo of it."
          )}
        </p>

      </section>

      {/* FAMILY */}
      <section className="mt-12">
        <p className="text-xl font-semibold mb-6 text-center">
          {t(
            "Maar natuurlijk zou ik nergens zijn zonder de mensen om mij heen die me liefhebben!",
            "But of course I wouldn’t be anywhere without the people around me who love me!"
          )}
        </p>

        <div className="flex justify-center items-center gap-3">
          <Image src="/images/Thomas.jpg" alt="Thomas" width={350} height={350} className="h-[300px] w-auto object-contain" />
          <Image src="/images/Ouders.jpg" alt={t("Ouders", "Parents")} width={350} height={350} className="h-[300px] w-auto object-contain" />
          <Image src="/images/Anke.jpg" alt="Anke" width={350} height={350} className="h-[300px] w-auto object-contain" />
          <Image src="/images/Oma.jpg" alt={t("Oma", "Grandma")} width={350} height={350} className="h-[300px] w-auto object-contain" />
        </div>
      </section>

    </main>
  )
}