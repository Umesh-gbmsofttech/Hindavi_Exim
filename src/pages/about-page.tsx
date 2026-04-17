import { Seo } from "@/src/components/seo"
import { PageHero } from "@/components/site/page-hero"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/content/site"

export function AboutPage() {
  return (
    <main>
      <Seo title={`About | ${siteConfig.name}`} description="Learn how Hindavi Exim supports turmeric and tamarind importers with sourcing clarity, export packaging, and dependable trade execution." />
      <PageHero
        eyebrow="About"
        title="A focused turmeric and tamarind import-export company built around quality and responsiveness."
        description="Hindavi Exim serves buyers who need turmeric and tamarind sourced from India with clear specifications, packaging confidence, and smooth shipment coordination."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Company overview"
              title="Professional presentation, product discipline, and buyer-focused execution."
              description="We built Hindavi Exim to reflect how turmeric and tamarind import-export decisions are made: with attention to consistency, standards, and clarity in every stage of communication."
            />
            <p className="text-base leading-8 text-brand-accent/80">
              Our business intent is straightforward. We supply turmeric and tamarind products for importers, distributors, and food buyers who need reliable information before they commit to an order.
            </p>
          </div>
          <div className="min-h-[340px] overflow-hidden rounded-section shadow-soft">
            <img src="/images/hero.png" alt="Hindavi Exim turmeric and tamarind business" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-section border border-brand-accent/10 p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-brand-ink">Mission</h2>
              <p className="mt-4 text-base leading-8 text-brand-accent/80">
                To deliver turmeric and tamarind exports from India with dependable quality communication, practical packaging support, and organized shipment handling for global buyers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-section border border-brand-accent/10 bg-brand-surface p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-brand-ink">Vision</h2>
              <p className="mt-4 text-base leading-8 text-brand-accent/80">
                To become a trusted turmeric and tamarind import-export partner for buyers who value commercial clarity, reliability, and long-term sourcing confidence.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-section border border-brand-accent/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              Founder perspective
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-brand-ink">
              “Serious export relationships begin with clarity, not with vague claims.”
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-accent/80">
              Our founder direction is centered on practical trust signals: consistent product communication, realistic packing discussions, and shipment support that respects the buyer’s planning needs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Infrastructure",
                text: "Our workflows are organized around sourcing visibility, lot readiness, packaging alignment, and dispatch preparation."
              },
              {
                title: "Sourcing",
                text: "Product sourcing conversations are matched to buyer use case, market standards, and shipment format."
              },
              {
                title: "Packaging",
                text: "We support commercial pack structures that suit bulk, retail, or private-label requirements."
              },
              {
                title: "Trade readiness",
                text: "Documentation and shipment coordination are treated as core parts of the buyer experience, not an afterthought."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-accent/80">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
