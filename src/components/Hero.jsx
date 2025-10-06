import { motion } from "framer-motion";
import telegram from "../assets/telegram.png";
import hero from "../assets/hero.png";
import lightStar from "../assets/lightStar.png";

function Hero({ fadeInUp, staggerContainer }) {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-left-bottom sm:bg-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Stars - Behind light sources - Left Top */}
      <img
        src={lightStar}
        alt=""
        className="absolute top-10 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-66 md:h-20 opacity-90 z-100 pointer-events-none"
      />

      {/* Stars - Behind light sources - Right Top */}
      <img
        src={lightStar}
        alt=""
        className="absolute top-10 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-66 md:h-20 opacity-90 z-100 pointer-events-none"
      />

      {/*light source */}
      {/* Original */}
      <div
        className="hidden md:block absolute -top-3 left-10 rotate-22 -translate-x-1/2 w-1/5 h-5 sm:h-5 md:h-36 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)",
        }}
      ></div>

      {/* Mirrored */}
      <div
        className="hidden md:block absolute -top-3 right-10 -rotate-22 translate-x-1/2 w-1/5 h-5 sm:h-5 md:h-36 pointer-events-none scale-x-[-1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)",
        }}
      ></div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Dark overlay for better text visibility on mobile */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10 pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center max-w-6xl z-10 text-center w-full gap-8"
      >
        {/* Top Badge */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-xs sm:text-sm text-gray-200 backdrop-blur-sm mt-8 sm:mt-26"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">
            <img src={telegram} alt="telegram" />
          </div>
          <span className="whitespace-nowrap">
            AIO Telegram Advertisement Platform
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight px-4"
        >
          TeleWorld - #1 Telegram
          <br />
          <span className="block text-white">Advertising Platform</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-xs sm:text-sm md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Create a clear roadmap, track progress, and smoothly guide your
          <br className="hidden sm:block" /> project from idea to successful
          launch.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-10 bg-white text-xs sm:text-sm text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl"
        >
          Get Started For Free
        </motion.button>
      </motion.div>

      {/* Trust Badge - Positioned at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-3 text-xs sm:text-sm md:text-base text-gray-500 z-10 px-4 text-center"
      >
        Trusted by 12,000+ businesses for Telegram Growth
      </motion.p>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
