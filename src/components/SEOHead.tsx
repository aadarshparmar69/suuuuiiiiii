import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "Follow IQ - AI Sales Follow-Up Manager | Never Lose a Lead Again",
  description = "Follow IQ is the AI-powered sales follow-up manager that ensures every lead gets the right message at the right time. WhatsApp-first CRM with intelligent automation, lead tracking, and team collaboration. Boost your conversion rates by 40%.",
  keywords = "FollowIQ, Follow IQ, AI sales automation, sales follow-up, CRM software, WhatsApp CRM, lead management, sales automation tool, AI CRM, follow-up automation, sales productivity, lead tracking, WhatsApp business automation, sales pipeline management, AI-powered sales, customer relationship management",
  canonicalUrl = "https://followiq.com",
  ogImage = "https://followiq.com/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("author", "Follow IQ");
    updateMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMeta("googlebot", "index, follow");
    updateMeta("bingbot", "index, follow");

    // Open Graph tags
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:url", canonicalUrl, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:site_name", "Follow IQ", true);
    updateMeta("og:locale", "en_US", true);

    // Twitter Card tags
    updateMeta("twitter:card", twitterCard);
    updateMeta("twitter:site", "@FollowIQ");
    updateMeta("twitter:creator", "@FollowIQ");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);

    // Additional SEO tags
    updateMeta("application-name", "Follow IQ");
    updateMeta("apple-mobile-web-app-title", "Follow IQ");
    updateMeta("theme-color", "#6366F1");
    updateMeta("msapplication-TileColor", "#6366F1");

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Add structured data
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://followiq.com/#organization",
          "name": "Follow IQ",
          "url": "https://followiq.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://followiq.com/favicon.png",
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/FollowIQ",
            "https://linkedin.com/company/followiq"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-FOLLOW-IQ",
            "contactType": "sales",
            "availableLanguage": "English"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://followiq.com/#website",
          "url": "https://followiq.com",
          "name": "Follow IQ",
          "description": "AI-powered sales follow-up manager",
          "publisher": {
            "@id": "https://followiq.com/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://followiq.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Follow IQ",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free trial available"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "description": "AI-powered sales follow-up manager that ensures every lead gets the right message at the right time.",
          "featureList": [
            "AI-powered follow-up suggestions",
            "WhatsApp integration",
            "Lead pipeline management",
            "Team collaboration",
            "Performance analytics",
            "Automated reminders"
          ]
        }
      ]
    };

    const dataToUse = structuredData || defaultStructuredData;
    
    let script = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(dataToUse);

    return () => {
      // Cleanup is optional since we're updating existing tags
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData]);

  return null;
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Follow IQ - AI Sales Follow-Up Manager | Never Lose a Lead Again",
    description: "Follow IQ is the AI-powered sales follow-up manager that ensures every lead gets the right message at the right time. WhatsApp-first CRM with intelligent automation. Boost conversions by 40%.",
    keywords: "FollowIQ, Follow IQ, AI sales automation, sales follow-up, CRM software, WhatsApp CRM, lead management, sales automation tool, AI CRM, follow-up automation",
    canonicalUrl: "https://followiq.com",
  },
  product: {
    title: "Product Features | Follow IQ - AI Sales Automation Platform",
    description: "Discover Follow IQ's powerful features: AI-powered follow-ups, WhatsApp integration, lead pipeline management, team collaboration tools, and real-time analytics.",
    keywords: "FollowIQ product, sales automation features, AI follow-up, WhatsApp business, lead pipeline, CRM features, sales dashboard, automation platform",
    canonicalUrl: "https://followiq.com/product",
  },
  features: {
    title: "Features | Follow IQ - Complete Sales Follow-Up Solution",
    description: "Explore all Follow IQ features: Smart AI suggestions, automated reminders, WhatsApp messaging, performance insights, and seamless CRM integration.",
    keywords: "FollowIQ features, AI messaging, automated reminders, WhatsApp scheduling, lead scoring, CRM integration, sales analytics, team collaboration",
    canonicalUrl: "https://followiq.com/features",
  },
  pricing: {
    title: "Pricing Plans | Follow IQ - Affordable Sales Automation",
    description: "Choose the perfect Follow IQ plan for your team. Flexible pricing starting at $15/month. Scale as you grow with our Professional and Enterprise plans.",
    keywords: "FollowIQ pricing, sales automation cost, CRM pricing, affordable sales tool, WhatsApp CRM pricing, enterprise sales automation",
    canonicalUrl: "https://followiq.com/pricing",
  },
  useCases: {
    title: "Use Cases | Follow IQ - Sales Automation for Every Industry",
    description: "See how Follow IQ transforms sales for real estate, SaaS, consulting, and more. Real success stories and proven results from businesses like yours.",
    keywords: "FollowIQ use cases, sales automation examples, real estate CRM, SaaS sales, consulting sales, success stories, case studies",
    canonicalUrl: "https://followiq.com/use-cases",
  },
  about: {
    title: "About Us | Follow IQ - Our Mission to Transform Sales",
    description: "Learn about Follow IQ's mission to help sales teams never lose a lead again. Meet our founding team and discover how we're revolutionizing sales follow-up.",
    keywords: "FollowIQ about, Follow IQ team, company mission, sales automation company, startup story, founders",
    canonicalUrl: "https://followiq.com/about",
  },
  contact: {
    title: "Contact Us | Follow IQ - Get in Touch & Book a Demo",
    description: "Contact Follow IQ for sales inquiries, support, or partnership opportunities. Book a personalized demo and see how we can transform your sales process.",
    keywords: "FollowIQ contact, book demo, sales inquiry, support, partnership, get started",
    canonicalUrl: "https://followiq.com/contact",
  },
  privacyPolicy: {
    title: "Privacy Policy | Follow IQ - Data Protection & Security",
    description: "Read Follow IQ's privacy policy. Learn how we collect, use, and protect your data with enterprise-grade security measures.",
    keywords: "FollowIQ privacy, data protection, GDPR, security policy, data handling",
    canonicalUrl: "https://followiq.com/privacy-policy",
  },
  termsOfService: {
    title: "Terms of Service | Follow IQ - Legal Terms & Conditions",
    description: "Review Follow IQ's terms of service. Understand our user agreement, service terms, and usage policies.",
    keywords: "FollowIQ terms, terms of service, user agreement, legal terms, usage policy",
    canonicalUrl: "https://followiq.com/terms-of-service",
  },
};
