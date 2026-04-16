import { ShieldCheck, PackageCheck, FileCheck2, Truck } from "lucide-react"

const items = [
  { label: "Quality checked batches", icon: ShieldCheck },
  { label: "Export-grade packaging", icon: PackageCheck },
  { label: "Documentation support", icon: FileCheck2 },
  { label: "Reliable shipment planning", icon: Truck }
]

export function TrustStrip() {
  return (
    <div className="grid gap-4 rounded-section border border-brand-accent/10 bg-white p-5 shadow-soft md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex min-h-[84px] items-start gap-3 rounded-card border border-brand-accent/8 bg-brand-surface/40 p-4">
            <div className="rounded-card bg-brand-surface p-2.5 text-brand-primary">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium leading-6 text-brand-accent">{item.label}</p>
          </div>
        )
      })}
    </div>
  )
}
