import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"
import { siteConfig } from "@/content/site"

export function CtaBand() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-section bg-brand-primary px-6 py-10 text-white shadow-soft md:px-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                Request a quotation
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Tell us the product, grade, and destination market you need.
              </h2>
              <p className="text-base leading-8 text-white/80">
                We will help you discuss specifications, packaging format,
                shipment planning, and export support requirements.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <Link to="/contact">
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get Quote
                </Button>
              </Link>
              <a href={siteConfig.whatsapp}>
                <Button asChild variant="outline" size="lg" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
