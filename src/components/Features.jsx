import { motion } from "framer-motion";
import world from "../assets/world.png";
// Import your feature mockup images here
import channelDiscovery from "../assets/i1.png";
import manageAccounts from "../assets/i2.png";
import postScheduling from "../assets/i3.png";
import manageRatelimits from "../assets/i4.png";
import { Verified, Search, Group, BarChart } from "@mui/icons-material";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Features() {
  const features = [
    {
      title: "Automatic Channel Import System",
      description:
        "Discovers and imports relevant Telegram channels based on target audience and engagement criteria.",
      mockupImage: channelDiscovery, // Replace with channelDiscovery when image is available
      mockupLabel: "Channel Discovery",
    },
    {
      title: "Instant Account Imports",
      description:
        "Connect your Telegram accounts in seconds with secure API integration and automated verification.",
      mockupImage: manageAccounts, // Replace with manageAccounts when image is available
      mockupLabel: "Manage Accounts",
    },
    {
      title: "Smart Post Scheduling",
      description:
        "Schedule campaigns across multiple channels with optimal timing and automatic admin approval.",
      mockupImage: postScheduling, // Replace with postScheduling when image is available
      mockupLabel: "Post Scheduling",
    },
    {
      title: "Advanced Ratelimit Handling",
      description:
        "Prevents account bans by intelligently managing posting frequency within Telegram's API limits.",
      mockupImage: manageRatelimits, // Replace with manageRatelimits when image is available
      mockupLabel: "Manage Ratelimits",
    },
  ];

  const bottomFeatures = [
    {
      icon: Search,
      title: "Channel Discovery",
      description: "Discover relevant Telegram channels automatically",
    },
    {
      icon: Verified,
      title: "Campaign Compliance",
      description: "Anti-spam protection and permission tracking built-in",
    },
    {
      icon: Group,
      title: "Multi-Client Dashboard",
      description: "Manage all client campaigns from one dashboard",
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Track engagement and ROI across all campaigns",
    },
  ];

  return (
    <motion.section
      className="relative py-0 sm:py-2 md:py-2 lg:py-2 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
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

      {/* Feature Cards Grid */}
      <div className="relative max-w-5xl p-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16  ">
        <div className="absolute left-0 right-0 top-0 h-px bg-[#17191B] hidden md:block"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#17191B] hidden md:block"></div>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#17191B] hidden md:block"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-[#17191B] hidden md:block"></div>
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="relative bg-black  rounded-3xl p-8 sm:p-10 overflow-hidden"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
          >
            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                {feature.description}
              </p>

              {/* Mockup Image */}
              <div className="relative">
                {feature.mockupImage ? (
                  <img
                    src={feature.mockupImage}
                    alt={feature.mockupLabel}
                    className="w-full rounded-2xl"
                  />
                ) : (
                  <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8 min-h-[280px] flex flex-col items-center justify-center">
                    <div className="text-gray-600 text-sm font-medium mb-2">
                      {feature.mockupLabel}
                    </div>
                    <div className="text-gray-700 text-xs">
                      Mockup image placeholder
                    </div>
                  </div>
                )}
              </div>
            </div>

            {}
          </motion.div>
        ))}
      </div>
      {/* Bottom Feature Icons */}
      <div className=" max-w-6xl  mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center pt-16">
        {bottomFeatures.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={i} className="p-4" variants={fadeInUp}>
              <div className="flex gap-2 text-3xl sm:text-4xl mb-3">
                <Icon />
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 text-left">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default Features;
