import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../data/companyData';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
  schema
}) {
  const fullTitle = title 
    ? `${title} | ${COMPANY.name} (Sharmila Painting)` 
    : `${COMPANY.name} | Painting & Scaffolding Specialists Swindon & Wiltshire`;

  const defaultDesc = `Professional painting, decorating and scaffolding services in Swindon, Wiltshire, Oxfordshire and Gloucestershire. Fully insured [Insert details if applicable]. Co. No. ${COMPANY.companyNumber}.`;
  const metaDescription = description || defaultDesc;
  const canonicalUrl = canonical || COMPANY.websiteUrl;

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={COMPANY.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Optional Page-Specific Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
