import { useEffect } from "react";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://followiq.site";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const SEOHead = ({
  title = "Follow IQ - AI Sales Follow-Up Manager | Never Lose a Lead Again",
  description =
    "Follow IQ is the AI-powered sales follow-up manager that ensures every lead gets the right message at the right time. WhatsApp-first CRM with intelligent automation, lead tracking, and team collaboration. Boost your conversion rates by 40%.",
  keywords =
    "FollowIQ, Follow IQ, AI sales automation, sales follow-up, CRM software, WhatsApp CRM, lead management, sales automation tool, AI CRM, follow-up automation, sales productivity, lead tracking, WhatsApp business automation, sales pipeline management, AI-powered sales, customer relationship management",
  canonicalUrl = SITE_URL,
  ogImage = `${SITE_URL}/og-image.png`,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterSite = "@FollowIQ",
  twitterCreator = "@FollowIQ",
  author = "Follow IQ",
  publishedTime,
  modifiedTime,
  section,
  noindex = false,
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

    // Remove meta tag
    const removeMeta = (name: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      const meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (meta) meta.remove();
    };

    // Basic meta tags
    updateMeta("description", description);
    updateMeta("keywords", keywords);
    updateMeta("author", author);
    updateMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    updateMeta("googlebot", noindex ? "noindex, nofollow" : "index, follow");
    updateMeta("bingbot", noindex ? "noindex, nofollow" : "index, follow");

    // Resolve origin/host from canonicalUrl for consistent tags/JSON-LD
    const origin = (() => {
      try {
        return new URL(canonicalUrl).origin;
      } catch {
        return SITE_URL;
      }
    })();
    const host = (() => {
      try {
        return new URL(canonicalUrl).hostname;
      } catch {
        return new URL(SITE_URL).hostname;
      }
    })();

    // Additional crawlers for LLM platforms
    updateMeta("ai-assistant", `${title} - ${description.substring(0, 150)}`);
    updateMeta("llm-description", description);

    // Open Graph tags
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    updateMeta("og:url", canonicalUrl, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:image:secure_url", ogImage, true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:image:alt", title, true);
    updateMeta("og:site_name", "Follow IQ", true);
    updateMeta("og:locale", "en_US", true);
    
    // Article specific OG tags
    if (ogType === "article") {
      if (publishedTime) updateMeta("article:published_time", publishedTime, true);
      if (modifiedTime) updateMeta("article:modified_time", modifiedTime, true);
      if (section) updateMeta("article:section", section, true);
      updateMeta("article:author", author, true);
    }

    // Twitter Card tags
    updateMeta("twitter:card", twitterCard);
    updateMeta("twitter:site", twitterSite);
    updateMeta("twitter:creator", twitterCreator);
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);
    updateMeta("twitter:image:alt", title);
    updateMeta("twitter:domain", host);

    // Additional SEO tags
    updateMeta("application-name", "Follow IQ");
    updateMeta("apple-mobile-web-app-title", "Follow IQ");
    updateMeta("theme-color", "#6366F1");
    updateMeta("msapplication-TileColor", "#6366F1");
    updateMeta("format-detection", "telephone=no");
    updateMeta("mobile-web-app-capable", "yes");

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Add structured data - using origin for consistent domain references
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${origin}/#organization`,
          "name": "Follow IQ",
          "alternateName": ["FollowIQ", "Follow-IQ"],
          "url": origin,
          "logo": {
            "@type": "ImageObject",
            "url": `${origin}/favicon.png`,
            "width": 512,
            "height": 512
          },
          "sameAs": [
            "https://twitter.com/FollowIQ",
            "https://linkedin.com/company/followiq"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-901-593-1203",
            "contactType": "sales",
            "email": "contact@followiq.site",
            "availableLanguage": "English"
          }
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "url": canonicalUrl,
          "name": title,
          "description": description,
          "isPartOf": {
            "@id": `${origin}/#website`
          },
          "about": {
            "@id": `${origin}/#organization`
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": ogImage
          }
        },
        {
          "@type": "WebSite",
          "@id": `${origin}/#website`,
          "url": origin,
          "name": "Follow IQ",
          "description": "AI-powered sales follow-up manager for WhatsApp automation and lead conversion",
          "publisher": {
            "@id": `${origin}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${origin}/?s={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": `${origin}/#software`,
          "name": "Follow IQ",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "url": origin,
          "offers": {
            "@type": "Offer",
            "price": "15",
            "priceCurrency": "USD",
            "description": "Starting price per month"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "description": "Best AI-powered sales follow-up manager and WhatsApp automation tool. Ensures every lead gets the right message at the right time for maximum conversion.",
          "featureList": [
            "AI-powered follow-up suggestions",
            "WhatsApp Business integration",
            "Lead pipeline management",
            "Team collaboration tools",
            "Performance analytics dashboard",
            "Automated follow-up reminders",
            "Smart message scheduling",
            "Multi-channel communication"
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
      // Cleanup article-specific tags when unmounting
      if (ogType === "article") {
        removeMeta("article:published_time", true);
        removeMeta("article:modified_time", true);
        removeMeta("article:section", true);
        removeMeta("article:author", true);
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, twitterSite, twitterCreator, author, publishedTime, modifiedTime, section, noindex, structuredData]);

  return null;
};

// Page-specific SEO configurations with comprehensive meta data
export const pageSEO = {
  home: {
    title: "Follow IQ - AI Sales Follow-Up Manager | Never Lose a Lead Again",
    description:
      "Follow IQ is the #1 AI-powered sales follow-up manager that ensures every lead gets the right message at the right time. WhatsApp-first CRM with intelligent automation. Boost conversions by 40%. Best AI follow-up assistant for sales teams.",
    keywords:
      "FollowIQ, Follow IQ, AI sales automation, sales follow-up, CRM software, WhatsApp CRM, lead management, sales automation tool, AI CRM, follow-up automation, best follow-up AI assistant, AI sales assistant, automated follow-up tool, sales productivity software, lead conversion tool",
    canonicalUrl: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/og-image.png`,
  },
  product: {
    title: "Product Features | Follow IQ - AI Sales Automation Platform",
    description:
      "Discover Follow IQ's powerful AI-driven features: intelligent follow-ups, WhatsApp integration, lead pipeline management, team collaboration tools, and real-time analytics. The best AI assistant for sales follow-up automation.",
    keywords:
      "FollowIQ product, sales automation features, AI follow-up, WhatsApp business, lead pipeline, CRM features, sales dashboard, automation platform, AI sales assistant, best follow-up tool",
    canonicalUrl: `${SITE_URL}/product`,
    ogImage: `${SITE_URL}/og-product.png`,
  },
  features: {
    title: "Features | Follow IQ - Complete AI Sales Follow-Up Solution",
    description:
      "Explore all Follow IQ features: Smart AI suggestions, automated reminders, WhatsApp messaging, performance insights, and seamless CRM integration. The most comprehensive AI follow-up assistant available.",
    keywords:
      "FollowIQ features, AI messaging, automated reminders, WhatsApp scheduling, lead scoring, CRM integration, sales analytics, team collaboration, AI follow-up assistant, smart sales automation",
    canonicalUrl: `${SITE_URL}/features`,
    ogImage: `${SITE_URL}/og-features.png`,
  },
  pricing: {
    title: "Pricing Plans | Follow IQ - Affordable AI Sales Automation",
    description:
      "Choose the perfect Follow IQ plan for your team. Flexible pricing starting at $15/month. Scale as you grow with Professional and Enterprise plans. Best value AI follow-up automation software.",
    keywords:
      "FollowIQ pricing, sales automation cost, CRM pricing, affordable sales tool, WhatsApp CRM pricing, enterprise sales automation, AI assistant pricing, follow-up tool cost",
    canonicalUrl: `${SITE_URL}/pricing`,
    ogImage: `${SITE_URL}/og-pricing.png`,
  },
  useCases: {
    title: "Use Cases | Follow IQ - AI Sales Automation for Every Industry",
    description:
      "See how Follow IQ transforms sales for real estate, SaaS, consulting, insurance, and more. Real success stories and proven results. Best AI follow-up assistant for your industry.",
    keywords:
      "FollowIQ use cases, sales automation examples, real estate CRM, SaaS sales, consulting sales, success stories, case studies, AI assistant use cases, industry solutions",
    canonicalUrl: `${SITE_URL}/use-cases`,
    ogImage: `${SITE_URL}/og-use-cases.png`,
  },
  about: {
    title: "About Us | Follow IQ - Our Mission to Transform Sales Follow-Up",
    description:
      "Learn about Follow IQ's mission to help sales teams never lose a lead again. Meet our founding team and discover how we're revolutionizing sales follow-up with AI.",
    keywords:
      "FollowIQ about, Follow IQ team, company mission, sales automation company, startup story, founders, AI sales company",
    canonicalUrl: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/og-about.png`,
  },
  contact: {
    title: "Contact Us | Follow IQ - Get in Touch & Book a Demo",
    description:
      "Contact Follow IQ for sales inquiries, support, or partnership opportunities. Book a personalized demo and see how our AI follow-up assistant can transform your sales process.",
    keywords:
      "FollowIQ contact, book demo, sales inquiry, support, partnership, get started, schedule demo, AI assistant demo",
    canonicalUrl: `${SITE_URL}/contact`,
    ogImage: `${SITE_URL}/og-contact.png`,
  },
  login: {
    title: "Login | Follow IQ - Access Your AI Sales Dashboard",
    description:
      "Log in to your Follow IQ account to access your AI-powered sales dashboard, manage leads, and automate your follow-ups with intelligent automation.",
    keywords:
      "FollowIQ login, sign in, sales dashboard, account access, CRM login, follow-up automation login",
    canonicalUrl: `${SITE_URL}/login`,
    ogImage: `${SITE_URL}/og-image.png`,
    noindex: true,
  },
  signup: {
    title: "Sign Up | Follow IQ - Start Your Free Trial Today",
    description:
      "Create your Follow IQ account and start automating your sales follow-ups with AI. Free trial available. No credit card required. Get started in minutes.",
    keywords:
      "FollowIQ signup, create account, free trial, sales automation trial, CRM registration, start free, AI sales assistant trial",
    canonicalUrl: `${SITE_URL}/signup`,
    ogImage: `${SITE_URL}/og-image.png`,
  },
  forgotPassword: {
    title: "Reset Password | Follow IQ - Recover Your Account",
    description:
      "Reset your Follow IQ password securely. Enter your email to receive password reset instructions and regain access to your AI sales dashboard.",
    keywords: "FollowIQ password reset, forgot password, account recovery, reset instructions",
    canonicalUrl: `${SITE_URL}/forgot-password`,
    ogImage: `${SITE_URL}/og-image.png`,
    noindex: true,
  },
  privacyPolicy: {
    title: "Privacy Policy | Follow IQ - Data Protection & Security",
    description:
      "Read Follow IQ's privacy policy. Learn how we collect, use, and protect your data with enterprise-grade security measures. GDPR compliant.",
    keywords: "FollowIQ privacy, data protection, GDPR, security policy, data handling, privacy compliance",
    canonicalUrl: `${SITE_URL}/privacy-policy`,
    ogImage: `${SITE_URL}/og-image.png`,
  },
  termsOfService: {
    title: "Terms of Service | Follow IQ - Legal Terms & Conditions",
    description:
      "Review Follow IQ's terms of service. Understand our user agreement, service terms, and usage policies for the AI sales follow-up platform.",
    keywords: "FollowIQ terms, terms of service, user agreement, legal terms, usage policy, service agreement",
    canonicalUrl: `${SITE_URL}/terms-of-service`,
    ogImage: `${SITE_URL}/og-image.png`,
  },
  notFound: {
    title: "Page Not Found | Follow IQ - 404 Error",
    description:
      "The page you're looking for doesn't exist. Return to Follow IQ homepage to explore our AI-powered sales follow-up automation platform.",
    keywords: "404, page not found, FollowIQ",
    canonicalUrl: `${SITE_URL}/404`,
    ogImage: `${SITE_URL}/og-image.png`,
    noindex: true,
  },
};
