export const siteConfig = {
  name: "Hindavi Export",
  legalName: "Hindavi Export",
  description:
    "Hindavi Export supplies turmeric and tamarind from India with dependable quality control, export-grade packaging, and documentation support for global buyers.",
  url: "https://hindavi.in",
  email: "exports@hindavi.in",
  whatsapp: "https://wa.me/919999999999?text=Hello%20Hindavi%20Export%2C%20I%20need%20a%20quote%20for%20turmeric%20or%20tamarind.",
  location: "India",
  phone: "+91 99999 99999",
  hero: {
    eyebrow: "Turmeric & Tamarind Exporter from India",
    title: "Reliable turmeric and tamarind exports for importers, distributors, and private-label buyers.",
    description:
      "We help global buyers source clean, traceable spice products with practical packaging options, consistent quality parameters, and export documentation support."
  }
} as const

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Export Process", href: "/export-process" },
  { name: "Certifications", href: "/certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
] as const

export const trustBadges = [
  "Export-ready packaging",
  "Batch-wise quality checks",
  "Timely documentation support",
  "Responsive buyer communication"
]

export const productData = {
  turmeric: {
    slug: "turmeric",
    seoSlug: "turmeric-export-india",
    name: "Turmeric",
    shortDescription:
      "Indian turmeric offered for global food, spice, and ingredient buyers who need consistent curcumin levels and clean presentation.",
    heroImage: "/images/turmeric-fingers.webp",
    intro:
      "Our turmeric portfolio is built for export buyers who need dependable quality, commercial consistency, and flexible packaging for wholesale or private-label programs.",
    types: [
      "Turmeric fingers",
      "Turmeric powder",
      "High-curcumin turmeric lots",
      "Custom private-label turmeric packs"
    ],
    specifications: [
      ["Color", "Golden yellow to deep orange"],
      ["Curcumin", "2% to 5%+ based on grade"],
      ["Moisture", "Typically below 12%"],
      ["Purity", "Machine-cleaned and export sorted"],
      ["Application", "Retail, foodservice, bulk industrial use"]
    ],
    packaging: [
      "25 kg and 50 kg PP bags",
      "Food-grade inner lining options",
      "Retail-ready printed pouches",
      "Private-label cartons on request"
    ],
    standards: [
      "Batch quality check before dispatch",
      "Moisture and visual quality validation",
      "Label and packaging compliance support",
      "Export documentation assistance"
    ]
  },
  tamarind: {
    slug: "tamarind",
    seoSlug: "tamarind-exporter-india",
    name: "Tamarind",
    shortDescription:
      "Seedless, deseeded, and pulp-format tamarind products for importers seeking reliable acidity, texture, and hygienic packing.",
    heroImage: "/images/tamarind-pulp.webp",
    intro:
      "We supply tamarind in formats suited to food manufacturers, spice buyers, and ethnic retail channels, with close attention to hygiene, packing integrity, and commercial usability.",
    types: [
      "Seedless tamarind",
      "Deseeded tamarind block",
      "Tamarind pulp",
      "Concentrated tamarind formats"
    ],
    specifications: [
      ["Color", "Natural brown to dark brown"],
      ["Moisture", "Controlled as per buyer requirement"],
      ["Texture", "Soft, fibrous, or paste based on format"],
      ["Taste", "Balanced sourness with natural pulp body"],
      ["Application", "Sauces, food processing, horeca, retail"]
    ],
    packaging: [
      "Vacuum-packed export blocks",
      "Foodservice bulk packs",
      "Carton-packed tamarind bricks",
      "Custom retail pouch formats"
    ],
    standards: [
      "Hygienic handling and sealing",
      "Packing built for transit durability",
      "Batch traceability support",
      "Export paperwork guidance"
    ]
  }
} as const

export const whyChooseUs = [
  {
    title: "Quality discipline",
    description:
      "We focus on product consistency, moisture control awareness, and cleaner batch presentation before shipment."
  },
  {
    title: "Buyer-first packaging",
    description:
      "Bulk and retail formats can be aligned to your distribution channel, private-label plan, and shipping needs."
  },
  {
    title: "Export support",
    description:
      "From quotation to dispatch documentation, we keep the process organized for overseas buyers and sourcing teams."
  },
  {
    title: "Commercial reliability",
    description:
      "Our website and workflow are designed to make trust easier: clear communication, direct information, and practical execution."
  }
]

export const exportCapabilities = [
  "Bulk turmeric and tamarind supply",
  "Custom packing configurations",
  "Container and pallet loading coordination",
  "Documentation support for export shipments",
  "Private-label and importer-ready supply programs",
  "Responsive follow-up for repeat orders"
]

export const testimonials = [
  {
    quote:
      "Hindavi Export presented product details clearly and kept communication structured, which made our initial sourcing cycle smoother.",
    name: "Procurement Manager",
    company: "Middle East Food Importer"
  },
  {
    quote:
      "The packaging discussion and export support were straightforward. That kind of clarity matters when evaluating new suppliers.",
    name: "Category Buyer",
    company: "European Ethnic Retail Group"
  },
  {
    quote:
      "They understand what importers need to see: specifications, packing options, and confidence around shipment handling.",
    name: "Director",
    company: "Asia-Pacific Ingredients Distributor"
  }
]

export const certifications = [
  {
    name: "FSSAI",
    description:
      "Food safety registration and handling alignment for products intended for regulated food supply chains."
  },
  {
    name: "APEDA",
    description:
      "Export ecosystem alignment for agri-product trade and India-origin shipment readiness."
  },
  {
    name: "ISO",
    description:
      "Process discipline and operational consistency expected by international trade buyers."
  },
  {
    name: "Organic Support",
    description:
      "Organic-aligned discussions can be supported when specific buyer programs require it."
  }
]

