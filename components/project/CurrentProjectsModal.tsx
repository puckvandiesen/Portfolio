"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { CURRENT_PROJECTS } from "@/lib/currentProjects"
import { Tag } from "@/components/project/ProjectUI"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

function useIsMdUp() {
  const [isMd, setIsMd] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const update = () => setIsMd(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])
  return isMd
}

function ProjectImageSlideshow({
  images,
  orientation,
  matchHeight,
}: {
  images: string[]
  orientation: "landscape" | "portrait"
  matchHeight: number | null
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(id)
  }, [images.length])

  if (images.length === 0) {
    const placeholderClass =
      orientation === "landscape"
        ? "w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100"
        : "w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-100"
    return (
      <div
        className={`${placeholderClass} flex items-center justify-center`}
        style={matchHeight ? { height: matchHeight, width: "auto" } : undefined}
      >
        <span className="text-sm text-gray-400">Beeld volgt</span>
      </div>
    )
  }

  // Geen object-fit/crop: de afbeelding behoudt haar eigen verhouding en wordt nooit afgesneden.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={images[index]}
      alt=""
      className="w-full h-auto rounded-lg"
      style={matchHeight ? { height: matchHeight, width: "auto" } : undefined}
    />
  )
}

export function CurrentProjectsModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const isMd = useIsMdUp()
  const [bodyEl, setBodyEl] = useState<HTMLDivElement | null>(null)
  const bodyRef = useCallback((node: HTMLDivElement | null) => {
    setBodyEl(node)
  }, [])
  const [bodyHeight, setBodyHeight] = useState<number | null>(null)

  useEffect(() => {
    if (open) setIndex(0)
  }, [open])

  useEffect(() => {
    if (!bodyEl) return
    const update = () => setBodyHeight(bodyEl.offsetHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(bodyEl)
    return () => ro.disconnect()
  }, [bodyEl])

  const total = CURRENT_PROJECTS.length
  const project = CURRENT_PROJECTS[index]

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  if (!project) return null

  const paragraphs = t(project.text.nl, project.text.en)
  const isPortrait = project.orientation === "portrait"
  const matchHeight = isPortrait && isMd ? bodyHeight : null

  const bodyBlock = (
    <div ref={bodyRef} className="flex flex-col gap-4 md:w-64 shrink-0">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-gray-700 leading-relaxed text-[12px]">{paragraph}</p>
      ))}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag.nl}>{t(tag.nl, tag.en)}</Tag>
        ))}
      </div>
    </div>
  )

  const imageBlock = (
    <ProjectImageSlideshow
      images={project.images}
      orientation={project.orientation}
      matchHeight={matchHeight}
    />
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit max-w-[96vw] sm:max-w-[96vw] p-0 border-none rounded-2xl overflow-hidden bg-white">
        <DialogTitle className="sr-only">
          {t("Lopende projecten", "Current projects")}
        </DialogTitle>

        <div className="px-8 py-10 md:px-14 md:py-14">

          <h3 className="text-2xl font-bold mb-6 max-w-xl">
            {t(project.title.nl, project.title.en)}
          </h3>

          {project.orientation === "landscape" ? (
            <div className="flex flex-col gap-8 max-w-xl">
              {bodyBlock}
              {imageBlock}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-10 md:items-start md:w-fit md:max-w-full">
              {bodyBlock}
              {imageBlock}
            </div>
          )}

        </div>

        {total > 1 && (
          <div className="flex items-center justify-center gap-6 pb-8">

            <button
              onClick={goPrev}
              aria-label={t("Vorig project", "Previous project")}
              className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-300 bg-white hover:bg-black hover:text-white hover:border-black transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {CURRENT_PROJECTS.map((p, i) => (
                <button
                  key={p.title.nl}
                  onClick={() => setIndex(i)}
                  aria-label={`${t("Project", "Project")} ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label={t("Volgend project", "Next project")}
              className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-300 bg-white hover:bg-black hover:text-white hover:border-black transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </DialogContent>
    </Dialog>
  )
}
