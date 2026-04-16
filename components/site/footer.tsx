import { Link } from "react-router-dom"
import { Container } from "@/components/site/container"
import { navigation, siteConfig } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-brand-accent/10 bg-brand-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            Hindavi Export
          </p>
          <h3 className="max-w-md text-2xl font-semibold">
            Export-grade turmeric and tamarind supply from India.
          </h3>
          <p className="max-w-xl text-sm leading-7 text-white/72">{siteConfig.description}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            Contact
          </h4>
          <div className="space-y-3 text-sm leading-7 text-white/80">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.location}</p>
            <a href={siteConfig.whatsapp} className="inline-block text-brand-secondary hover:text-white">
              WhatsApp us
            </a>
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-5 text-sm text-white/55">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Hindavi Export. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
