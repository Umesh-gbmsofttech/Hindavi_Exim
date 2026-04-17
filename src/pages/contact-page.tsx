import { Clock3, Mail, MapPin, PhoneCall, ShieldCheck } from "lucide-react"
import { Seo } from "@/src/components/seo"
import { InquiryForm } from "@/components/site/inquiry-form"
import { Container } from "@/components/site/container"
import { PageHero } from "@/components/site/page-hero"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/content/site"

export function ContactPage() {
  return (
    <main>
      <Seo
        title={`Contact | ${siteConfig.name}`}
        description="Contact Hindavi Exim for turmeric and tamarind import export inquiries, product requirements, packaging details, and shipment discussions."
      />
      <PageHero
        eyebrow="Contact"
        title="Send us your product requirement and destination market."
        description="Use the inquiry form to tell us what you need. We can discuss grade, packing, quantity, and export support requirements."
      />

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6 rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Contact details
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-ink">
                Let&apos;s discuss your export requirement.
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-accent/80">
                Share your destination market, required product format, and expected quantity. We
                respond with practical guidance on grade, packaging, and shipment planning.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-card border border-brand-accent/10 bg-brand-surface p-3">
                <Mail className="mt-0.5 h-4 w-4 text-brand-primary" />
                <p className="text-sm leading-7 text-brand-accent/85">
                  <span className="font-semibold text-brand-ink">Email: </span>
                  {siteConfig.email}
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-card border border-brand-accent/10 bg-brand-surface p-3">
                <PhoneCall className="mt-0.5 h-4 w-4 text-brand-primary" />
                <p className="text-sm leading-7 text-brand-accent/85">
                  <span className="font-semibold text-brand-ink">Phone: </span>
                  {siteConfig.phone}
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-card border border-brand-accent/10 bg-brand-surface p-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-primary" />
                <p className="text-sm leading-7 text-brand-accent/85">
                  <span className="font-semibold text-brand-ink">Location: </span>
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-card border border-brand-accent/10 bg-white p-3 text-sm leading-7 text-brand-accent/80">
                <p className="inline-flex items-center gap-2 font-semibold text-brand-ink">
                  <Clock3 className="h-4 w-4 text-brand-primary" />
                  Fast response
                </p>
                <p className="mt-1">Most buyer inquiries are answered within one business day.</p>
              </div>
              <div className="rounded-card border border-brand-accent/10 bg-white p-3 text-sm leading-7 text-brand-accent/80">
                <p className="inline-flex items-center gap-2 font-semibold text-brand-ink">
                  <ShieldCheck className="h-4 w-4 text-brand-primary" />
                  Trade-ready support
                </p>
                <p className="mt-1">Clear communication on specs, packaging, and documentation.</p>
              </div>
            </div>

            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <a href={siteConfig.whatsapp}>WhatsApp Now</a>
            </Button>
          </div>

          <InquiryForm />
        </Container>
      </section>
    </main>
  )
}