export const exportProcess = [
  {
    title: "Sourcing",
    description:
      "Raw material and finished product lots are coordinated based on grade, buyer requirement, and packaging plan."
  },
  {
    title: "Quality Check",
    description:
      "Visual, moisture, and packing-readiness checks help ensure export lots meet agreed commercial expectations."
  },
  {
    title: "Packaging",
    description:
      "Products are prepared in bulk, foodservice, or retail-ready formats with transit suitability in mind."
  },
  {
    title: "Logistics",
    description:
      "Shipment planning is aligned with loading, routing, and buyer delivery requirements."
  },
  {
    title: "Documentation",
    description:
      "Core export documents and shipment paperwork are prepared to keep the process organized and auditable."
  }
]

export const blogPosts = [
  {
    slug: "turmeric-export-from-india",
    title: "Turmeric Export from India: What Global Buyers Should Evaluate Before Ordering",
    excerpt:
      "A practical guide to curcumin, moisture, grading, packaging, and exporter communication when sourcing turmeric from India.",
    category: "Turmeric",
    date: "2026-04-16",
    heroImage: "/images/turmeric-fingers.webp",
    content: [
      "India remains one of the most important turmeric sourcing origins for global buyers, but commercial success depends on more than origin alone. Importers need clear visibility into grade, curcumin expectations, appearance, moisture, and packaging before committing to supply.",
      "When evaluating turmeric for export, start with intended use. Retail, horeca, and industrial buyers often need different particle size, color profile, and packing formats. Clear exporter communication around these points reduces disputes later.",
      "Curcumin percentage is commercially important, but consistency across lots matters just as much. Reliable suppliers should be able to discuss cleaning, sorting, and how they maintain stable shipment quality.",
      "Packaging should match the destination channel. Bulk importers may prefer larger lined bags, while private-label buyers need retail presentation, traceable labels, and carton planning. Export readiness is not only about product quality but also about how professionally the shipment is presented."
    ]
  },
  {
    slug: "tamarind-export-quality-standards",
    title: "Tamarind Export Quality Standards: Texture, Hygiene, and Packing Expectations",
    excerpt:
      "Understand the quality signals importers look for when buying tamarind pulp, seedless tamarind, and block formats from India.",
    category: "Tamarind",
    date: "2026-04-16",
    heroImage: "/images/tamarind-pulp.webp",
    content: [
      "Tamarind is evaluated by international buyers for texture, hygiene, acidity profile, and packing integrity. Even small differences in handling can affect how the product performs in retail or food manufacturing environments.",
      "One of the first discussions should be product format. Seedless tamarind, pulp, and compressed blocks each serve different use cases. Importers should confirm whether fiber, seeds, and pack weight tolerance match their operational needs.",
      "Hygienic packing is especially important because tamarind is often shipped over long distances. Vacuum packing, durable secondary cartons, and appropriate sealing help protect the product during storage and distribution.",
      "A credible exporter should also help clarify documentation, labeling expectations, and any market-specific requirements. This creates a cleaner buying process and improves confidence for repeat orders."
    ]
  },
  {
    slug: "spice-export-documentation-guide",
    title: "Spice Export Documentation Guide for Turmeric and Tamarind Shipments",
    excerpt:
      "Documentation is one of the biggest trust signals in B2B export. This guide explains the paperwork flow buyers should expect.",
    category: "Documentation",
    date: "2026-04-16",
    heroImage: "/images/logistics.webp",
    content: [
      "In export trade, documentation quality often influences buyer confidence as much as the goods themselves. Clear paperwork reduces delays, supports customs processing, and makes supplier relationships easier to scale.",
      "For turmeric and tamarind shipments, buyers usually expect clarity around invoice details, packing list information, shipping coordination, and any relevant compliance references attached to the shipment.",
      "Exporters who prepare documentation carefully are easier to work with because they reduce uncertainty. That matters when a buyer is handling multiple SKUs, private-label programs, or time-sensitive dispatch windows.",
      "The most reliable exporters treat documentation as part of the product experience. When paperwork, packing, and communication all match, the transaction feels more professional and far easier to repeat."
    ]
  }
] as const

export const legalContent = {
  privacyPolicy: {
    title: "Privacy Policy",
    body: [
      "Hindavi Export collects contact and inquiry information submitted through the website only for business communication, quotation support, and export discussions.",
      "We do not sell inquiry data. Information may be stored securely to help us respond to buyers, maintain trade records, and follow up on product requirements.",
      "If you want us to remove previously shared information, contact us at exports@hindavi.in."
    ]
  },
  termsAndConditions: {
    title: "Terms and Conditions",
    body: [
      "All product information on this website is provided for general commercial guidance. Final grades, packing, pricing, and shipment terms are confirmed during quotation and order discussions.",
      "Product availability, export schedules, and documentation requirements may vary by market and shipment plan.",
      "By using this website, you agree not to misuse the inquiry form or represent yourself inaccurately during trade communication."
    ]
  },
  shippingPolicy: {
    title: "Shipping Policy",
    body: [
      "Shipment schedules depend on order quantity, product format, packaging, and destination market requirements.",
      "Dispatch timelines are confirmed during order finalization. Export documentation and logistics planning are aligned to the agreed commercial terms.",
      "For detailed lead-time estimates, buyers should contact Hindavi Export directly with product and destination details."
    ]
  }
} as const
