export type CurrentProject = {
  title: { nl: string; en: string }
  text: { nl: string[]; en: string[] }
  tags: { nl: string; en: string }[]
  orientation: "landscape" | "portrait"
  images: string[]
}

// Pas deze lijst aan om lopende projecten toe te voegen of te verwijderen.
// Laat "images" leeg (images: []) om een placeholder te tonen totdat er
// echte afbeeldingen zijn. "text" is een lijst van alinea's.
export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    title: { nl: "Illustraties voor Beet Vishandel", en: "Illustrations for Beet Vishandel" },
    text: {
      nl: [
        "Beet is een online shop die handelt in decoratieve, keramieke vissen. Deze worden handgemaakt in Italië en dit proces kan daarom nog wel eens op zich laten wachten, om deze reden wil Beet ook makkelijker produceerbare producten gaan verkopen. De eerste stap is de juiste stijl vinden, illustraties en artworks maken, de volgende stap is productie.",
        "Dit is een project vanuit mijn huidige stageplek Studio Kluif.",
      ],
      en: [
        "Beet is an online shop selling decorative ceramic fish. These are handmade in Italy, so the process can sometimes take a while — which is why Beet also wants to start selling products that are easier to produce. The first step is finding the right style and creating illustrations and artwork, the next step is production.",
        "This is a project from my current internship at Studio Kluif.",
      ],
    },
    tags: [
      { nl: "Illustratie", en: "Illustration" },
      { nl: "Productontwerp", en: "Product design" },
    ],
    orientation: "portrait",
    images: ["/images/lopend_beet.jpeg"],
  },
  {
    title: { nl: "Posterontwerp voor Jazz Middelheim", en: "Poster design for Jazz Middelheim" },
    text: {
      nl: [
        "Deze opdracht draait om experimenteel ontwerp; niet van tevoren een concreet concept uitdenken maar gewoon aan de slag gaan, dingen proberen en zien of er mooie visuals uitkomen.",
        "Uiteindelijk zal er voor deze opdracht niet alleen een statische poster uitgewerkt worden, maar ook een interactieve poster, compleet met visuele briefing voor een technisch developer.",
      ],
      en: [
        "This assignment is all about experimental design: not working out a concrete concept beforehand, but simply getting started, trying things out and seeing what visuals come out of it.",
        "In the end, this assignment won't just result in a static poster, but also an interactive poster, complete with a visual briefing for a technical developer.",
      ],
    },
    tags: [
      { nl: "Posterontwerp", en: "Poster design" },
      { nl: "Experimenteel ontwerp", en: "Experimental design" },
    ],
    orientation: "portrait",
    images: ["/images/lopend_jazz.png"],
  },
  {
    title: { nl: "'Uncanny' Publicatieontwerp", en: "'Uncanny' Publication design" },
    text: {
      nl: [
        "Een van mijn afstudeerprojecten waar ik momenteel aan werk, samen met de hele klas maken we een experimentele, visuele publicatie rondom het thema 'uncanny'. Individueel verzorgen we 8 visuele spreads rondom een gegeven emotie, in mijn geval 'woede', gezamenlijk maken we beslissingen rondom formaat, papiertype, afwerking en binding.",
      ],
      en: [
        "One of the graduation projects I'm currently working on — together with the whole class, we're making an experimental, visual publication around the theme 'uncanny'. Individually we each create 8 visual spreads around a given emotion, in my case 'anger'; together we make decisions about format, paper type, finishing and binding.",
      ],
    },
    tags: [
      { nl: "Publicatieontwerp", en: "Publication design" },
      { nl: "Experimenteel ontwerp", en: "Experimental design" },
    ],
    orientation: "portrait",
    images: [],
  },
]
