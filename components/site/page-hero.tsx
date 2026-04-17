import { useState } from "react"
import { Container } from "@/components/site/container"

export function PageHero({
  eyebrow,
  title,
  description,
  variant = "hero"
}: {
  eyebrow: string
  title: string
  description: string
  variant?: "hero" | "plain"
}) {
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false })

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setGlow({ x, y, active: true })
  }

  if (variant === "plain") {
    return (
      <section className="bg-brand-surface py-16 md:py-20">
        <Container>
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
              {title}
            </h1>
            <p className="text-base leading-8 text-brand-accent/80 md:text-lg">{description}</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section
      className="relative min-h-[68vh] overflow-hidden bg-brand-ink bg-cover bg-center bg-fixed text-white md:min-h-[72vh]"
      style={{ backgroundImage: "url('/images/hero.png')" }}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, active: false }))}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.active ? 0.8 : 0.35,
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.2), rgba(255,255,255,0.08) 30%, transparent 65%)`
        }}
      />
      <Container className="relative flex min-h-[68vh] items-center py-16 md:min-h-[72vh] md:py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-8 text-white/80 md:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  )
}
