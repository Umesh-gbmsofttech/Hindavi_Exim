import { Link } from "react-router-dom"
import { Seo } from "@/src/components/seo"
import { blogPosts, siteConfig } from "@/content/site"
import { PageHero } from "@/components/site/page-hero"
import { Container } from "@/components/site/container"

export function BlogPage() {
  return (
    <main>
      <Seo title={`Blog | ${siteConfig.name}`} description="Export-focused articles about turmeric, tamarind, and documentation best practices for global buyers." />
      <PageHero
        eyebrow="Blog"
        title="SEO-friendly export insights for turmeric and tamarind buyers."
        description="Our blog content is written to support search visibility while giving buyers practical information they can actually use."
      />

      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-section border border-brand-accent/10 bg-white shadow-soft">
              <div className="h-56 overflow-hidden">
                <img src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                  {post.category}
                </p>
                <h2 className="text-2xl font-semibold text-brand-ink">{post.title}</h2>
                <p className="text-sm leading-7 text-brand-accent/80">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-primary">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </main>
  )
}
