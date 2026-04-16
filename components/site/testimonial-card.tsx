export function TestimonialCard({
  quote,
  name,
  company
}: {
  quote: string
  name: string
  company: string
}) {
  return (
    <article className="rounded-section border border-brand-accent/10 bg-white p-6 shadow-soft">
      <p className="text-base leading-8 text-brand-accent/80">“{quote}”</p>
      <div className="mt-5">
        <p className="font-semibold text-brand-ink">{name}</p>
        <p className="text-sm text-brand-accent/70">{company}</p>
      </div>
    </article>
  )
}
