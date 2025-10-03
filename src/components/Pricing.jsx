import { motion } from "framer-motion";
import lightStar from "../assets/image.png";
import { IOSSwitch } from "../utils/IosSwitch";
import { FormControlLabel, FormGroup } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import unchecked from "../assets/unchecked.png";
import addOn from "../assets/addon.png";
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

function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900 relative overflow-hidden"
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
            Pricing Plans
          </motion.p>
          <motion.h2
            className="text-3xl drop-shadow-white sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 [text-shadow:_0_8px_20px_rgba(255,255,255,0.1),_0_12px_40px_rgba(255,255,255,0.2)]"
            variants={fadeInUp}
          >
            Affordable Pricing Plan
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            {
              name: "Starter Plan",
              price: "$69",
              period: "/month",
              ctades: "Cancel anytime",
              description: "Perfect for small businesses getting started",
              features: [
                "Up to 2 Telegram Accounts",
                "20 Posts Per Day",
                "Basic Analytics",
                "A/B Testing",
                "Email & Live Chat Support",
              ],
              unchecked: ["Content Checks", "Scheduling Calender"],
              popular: false,
              cta: "Get Started",
            },
            {
              name: "Growth Plan",
              price: "$149",
              period: "/month",
              ctades: "Best value for growing teams",
              description: "Most popular for growing businesses",
              features: [
                "Unlimited Campaigns",
                "400 Scheduled Posts Per Day",
                "Campaign Analytics",
                "Scheduling Calender",
                "Content Checks",
                "Priority Email Support",
              ],
              unchecked: ["API Access"],
              popular: true,
              cta: "Get Started",
            },
            {
              name: "Pro Plan",
              price: "$249",
              period: "/month",
              ctades: "Enterprise features included",
              description: "For established marketing teams",

              features: [
                "10 Seats",
                "800 Scheduled Posts/Month",
                "Agency Tools(Multi-Client)",
                "API Access",
                "A/B Testing",
                "Phone Support",
                "Enterprise Data Handling",
              ],
              popular: false,
              cta: "Get Started",
            },
            {
              name: "Agency Plan",
              price: "$499",
              period: "/month",
              ctades: "Agency pipeline included",
              description: "Unlimited power for agencies",
              features: [
                "Everything In Statrter,Growth& Pro",
                "20 Telegram Accounts Included",
                "Weekly Campaign Reports",
                "Dedicated Account Manager",
                "Dedicated Group Hunter(Find Groups For Your)",
                "Dedicated Ad Copywriter",
              ],
              popular: false,
              addOns: ["Pay-Per-Post Credits For Marketplace Buying"],
              cta: "Get Started",
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-[#0f0f0f] border rounded-2xl transition-all overflow-hidden hover:border-cyan-500 ${
                i === 3
                  ? "w-full max-w-4xl border-cyan-500/50 shadow-2xl shadow-cyan-500/30 flex flex-col lg:flex-row"
                  : i === 1
                  ? "w-full md:w-[calc(33.333%-1.5rem)] flex flex-col border-cyan-500"
                  : "w-full md:w-[calc(33.333%-1.5rem)] flex flex-col border-gray-800"
              }`}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`flex-shrink-0 p-4 sm:p-6 ${
                  i === 3 ? "lg:w-1/2" : ""
                }`}
              >
                {/* Top Light Beam Effect - Single thick beam */}
                <div className="absolute top-0 left-10 rounded-xl w-3 border-white border-1"></div>
                {/* Radial Gradient Spotlight */}
                <div
                  className="absolute top-0 left-10 -translate-x-1/2 w-1/2 h-12 sm:h-80 md:h-36 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center top, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 0.05) 2%, transparent 50%)",
                  }}
                ></div>
                {/* Radial Gradient left Spotlight */}
                <div
                  className="absolute top-0 -right-25 -translate-x   w-1/2 h-12 sm:h-80 md:h-36 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 2%, transparent 50%)",
                  }}
                ></div>
                {/* Top right corner light star */}
                <img
                  src={lightStar}
                  alt=""
                  className="absolute top-0 right-0 w-32 h-32 z-100 pointer-events-none"
                />
                {/* Top right glowing circles - only bottom-left quarter visible */}
                <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden pointer-events-none z-0 opacity-5">
                  <div className="absolute -top-20 -right-25 w-48 h-48">
                    <div className="relative w-full h-full flex items-center justify-center opacity-30">
                      <div className="relative">
                        {/* Outermost Circle - White */}
                        <div className="absolute w-56 h-56 rounded-full bg-white  z-10 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
                        {/* Third Circle - Black */}
                        <div className="absolute w-42 h-42 rounded-full bg-black/95 z-20 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
                        {/* Second Circle - White */}
                        <div className="absolute w-32 h-32 rounded-full bg-white z-30 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
                        {/* Inner Circle - Black */}
                        <div className="absolute w-18 h-18 rounded-full bg-black z-40 -translate-x-1/2 -translate-y-1/2 top-0 left-0" />
                      </div>
                    </div>
                  </div>
                </div>
                {plan.popular && (
                  <div className="absolute top-8 right-0 -translate-x-1/2 bg-gray-900   text-blue-300 text-xs  px-4 py-2 rounded-full z-10">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4 relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      .99 {plan.period}
                    </span>
                  </div>

                  <FormGroup className="mb-3">
                    <FormControlLabel
                      control={<IOSSwitch  />}
                      label="Billed yearly"
                      className="text-gray-300 gap-2 px-2"
                    />
                  </FormGroup>

                  <motion.button
                    className={`w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all mb-2 ${
                      i === 1
                        ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                        : "border-white border-t bg-gradient-to-b from-[#2a2a2a] to-gray-600 text-white hover:from-cyan-500 hover:to-blue-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Billed monthly • {plan.ctades}
                  </p>
                </div>
              </div>

              <div
                className={`w-full flex-1 p-4 sm:p-6 ${
                  i === 3
                    ? "bg-transparent lg:w-1/2 lg:border-l lg:border-[#1D1D1D]"
                    : "bg-[#0a0a0a] border-t border-[#1D1D1D]"
                }`}
              >
                <div>
                  <h4 className="text-base font-semibold mb-3 relative z-10">
                    What's Included
                  </h4>
                  <ul className="space-y-2 relative z-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                          <CheckCircleIcon sx={{ fontSize: 20 }} />
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.unchecked?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-gray-800 mt-0.5 flex-shrink-0">
                          <img
                            src={unchecked}
                            className="h-5 w-5"
                            alt="unchecked"
                          />{" "}
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {plan.addOns && (
                  <div className="mt-4">
                    <h4 className="text-base font-semibold mb-3 relative z-10">
                      Add-Ons
                    </h4>
                    <ul className="space-y-2 relative z-10">
                      {plan.addOns.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="text-gray-800 mt-0.5 flex-shrink-0">
                            <img src={addOn} className="h-5 w-5" alt="addon" />
                          </span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Plans Include */}
        <motion.div
          className="text-center mt-12 sm:mt-16 space-y-6"
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            All Plans Include
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-400 px-4">
            <span>Channel Discovery</span>
            <span>Compliance Protection</span>
            <span>Campaign Automation</span>
            <span>Performance Analytics</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Pricing;
