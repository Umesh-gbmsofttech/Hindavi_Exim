import { Seo } from "@/src/components/seo"
import { certifications, siteConfig } from "@/content/site"
import { PageHero } from "@/components/site/page-hero"
import { Container } from "@/components/site/container"

export function CertificationsPage() {
  return (
    <main>
      <Seo title={`Certifications | ${siteConfig.name}`} description="Review the certification and compliance positioning that supports Hindavi Export turmeric and tamarind supply programs." />
      <PageHero
        eyebrow="Certifications"
        title="Quality and compliance positioning that matters to international buyers."
        description="Certifications and compliance references help buyers understand the framework around our export readiness."
      />
      <section className="py-16">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <article key={item.name} className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                {item.name}
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-accent/80">{item.description}</p>
            </article>
          ))}
        </Container>
      </section>
    </main>
  )
}
