import { Link } from "react-router-dom"
import { Globe2, Package, BadgeCheck, ArrowRight, FileText, Warehouse } from "lucide-react"
import { Container } from "@/components/site/container"
import { SectionHeading } from "@/components/site/section-heading"
import { TrustStrip } from "@/components/site/trust-strip"
import { ProductCard } from "@/components/site/product-card"
import { TestimonialCard } from "@/components/site/testimonial-card"
import { CtaBand } from "@/components/site/cta-band"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/site/json-ld"
import {
  exportCapabilities,
  productData,
  siteConfig,
  testimonials,
  whyChooseUs
} from "@/content/site"
import { Reveal } from "@/components/site/reveal"
import { Seo } from "@/src/components/seo"

const capabilityIcons = [Globe2, Package, FileText, Warehouse, BadgeCheck, ArrowRight]

export function HomePage() {
  return (
    <main>
      <Seo
        title="Turmeric & Tamarind Exporter from India | Hindavi Export"
        description={siteConfig.description}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          email: siteConfig.email,
          description: siteConfig.description,
          sameAs: [siteConfig.whatsapp]
        }}
      />
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0 bg-hero-overlay" />
        <img
          src="/images/hero.webp"
          alt="Hindavi Export hero"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <Container className="relative grid gap-12 py-20 pb-16 md:py-28 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {siteConfig.hero.eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              {siteConfig.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {siteConfig.hero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/contact">
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Quote
                </Button>
              </Link>
              <Link to="/products">
                  <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>

          <Reveal className="lg:justify-self-end">
            <div className="rounded-section border border-white/10 bg-white/10 p-5 backdrop-blur sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Core products", "Turmeric & tamarind"],
                  ["Packaging", "Bulk and retail-ready"],
                  ["Support", "Export documents and dispatch coordination"],
                  ["Buyer fit", "Importers, distributors, private label"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-card border border-white/10 bg-white/5 p-4 sm:min-h-[122px]">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/55">{label}</p>
                    <p className="mt-2 text-base font-medium leading-7 text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-8 pt-8 md:pb-10 md:pt-10">
        <Container>
          <TrustStrip />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="min-h-[320px] overflow-hidden rounded-section shadow-soft md:min-h-[420px]">
            <img src="/images/quality-check.webp" alt="Quality inspection" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Hindavi Export"
              title="A cleaner, export-focused partner for turmeric and tamarind buyers."
              description="We position our business around what serious importers care about: product consistency, practical packaging, export handling, and communication that keeps shipments moving."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Wholesale and distributor supply",
                "Private-label support",
                "Export-grade packing discussion",
                "Shipment and document coordination"
              ].map((item) => (
                <div key={item} className="rounded-card border border-brand-accent/10 bg-white p-4 text-sm font-medium text-brand-accent shadow-soft">
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button asChild>Read Company Overview</Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Products"
            title="Export-ready product range"
            description="Our product pages are built for B2B buyers who need commercial information quickly."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard
              title={productData.turmeric.name}
              href={`/${productData.turmeric.seoSlug}`}
              description={productData.turmeric.shortDescription}
              image={productData.turmeric.heroImage}
            />
            <ProductCard
              title={productData.tamarind.name}
              href={`/${productData.tamarind.seoSlug}`}
              description={productData.tamarind.shortDescription}
              image={productData.tamarind.heroImage}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built to improve trust before the first shipment leaves India."
            description="Each part of the site and service offer is designed to answer the questions global buyers actually ask."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-section border border-brand-accent/10 bg-brand-surface p-6 shadow-soft">
                  <h3 className="text-xl font-semibold text-brand-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-accent/80">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Export Capabilities"
              title="What buyers can expect across sourcing, packing, and shipment handling."
              description="We keep capability statements specific so your sourcing team can quickly assess fit."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {exportCapabilities.map((item, index) => {
                const Icon = capabilityIcons[index] ?? BadgeCheck
                return (
                  <div key={item} className="flex items-start gap-3 rounded-card border border-brand-accent/10 bg-white p-4 shadow-soft">
                    <div className="rounded-card bg-brand-surface p-2 text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-7 text-brand-accent/80">{item}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-section shadow-soft">
            <img src="/images/logistics.webp" alt="Logistics and shipment planning" className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="What trade buyers value in our approach"
            description="Export websites should feel trustworthy. These statements reinforce the standards import teams expect."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  )
}
