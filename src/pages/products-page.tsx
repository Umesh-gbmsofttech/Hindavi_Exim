import { Seo } from "@/src/components/seo"
import { PageHero } from "@/components/site/page-hero"
import { Container } from "@/components/site/container"
import { ProductCard } from "@/components/site/product-card"
import { productData, siteConfig } from "@/content/site"

export function ProductsPage() {
  return (
    <main>
      <Seo title={`Products | ${siteConfig.name}`} description="Explore Hindavi Exim turmeric and tamarind products, including specifications, packaging options, and export standards." />
      <PageHero
        eyebrow="Products"
        title="Turmeric and tamarind products prepared for global trade."
        description="Our product section gives importers and distributors a quick view of formats, packaging suitability, and quality expectations."
      />

      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          <ProductCard
            title={productData.turmeric.name}
            href={`/${productData.turmeric.seoSlug}`}
            description={productData.turmeric.shortDescription}
            image={productData.turmeric.heroImage}
          />
          <ProductCard
            title={productData.tamarind.name}
            href={`/${productData.tamarind.seoSlug}`}
            description={productData.tamarind.shortDescription}
            image={productData.tamarind.heroImage}
          />
        </Container>
      </section>
    </main>
  )
}
