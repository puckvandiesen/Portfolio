export function StepNumber({ n }: { n: string }) {
  return (
    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-xs font-bold shrink-0">
      {n}
    </span>
  )
}

export function SectionHeading({ title }: { n?: string; title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-700">
      {children}
    </span>
  )
}
