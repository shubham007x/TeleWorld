import { useState } from "react";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "How do you prevent account bans and ensure Telegram compliance?",
      answer:
        "TeleWorld uses advanced rate limiting algorithms that automatically space out your posts to stay within Telegram's API limits. We monitor each account individually and adjust posting schedules in real-time to prevent any violations that could lead to bans.",
    },
    {
      question: "Do you integrate with my existing marketing tools and CRM?",
      answer:
        "Yes! We integrate with popular marketing tools and CRMs including HubSpot, Salesforce, Zapier, and more. Our API also allows custom integrations with your existing workflow.",
    },
    {
      question: "How quickly can I get started and launch my first campaign?",
      answer:
        "You can be up and running in less than 5 minutes! Simply sign up, connect your Telegram accounts (which takes 30 seconds each), import or discover channels, and launch your first campaign.",
    },
    {
      question:
        "Can I cancel or change plans anytime, or is there any contract?",
      answer:
        "You can cancel or change your plan anytime with no long-term contracts. We offer flexible month-to-month billing, and you can upgrade or downgrade as your needs change.",
    },
    {
      question: "Can I manage multiple client accounts if I'm an agency?",
      answer:
        "Yes! Our Growth plan and above include a multi-client dashboard that lets you manage unlimited client campaigns from a single interface. Each client gets their own isolated workspace with separate analytics and reporting.",
    },
    {
      question: "What kind of support do you provide for enterprise customers?",
      answer:
        "Enterprise customers get priority 24/7 support, a dedicated account manager, custom onboarding, and training sessions. We also provide custom integrations and white-label solutions.",
    },
    {
      question:
        "How does channel discovery work and how many channels can I access?",
      answer:
        "Our AI-powered channel discovery system analyzes millions of Telegram channels based on your target audience, engagement rates, and relevance. You can access thousands of relevant channels for your campaigns.",
    },
    {
      question: "How accurate is your channel discovery and member data?",
      answer:
        "Our channel discovery uses real-time data from Telegram's API and our proprietary database. We maintain 95%+ accuracy on member counts and engagement metrics, updated every 24 hours.",
    },
    {
      question: "What happens if I hit rate limits or posting restrictions?",
      answer:
        "Our system automatically detects rate limits and adjusts your posting schedule to stay compliant. You'll receive notifications about any restrictions, and we'll optimize delivery to ensure your campaigns continue running smoothly.",
    },
    {
      question: "Is there a limit on team members or campaigns I can run?",
      answer:
        "Limits depend on your plan. Starter includes 3 team members and 10 campaigns, Growth includes 10 members and 50 campaigns, Pro includes 25 members and unlimited campaigns. Agency plans have no limits.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)'
           }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p className="text-sm text-gray-500 mb-4" variants={fadeInUp}>
            FAQ's
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold [text-shadow:_0_8px_20px_rgba(255,255,255,0.1),_0_12px_40px_rgba(255,255,255,0.2)]"
            variants={fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-black/60 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors"
              variants={scaleIn}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors"
                whileHover={{ backgroundColor: "rgba(17, 24, 39, 0.5)" }}
              >
                <span className="font-medium leading-relaxed text-sm sm:text-base text-white pr-2 sm:pr-4 max-w-[40ch] block">
                  {faq.question}
                </span>

                <span
                  className={`text-white text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <AddIcon className="bg-gray-800 rounded-sm" />
                </span>
              </motion.button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
