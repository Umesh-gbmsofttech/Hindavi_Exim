import { useParams } from "react-router-dom"
import { Seo } from "@/src/components/seo"
import { productData, siteConfig } from "@/content/site"
import { Container } from "@/components/site/container"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { SpecTable } from "@/components/site/spec-table"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"

type ProductKey = "turmeric" | "tamarind"

export function ProductDetailPage({
  mode = "slug",
  productKey
}: {
  mode?: "slug" | "seo"
  productKey?: ProductKey
}) {
  const params = useParams()
  const resolvedKey =
    productKey ??
    ((params.slug === "turmeric" ? "turmeric" : params.slug === "tamarind" ? "tamarind" : null) as ProductKey | null)

  if (!resolvedKey) {
    return (
      <main className="py-24">
        <Container>
          <p className="text-lg text-brand-accent">Product not found.</p>
        </Container>
      </main>
    )
  }

  const item = productData[resolvedKey]
  const title =
    resolvedKey === "turmeric"
      ? `Turmeric Export from India | ${siteConfig.name}`
      : `Tamarind Exporter from India | ${siteConfig.name}`

  return (
    <main>
      <Seo title={title} description={item.shortDescription} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: item.name,
          description: item.shortDescription,
          image: `${siteConfig.url}${item.heroImage}`,
          category: resolvedKey === "turmeric" ? "Spices" : "Food ingredient",
          brand: { "@type": "Brand", name: siteConfig.name }
        }}
      />
      <PageHero
        eyebrow={resolvedKey === "turmeric" ? "Turmeric exporter" : "Tamarind exporter"}
        title={
          resolvedKey === "turmeric"
            ? "Turmeric export from India with commercial clarity and dependable packing options."
            : "Tamarind export from India for buyers who need texture, hygiene, and packaging confidence."
        }
        description={item.intro}
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Product overview"
              title={`${item.name} for importers, food brands, and wholesale programs.`}
              description={item.intro}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {item.types.map((type) => (
                <div key={type} className="rounded-card border border-brand-accent/10 bg-white px-4 py-4 text-sm font-medium text-brand-accent shadow-soft">
                  {type}
                </div>
              ))}
            </div>
            {mode === "slug" ? (
              <p className="text-sm text-brand-accent/70">
                Preferred SEO URL: <span className="font-semibold text-brand-primary">/{item.seoSlug}</span>
              </p>
            ) : null}
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-section shadow-soft">
            <img src={item.heroImage} alt={item.name} className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Specifications"
              title={resolvedKey === "turmeric" ? "Key commercial parameters" : "Commercial and packing considerations"}
              description="These details help buyers assess fit before sampling or quotation."
            />
            <SpecTable rows={item.specifications} />
          </div>
          <div className="space-y-6">
            <div className="rounded-section border border-brand-accent/10 bg-brand-surface p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-brand-ink">Packaging options</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-accent/80">
                {item.packaging.map((row) => (
                  <li key={row}>• {row}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-brand-ink">Export standards</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-accent/80">
                {item.standards.map((row) => (
                  <li key={row}>• {row}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </main>
  )
}
