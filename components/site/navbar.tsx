"use client"

import { Link, NavLink } from "react-router-dom"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navigation, siteConfig } from "@/content/site"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/site/container"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-accent/10 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-card border border-brand-accent/10 bg-brand-surface">
            <img src="/images/logo.png" alt="Hindavi Export logo" className="h-full w-full object-contain p-1.5" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-secondary">
              Hindavi
            </p>
            <p className="text-base font-semibold text-brand-ink">{siteConfig.legalName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-brand-primary ${
                  isActive ? "text-brand-primary" : "text-brand-accent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button asChild variant="secondary">Get Quote</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-card border border-brand-accent/15 text-brand-primary lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      <Dialog open={open} onClose={setOpen} className="relative z-[60] lg:hidden">
        <div className="fixed inset-0 bg-brand-ink/35" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 flex w-full max-w-xs">
          <DialogPanel className="ml-auto flex h-full w-full flex-col bg-white p-6 shadow-soft">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-lg font-semibold text-brand-ink">Menu</p>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-card border border-brand-accent/15 text-brand-primary"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block rounded-card px-3 py-3 text-base font-medium text-brand-accent hover:bg-brand-surface hover:text-brand-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button asChild variant="secondary" className="w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}
