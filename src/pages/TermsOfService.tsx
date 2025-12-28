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
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Follow IQ's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
      "We reserve the right to modify these terms at any time. Your continued use of the platform after any modifications indicates your acceptance of the new terms."
    ]
  },
  {
    title: "Description of Service",
    content: [
      "Follow IQ provides an AI-powered lead management and follow-up automation platform designed to help sales teams manage their customer relationships more effectively.",
      "Our services include lead tracking, automated follow-up scheduling, WhatsApp integration, team collaboration tools, and performance analytics.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
    ]
  },
  {
    title: "User Accounts",
    content: [
      "To access certain features of our platform, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate.",
      "You are solely responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
    ]
  },
  {
    title: "Acceptable Use",
    content: [
      "You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our platform to violate any applicable local, state, national, or international law.",
      "You may not use our services to transmit any material that is defamatory, offensive, or otherwise objectionable, or to impersonate any person or entity.",
      "You agree not to attempt to gain unauthorized access to any portion of our platform, other accounts, computer systems, or networks connected to our servers."
    ]
  },
  {
    title: "Intellectual Property",
    content: [
      "The Follow IQ platform, including all content, features, and functionality, is owned by Follow IQ and is protected by international copyright, trademark, and other intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any portion of our platform without our prior written consent.",
      "Any feedback, comments, or suggestions you may provide regarding Follow IQ are entirely voluntary, and we will be free to use such feedback without any obligation to you."
    ]
  },
  {
    title: "Payment and Billing",
    content: [
      "Certain features of our platform require payment of fees. You agree to pay all fees associated with your selected subscription plan.",
      "All payments are non-refundable except as expressly set forth in these Terms or as required by applicable law.",
      "We reserve the right to change our pricing at any time. Any price changes will be communicated to you in advance and will apply to the next billing cycle."
    ]
  },
  {
    title: "Data and Privacy",
    content: [
      "Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      "You retain ownership of all data you submit to our platform. You grant us a limited license to use this data solely to provide and improve our services.",
      "We implement industry-standard security measures to protect your data, but we cannot guarantee absolute security of information transmitted over the internet."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Follow IQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
      "Our total liability for any claims arising from your use of the platform shall not exceed the amount you paid to us in the twelve months preceding the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so these limitations may not apply to you."
    ]
  },
  {
    title: "Indemnification",
    content: [
      "You agree to indemnify, defend, and hold harmless Follow IQ and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of our services.",
      "This includes any claims arising from your violation of these Terms, your violation of any third-party rights, or any content you submit to our platform."
    ]
  },
  {
    title: "Termination",
    content: [
      "We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms.",
      "Upon termination, your right to use our services will immediately cease. All provisions of these Terms that should survive termination shall survive.",
      "You may terminate your account at any time through your account settings. Upon termination, your data will be handled in accordance with our Privacy Policy."
    ]
  },
  {
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Follow IQ is incorporated, without regard to its conflict of law provisions.",
      "Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.",
      "You agree to waive any right to a jury trial or to participate in a class action lawsuit against Follow IQ."
    ]
  },
  {
    title: "Contact Information",
    content: [
      "If you have any questions about these Terms of Service, please contact us at legal@followiq.com.",
      "You can also reach us by mail at our registered office address. We aim to respond to all inquiries within 48 business hours."
    ]
  }
];

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 28, 2025
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-foreground/90 text-lg leading-relaxed">
                Welcome to Follow IQ. These Terms of Service govern your access to and use of our platform 
                and services. By using Follow IQ, you agree to be bound by these terms. Please read them 
                carefully before using our services.
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

export default TermsOfService;
