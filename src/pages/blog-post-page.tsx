import { useParams } from "react-router-dom"
import { Seo } from "@/src/components/seo"
import { blogPosts, siteConfig } from "@/content/site"
import { Container } from "@/components/site/container"
import { JsonLd } from "@/components/site/json-ld"

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="py-24">
        <Container>
          <p className="text-lg text-brand-accent">Article not found.</p>
        </Container>
      </main>
    )
  }

  return (
    <main>
      <Seo title={`${post.title} | ${siteConfig.name}`} description={post.excerpt} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: `${siteConfig.url}${post.heroImage}`,
          datePublished: post.date,
          author: { "@type": "Organization", name: siteConfig.name }
        }}
      />
      <section className="py-16 md:py-20">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {post.category}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-brand-ink md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-brand-accent/80">{post.excerpt}</p>
          <div className="mt-8 min-h-[320px] overflow-hidden rounded-section shadow-soft md:min-h-[460px]">
            <img src={post.heroImage} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-4xl">
          <article className="rounded-section border border-brand-accent/10 bg-white p-8 shadow-soft">
            <div className="space-y-6 text-base leading-8 text-brand-accent/80">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </main>
  )
}
