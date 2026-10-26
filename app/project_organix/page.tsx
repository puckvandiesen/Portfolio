"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { SectionHeading, Tag } from "@/components/project/ProjectUI"

export default function Project1Page() {
  const { t } = useLanguage()
  return (
    <main className="max-w-7xl mx-auto px-6 pb-20">

      {/* 01 — HEADER */}
      <section className="grid md:grid-cols-[26%_74%] gap-16 items-start">

        {/* LEFT: MAIN IMAGE */}
        <div>
          <Image
            src="/images/thumbnail_organix.png"
            alt="Hero Organix"
            width={600}
            height={800}
            className="w-full object-contain"
          />
        </div>

        {/* RIGHT: TITLE + INTRO */}
        <div className="flex flex-col gap-4 max-w-2xl">

          <h1 className="text-4xl font-bold leading-tight">
            {t("HERO Organix", "HERO Organix")}
          </h1>

          <p className="text-xs tracking-widest uppercase text-gray-500">
            {t("Campagneconcept / Fotoshoot", "Campaign concept / Photoshoot")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Het merk Hero staat bij veel mensen bekend om hun jam of cassis, maar Hero is veel groter dan dat.",
              "Many people know the Hero brand for its jam or cassis, but Hero is much bigger than that."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Een van Hero’s submerken is Hero Organix. Zij produceren gezonde, biologische voeding voor peuters en kleuters omdat ze vinden dat elk kind een goede, gezonde basis verdient. Naast peuter- en kleutervoeding gaat Organix ook baby opvolgmelk produceren en hier is natuurlijk promotiemateriaal voor nodig.",
              "One of Hero’s sub-brands is Hero Organix. They produce healthy, organic food for toddlers and young children because they believe every child deserves a good, healthy start. Alongside toddler food, Organix is also launching baby follow-on milk, which of course needs promotional material."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Het was aan ons om een key visual te ontwerpen die gebruikt kon worden ter promotie op de website en social mediakanalen van Organix.",
              "It was up to us to design a key visual that could be used for promotion on Organix’s website and social media channels."
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <Tag>{t("Key visual design", "Key visual design")}</Tag>
            <Tag>{t("Campagneconcept", "Campaign concept")}</Tag>
            <Tag>{t("Art direction", "Art direction")}</Tag>
          </div>

        </div>

      </section>

      {/* 02 — DE FOTOSHOOT */}
      <section className="mt-[68px] grid md:grid-cols-[60.4%_39.6%] gap-[14px] items-center">

        <div className="flex flex-col gap-4 max-w-[76%]">
          <h2 className="text-[27.6px] font-bold mb-3 -mt-[55px]">
            {t("Van idee naar werkelijkheid", "From idea to reality")}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Om de keyvisual zo authentiek mogelijk te houden hebben we een fotoshoot georganiseerd, waarbij het product en de doelgroep op een natuurlijke en speelse manier in beeld zijn gebracht.",
              "To keep the key visual as authentic as possible, we organised a photoshoot, capturing the product and target audience in a natural, playful way."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "We hebben 3 verschillende baby’s gefotografeerd en tijdens deze shoot ook wat videobeelden gemaakt voor eventuele bewegende keyvisuals.",
              "We photographed 3 different babies and also shot some video footage during this shoot for potential moving key visuals."
            )}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t(
              "Persoonlijk heb ik hier met name gefungeerd als productieassistente en rechterhand van de Art Director.",
              "Personally, I mainly acted as production assistant and right hand to the Art Director here."
            )}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg aspect-[800/600] -ml-[20px]">
          <Image
            src="/images/organix_shoot.jpeg"
            alt="Organix fotoshoot"
            width={800}
            height={600}
            className="w-full h-[calc(100%+5px)] object-cover object-top"
          />
        </div>

      </section>

      {/* 03 — HET RESULTAAT */}
      <section className="mt-[68px]">

        <SectionHeading n="03" title={t("Het resultaat", "The result")} />

        <div className="grid md:grid-cols-[53.7%_46.3%] gap-6 max-w-[80%]">

          <Image
            src="/images/Hero_1.png"
            alt="Hero visual 1"
            width={400}
            height={400}
            className="w-full object-cover rounded-lg"
          />

          <Image
            src="/images/Hero_3.png"
            alt="Hero visual 2"
            width={400}
            height={400}
            className="w-full object-cover rounded-lg"
          />

        </div>

        <p className="text-xs text-gray-500 mt-4">
          {t(
            "De promotiecampagne van Hero Organix is binnengekomen bij NO TOMATO in Breda, het bedrijf waar ik in 2022 stage heb mogen lopen.",
            "The Hero Organix promotional campaign came in at NO TOMATO in Breda, the company where I did my internship in 2022."
          )}
        </p>

      </section>

    </main>
  )
}
