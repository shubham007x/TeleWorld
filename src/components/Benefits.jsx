import { motion } from "framer-motion";
import vertical from "../assets/Vertical.png";
import lightStar from "../assets/lightStar.png";
import verified from "../assets/verified.png";
import search from "../assets/search.png";
import workflow from "../assets/workflow.png";
import tracking from "../assets/tracking.png";
import users from "../assets/users.png";
import api from "../assets/api.png";
import { GlowingCircles } from "./GlowingCircles";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Benefits() {
  return (
    <motion.section
      id="benefits"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-gray-900 relative overflow-hidden"
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
            Benefits
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8"
            variants={fadeInUp}
          >
            Scale Telegram Marketing
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto text-center leading-relaxed"
            variants={fadeInUp}
          >
            Automate compliant campaigns, discover high-value channels, and grow
            your reach with the only platform built specifically for Telegram's
            unique advantages.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
          {/* Grid line decorations at intersections */}
          {/* Top row intersections */}
          <img
            src={vertical}
            alt=""
            className="absolute top-0 left-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute top-0 left-1/3 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute top-0 left-2/3 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute top-0 right-0 w-10 h-10 translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />

          {/* Middle row intersections */}
          <img
            src={vertical}
            alt=""
            className="absolute top-1/2 left-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />
          {/* <img src={vertical} alt="" className="absolute top-1/2 left-1/3 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block" />
          <img src={vertical} alt="" className="absolute top-1/2 left-2/3 w-10 h-10 -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block" /> */}
          <img
            src={vertical}
            alt=""
            className="absolute top-1/2 right-0 w-10 h-10 translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
          />

          {/* Bottom row intersections */}
          <img
            src={vertical}
            alt=""
            className="absolute bottom-0 left-0 w-10 h-10 -translate-x-1/2 translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute bottom-0 left-1/3 w-10 h-10 -translate-x-1/2 translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute bottom-0 left-2/3 w-10 h-10 -translate-x-1/2 translate-y-1/2 opacity-50 hidden md:block"
          />
          <img
            src={vertical}
            alt=""
            className="absolute bottom-0 right-0 w-10 h-10 translate-x-1/2 translate-y-1/2 opacity-50 hidden md:block"
          />

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent hidden md:block"></div>
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent hidden md:block"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent hidden md:block"></div>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent hidden md:block"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent hidden md:block"></div>
          {[
            {
              icon: verified,
              title: "Compliance Protection",
              description:
                "Built-in safeguards prevent account bans and platform violations.",
            },
            {
              icon: search,
              title: "Channel Intelligence",
              description:
                "Discover high-value audiences with advanced targeting filters.",
            },
            {
              icon: workflow,
              title: "Automated Workflows",
              description:
                "Schedule campaigns with admin approval and rate limiting.",
            },
            {
              icon: tracking,
              title: "Performance Tracking",
              description:
                "Monitor engagement, reach, and ROI across all campaigns.",
            },
            {
              icon: users,
              title: "Multi-Account Management",
              description:
                "Handle multiple Telegram accounts from one secure dashboard.",
            },
            {
              icon: api,
              title: "API Integration",
              description:
                "Connect seamlessly with existing marketing and CRM tools.",
            },
          ].map((benefit, i) => {
            return (
              <motion.div
                key={i}
                className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-center relative z-10 overflow-hidden"
                variants={scaleIn}
              >
                {/* Top Light Beam Effect - Single thick beam */}
                <div className="absolute top-0 left-1/2 rounded-xl w-2 border-white border-1"></div>

                {/* Radial Gradient Spotlight */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-12 sm:h-80 md:h-36 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center top, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 0.05) 2%, transparent 50%)",
                  }}
                ></div>

                <div
                  className="mb-4 sm:mb-6 flex justify-center"
                  style={{
                    backgroundImage: `url(${lightStar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {[
            { value: "12M+", label: "Posts" },
            { value: "12 000", label: "Users" },
            { value: "160k+", label: "Channels" },
          ].map((stat, i) => (
            <motion.div key={i} className="text-center" variants={scaleIn}>
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 justify-center">
                <span>{stat.value}</span>
                <p className="text-xs sm:text-sm">{stat.label}</p>
              </div>
              {/* <div className="text-sm text-gray-400"></div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Benefits;
