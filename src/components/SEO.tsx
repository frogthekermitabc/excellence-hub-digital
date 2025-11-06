import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords = "ISO certification, ISO training Malaysia, ISO consultant, quality management, ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 37001",
  ogImage = "/qai-og-image.jpg",
  ogType = "website",
  canonicalUrl
}: SEOProps) => {
  const fullTitle = `${title} | QAI - Guide with Passion`;
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="QAI Sdn Bhd" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};
