import { Seo } from "@/src/components/seo"
import { InquiryForm } from "@/components/site/inquiry-form"
import { Container } from "@/components/site/container"
import { PageHero } from "@/components/site/page-hero"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/content/site"

export function ContactPage() {
  return (
    <main>
      <Seo title={`Contact | ${siteConfig.name}`} description="Contact Hindavi Exim for turmeric and tamarind import export inquiries, product requirements, packaging details, and shipment discussions." />
      <PageHero
        eyebrow="Contact"
        title="Send us your product requirement and destination market."
        description="Use the inquiry form to tell us what you need. We can discuss grade, packing, quantity, and export support requirements."
      />

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-5 rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Contact details
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-brand-ink">Let’s discuss your export requirement.</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-brand-accent/80">
              <p><strong>Email:</strong> {siteConfig.email}</p>
              <p><strong>Phone:</strong> {siteConfig.phone}</p>
              <p><strong>Location:</strong> {siteConfig.location}</p>
            </div>
            <a href={siteConfig.whatsapp}>
              <Button asChild variant="secondary">WhatsApp Now</Button>
            </a>
          </div>
          <InquiryForm />
        </Container>
      </section>
    </main>
  )
}
