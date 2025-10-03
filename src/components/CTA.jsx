import { motion } from "framer-motion";

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

function CTA() {
  return (
    <motion.section
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Box */}
        <motion.div
          className="bg-[radial-gradient(ellipse_at_top,#141415,#000000)] rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden"
          variants={scaleIn}
        >
          <div className="relative z-10">
            {/* Decorative Line */}
            <motion.div
              className="-mt-10 w-32  border-2 rounded  mx-auto mb-20"
              variants={fadeInUp}
            />
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-12  sm:h-80 md:h-36 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.1) 1%, transparent 55%)",
              }}
              variants={fadeInUp}
            ></motion.div>
            <motion.p
              className="text-sm text-gray-400 mb-6"
              variants={fadeInUp}
            >
              Onboard Now
            </motion.p>

            <motion.h2
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 [text-shadow:_0_8px_20px_rgba(255,255,255,0.1),_0_12px_40px_rgba(255,255,255,0.2)]"
              variants={fadeInUp}
            >
              Start Today
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Join 500+ marketing teams scaling Telegram campaigns without
              compliance risks.
            </motion.p>

            {/* Email Signup Form */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:p-2 max-w-lg mx-auto mb-8 sm:mb-12 sm:border sm:border-gray-900 sm:rounded-full"
              variants={fadeInUp}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white bg-transparent border border-gray-800 sm:border-0 rounded-full focus:outline-none focus:border-gray-600 sm:focus:border-transparent transition-colors placeholder:text-gray-500"
              />
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: "600+", label: "Active Teams" },
                { value: "0", label: "Account Violations" },
                { value: "47%", label: "Higher Engagement" },
                { value: "30m", label: "Setup Time" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-b from-[#0C0C0D] to-black-80/20 border-t border-gray-900 rounded-2xl p-4 sm:p-6 text-center"
                  variants={scaleIn}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CTA;
