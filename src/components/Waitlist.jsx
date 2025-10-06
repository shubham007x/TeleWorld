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
    <section
      id="resources"
      className=" relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black "
    >
      {/* Stars scattered at bottom */}
      {/* <div
        className="absolute bottom-15 left-0 right-30 h-[20%] pointer-events-none z-25"
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "contains",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
        }}
      /> */}
    
      {/* Blur overlay on background image */}

      <div
        className="absolute bottom-0  left-0 right-0 h-[50%] pointer-events-none backdrop-blur-2xl  z-10"
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
        className="flex flex-col items-center max-w-4xl z-40 text-center w-full gap-3 "
      >
        {/* Waitlist Badge */}
        <motion.div
          variants={fadeInUp}
          className="text-[8px]  text-[#F0F0F0] bg-gradient-to-br from-white/20 via-black/10 to-transparent rounded-full border border-white/20 px-4 py-0.5 shadow-lg"
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
          className="text-xs   md:text-xs text-[#9D9D9D] max-w-xl  leading-tight px-10"
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
          className="mt-2  max-w-xsm "
        >
          <div className="flex items-center gap-4 bg-gradient-to-br from-white/20 via-black/20 to-transparent border border-gray-800 rounded-lg px-1 py-1">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1  px-2 bg-transparent text-white text-xs placeholder-gray-500 placeholder:text-[8px]  focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md px-3 py-1 bg-[#047BC4] hover:bg-cyan-600 text-white text-[8px] font-extralight  transition-colors whitespace-nowrap"
            >
              Get Notified
            </button>
          </div>
        </motion.form>

        {/* Counter */}
        <motion.p
          variants={fadeInUp}
          className="flex items-center gap-1 text-[8px] text-gray-300 px-2"
        >
          <span className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
          Join {count.toLocaleString()} others already on the waitlist!
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Waitlist;
