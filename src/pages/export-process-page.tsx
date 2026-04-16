import { Seo } from "@/src/components/seo"
import { exportProcess, siteConfig } from "@/content/site"
import { PageHero } from "@/components/site/page-hero"
import { Container } from "@/components/site/container"

export function ExportProcessPage() {
  return (
    <main>
      <Seo title={`Export Process | ${siteConfig.name}`} description="Understand how Hindavi Export manages sourcing, quality checks, packaging, logistics, and export documentation." />
      <PageHero
        eyebrow="Export process"
        title="An export workflow designed for transparency and repeatability."
        description="Our process is communicated clearly so buyers know how product flow, checks, packaging, and shipment coordination are handled."
      />
      <section className="py-16">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {exportProcess.map((step, index) => (
            <article key={step.title} className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Step {index + 1}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-brand-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-accent/80">{step.description}</p>
            </article>
          ))}
        </Container>
      </section>
    </main>
  )
}
