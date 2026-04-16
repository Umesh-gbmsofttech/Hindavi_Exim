import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function ProductCard({
  title,
  href,
  description,
  image
}: {
  title: string
  href: string
  description: string
  image: string
}) {
  return (
    <article className="group overflow-hidden rounded-section border border-brand-accent/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-64 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex min-h-[240px] flex-col space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-brand-ink">{title}</h3>
        <p className="text-sm leading-7 text-brand-accent/80">{description}</p>
        <Link to={href} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
          Explore product <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
