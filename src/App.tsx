import { Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { ScrollToTop } from "@/src/components/scroll-to-top"
import { HomePage } from "@/src/pages/home-page"
import { AboutPage } from "@/src/pages/about-page"
import { ProductsPage } from "@/src/pages/products-page"
import { ProductDetailPage } from "@/src/pages/product-detail-page"
import { ExportProcessPage } from "@/src/pages/export-process-page"
import { CertificationsPage } from "@/src/pages/certifications-page"
import { BlogPage } from "@/src/pages/blog-page"
import { BlogPostPage } from "@/src/pages/blog-post-page"
import { ContactPage } from "@/src/pages/contact-page"
import { LegalPage } from "@/src/pages/legal-page"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/turmeric-export-india" element={<ProductDetailPage mode="seo" productKey="turmeric" />} />
        <Route path="/tamarind-exporter-india" element={<ProductDetailPage mode="seo" productKey="tamarind" />} />
        <Route path="/export-process" element={<ExportProcessPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPage type="privacyPolicy" />} />
        <Route path="/terms-and-conditions" element={<LegalPage type="termsAndConditions" />} />
        <Route path="/shipping-policy" element={<LegalPage type="shippingPolicy" />} />
      </Routes>
      <Footer />
    </>
  )
}
