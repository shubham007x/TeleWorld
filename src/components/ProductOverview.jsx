import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";

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

function ProductOverview() {
  return (
    <motion.section
      id="products"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Top Light Beam Effect - Single thick beam */}
      <div className="absolute top-20 rounded-xl  w-1/2 border-white border-2 blur-xs "></div>

      {/* Radial Gradient Spotlight */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-1/2 h-12  sm:h-80  md:h-36 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 0.8) 5%, transparent 70%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <motion.p
          className="text-xs sm:text-sm text-white mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          Product Overview
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8"
          variants={fadeInUp}
        >
          Automate Your Marketing
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-sm text-gray-400 max-w-3xl mx-auto px-2"
          variants={fadeInUp}
        >
          Complete Telegram marketing automation tool scales your reach while
          <br className="hidden sm:block" /> protecting your reputation.
        </motion.p>
        <motion.img
          src={dashboard}
          alt="dashboard"
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto my-8"
        />
        <motion.button
          className="bg-[#047BC4] px-8 sm:px-12 md:px-16 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-t border-t-white"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore now
        </motion.button>
      </div>
    </motion.section>
  );
}

export default ProductOverview;
