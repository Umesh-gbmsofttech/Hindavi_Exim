import { useState } from "react"
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
const leftBlockCapabilities = exportCapabilities.slice(0, 4)
const bottomCapabilities = exportCapabilities.slice(4)
const heroQuickFacts = [
  ["Core products", "Turmeric & tamarind"],
  ["Packaging", "Import-export ready packs"],
  ["Support", "Export documents and dispatch coordination"],
  ["Buyer fit", "Importers, wholesalers, food buyers"]
] as const

export function HomePage() {
  const [activeInfoCard, setActiveInfoCard] = useState(0)
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false })

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setGlow({ x, y, active: true })
  }

  return (
    <main>
      <Seo
        title="Turmeric & Tamarind Import Export from India | Hindavi Exim"
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
      <section
        className="relative min-h-screen overflow-hidden bg-brand-ink bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        onMouseMove={handlePointerMove}
        onMouseLeave={() => setGlow((prev) => ({ ...prev, active: false }))}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glow.active ? 0.8 : 0.35,
            background: `radial-gradient(440px circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.2), rgba(255,255,255,0.08) 30%, transparent 65%)`
          }}
        />
        <Container className="relative grid min-h-screen gap-12 py-20 pb-16 md:py-24 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {siteConfig.hero.eyebrow}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
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
                {heroQuickFacts.map(([label, value], index) => (
                  <button
                    key={label}
                    type="button"
                    onMouseEnter={() => setActiveInfoCard(index)}
                    onFocus={() => setActiveInfoCard(index)}
                    onClick={() => setActiveInfoCard(index)}
                    className={`rounded-card border p-4 text-left transition duration-200 sm:min-h-[122px] ${activeInfoCard === index
                      ? "border-white/30 bg-white/20 shadow-lg"
                      : "border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15"
                      }`}
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/55">{label}</p>
                    <p className="mt-2 text-base font-medium leading-7 text-white">{value}</p>
                  </button>
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
            <img src="/images/turmeric.png" alt="Turmeric export product" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Hindavi Exim"
              title="A turmeric and tamarind import-export partner built for serious buyers."
              description="We position our business around what importers care about most: product consistency, practical packaging, export handling, and communication that keeps shipments moving."
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                "Turmeric and tamarind sourcing",
                "Bulk import-order support",
                "Export-grade packing discussion",
                "Shipment and document coordination"
              ].map((item) => (
                <div key={item} className="rounded-card border border-brand-accent/10 bg-white p-4 text-sm font-medium text-brand-accent shadow-soft">
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block">
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
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Export Capabilities"
            title="What buyers can expect across sourcing, packing, and shipment handling."
            description="We keep capability statements specific so your sourcing team can quickly assess fit."
          />

          <div className="grid gap-4 lg:grid-cols-3 lg:auto-rows-fr">
            {leftBlockCapabilities.map((item, index) => {
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
            <div className="min-h-[240px] overflow-hidden rounded-section shadow-soft lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:min-h-full">
              <img src="/images/tamarind.png" alt="Tamarind export product" className="h-full w-full object-cover" />
            </div>

            {bottomCapabilities.map((item, index) => {
              const Icon = capabilityIcons[index + 4] ?? BadgeCheck
              return (
                <div key={item} className="flex h-full items-start gap-3 rounded-card border border-brand-accent/10 bg-white p-4 shadow-soft lg:col-span-1">
                  <div className="rounded-card bg-brand-surface p-2 text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-brand-accent/80">{item}</p>
                </div>
              )
            })}
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
