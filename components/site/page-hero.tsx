import { Container } from "@/components/site/container"

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string
  title: string
  description: string
}) {
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
