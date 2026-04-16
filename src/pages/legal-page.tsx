import { Seo } from "@/src/components/seo"
import { legalContent, siteConfig } from "@/content/site"
import { Container } from "@/components/site/container"
import { PageHero } from "@/components/site/page-hero"

export function LegalPage({
  type
}: {
  type: keyof typeof legalContent
}) {
  const item = legalContent[type]

  return (
    <main>
      <Seo title={`${item.title} | ${siteConfig.name}`} description={`${item.title} for ${siteConfig.name}.`} />
      <PageHero
        eyebrow="Legal"
        title={item.title}
        description={`${item.title} for ${siteConfig.name}.`}
      />
      <section className="py-16">
        <Container className="max-w-4xl rounded-section border border-brand-accent/10 bg-white p-8 shadow-soft">
          <div className="space-y-5 text-base leading-8 text-brand-accent/80">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
