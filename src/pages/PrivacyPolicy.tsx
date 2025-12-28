import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
      "This includes your name, email address, phone number, company information, and any other information you choose to provide.",
      "We automatically collect certain information when you use our platform, including your IP address, browser type, operating system, and usage patterns."
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our services, including to process transactions and send you related information.",
      "We use your information to communicate with you about products, services, and events offered by Follow IQ, and to provide customer support.",
      "We may use your information to personalize your experience and to monitor and analyze trends, usage, and activities in connection with our services."
    ]
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
      "We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you.",
      "We may also release your information when we believe release is appropriate to comply with the law, enforce our policies, or protect our or others' rights, property, or safety."
    ]
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmission between your device and our servers is encrypted using industry-standard SSL/TLS protocols.",
      "We regularly review and update our security practices to ensure the ongoing confidentiality and integrity of your data."
    ]
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information at any time through your account settings or by contacting us.",
      "You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.",
      "Depending on your location, you may have additional rights under applicable data protection laws, including the right to data portability."
    ]
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar tracking technologies to collect and store information about your preferences and activity on our platform.",
      "You can control cookies through your browser settings, though disabling cookies may limit your ability to use certain features of our services.",
      "We may also use analytics services provided by third parties to help us understand how users engage with our platform."
    ]
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal information for as long as your account is active or as needed to provide you services.",
      "We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
      "When you delete your account, we will delete or anonymize your personal information within 30 days, except where retention is required by law."
    ]
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      "We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      "Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, please contact us at privacy@followiq.com.",
      "You can also reach us by mail at our registered office address. We aim to respond to all inquiries within 48 business hours."
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border/50 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            {/* Title */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 28, 2025
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-foreground/90 text-lg leading-relaxed">
                At Follow IQ, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our platform. Please read this 
                policy carefully to understand our practices regarding your personal data.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.section
                  key={section.title}
                  variants={fadeInUp}
                  className="pb-10 border-b border-border/30 last:border-0"
                >
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
