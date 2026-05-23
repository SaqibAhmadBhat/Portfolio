import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
  const siteUrl = "https://saqibahmadbhat.com"; // Expected domain
  const canonical = url ? `${siteUrl}${url}` : siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saqib Ahmad Bhat",
    "url": siteUrl,
    "jobTitle": "AI Systems Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "CuraBotics AI"
    },
    "alumniOf": {
       "@type": "CollegeOrUniversity",
       "name": "Government College of Engineering, Tirunelveli"
    },
    "sameAs": [
      "https://github.com/SaqibAhmadBhat",
      "https://linkedin.com/in/saqibahmadbhat"
    ]
  };

  return (
    <Helmet>
      <title>{title ? `${title} | Saqib Ahmad Bhat` : 'Saqib Ahmad Bhat | AI Engineer & Computer Vision Researcher'}</title>
      <meta name="description" content={description || "Portfolio of Saqib Ahmad Bhat, elite AI Engineer specializing in Computer Vision, Edge AI, AIoT, YOLOv8, and Biomedical AI Innovator."} />
      <meta name="keywords" content={keywords || "Saqib Ahmad Bhat, AI Engineer, Computer Vision Researcher, AIoT Developer, Biomedical AI Innovator, YOLOv8, Smart Traffic AI, Edge AI, Deep Learning"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title || "Saqib Ahmad Bhat | AI Engineer"} />
      <meta property="og:description" content={description || "Portfolio of Saqib Ahmad Bhat, elite AI Engineer."} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title || "Saqib Ahmad Bhat | AI Engineer"} />
      <meta property="twitter:description" content={description || "Portfolio of Saqib Ahmad Bhat, elite AI Engineer."} />
      
      <link rel="canonical" href={canonical} />

      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
