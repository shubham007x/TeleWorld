import { motion } from "framer-motion";
import campaign from "../assets/campaign.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

function ProgressTracking() {
  return (
    <motion.section
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div className="flex-1" variants={fadeInLeft}>
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Progress Tracking</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 [text-shadow:_0_8px_20px_rgba(255,255,255,0.1),_0_12px_40px_rgba(255,255,255,0.2)]">
              Monitor Campaign <br className="hidden sm:block" />Progress
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">
              Instantly access real-time updates to track project progress and
              make <br className="hidden sm:block" /> quick adjustments.
            </p>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">100%</div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Increase in Progress Tracking
                </p>
              </div>
              <div className="border-l border-gray-800"></div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">10X</div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Increase in Productivity
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 from-gray-900/50 to-gray-900/20"
            variants={fadeInRight}
          >
            <img
              src={campaign}
              alt="Campaign Progress"
              className="w-full h-auto rounded-2xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProgressTracking;
