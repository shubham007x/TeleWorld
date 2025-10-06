import { motion } from "framer-motion";
import { useState } from "react";
import background from "../assets/Background.svg";
import stars from "../assets/lightStar.png";

function Waitlist({ fadeInUp, staggerContainer }) {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(623);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your waitlist logic here
    console.log("Email submitted:", email);
  };

  return (
    <section id="resources" className=" relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black ">
      {/* Stars scattered at bottom */}
      <div
        className="absolute bottom-15 left-0 right-30 h-[50%] pointer-events-none z-100"
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "contains",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
        }}
      />
      {/* <div class="backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl border border-white/20 p-6 shadow-lg"></div> */}
      {/* Blur overlay on background image */}
      <div className="absolute sm:bottom-14  left-0 right-0 h-[50%] pointer-events-none bg-black/10 backdrop-blur-xl  z-20 opacity-80" />
      <div
        className="absolute bottom-0  left-0 right-0 h-[50%] pointer-events-none backdrop-blur-xs z-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center max-w-4xl z-40 text-center w-full gap-6 "
      >
        {/* Waitlist Badge */}
        <motion.div
          variants={fadeInUp}
          className="text-xs backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full border border-white/20 px-6 py-1 shadow-lg"
        >
          Waitlist
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight px-4 "
        >
          We Promise You Won't
          <br />
          <span className="block font-light">
            Be <span className="font-semibold">Disappointed</span> With Our
            Product
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-sm   md:text-sm text-[#9D9D9D] max-w-2xl  leading-tight m-auto px-4"
        >
          "TeleWorld is The #1 Platform For Telegram Advertising,
          <br className="hidden sm:block" />
          They Handle Everything From Finding Groups, to Advanced Advertisement
          Campaigns"
        </motion.p>

        {/* Email Form */}

        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="mt-2 w-full max-w-md px-4"
        >
          <div className="flex items-center gap-1 bg-black border border-gray-800 rounded-xl px-4 py-1">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl px-6 py-2 bg-[#047BC4] hover:bg-cyan-600 text-white text-sm font-medium rounded- transition-colors whitespace-nowrap"
            >
              Get Notified
            </button>
          </div>
        </motion.form>

        {/* Counter */}
        <motion.p
          variants={fadeInUp}
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
          Join {count.toLocaleString()} others already on the waitlist!
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Waitlist;
