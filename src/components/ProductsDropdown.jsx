import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";

import world from "../assets/World 2.png";
import account from "../assets/account.png";
import proxy from "../assets/proxy1.png";
function ProductsDropdown() {
  const products = [
    {
      icon: world,
      title: "TeleWorld Subscription",
      description:
        "Discover, schedule, and analyze Telegram advertising channels. Access real-time insights on channels and groups. Manage multiple accounts, automate posting, and track engagement with actionable analytics and ROI measurement.",
    },
    {
      icon: account,
      title: "Telegram Accounts",
      description:
        "Access verified, legitimate Telegram accounts tailored for promotional work. All accounts are legally sourced with full compliance guarantees and identity security.",
    },
    {
      icon: proxy,
      title: "Proxies",
      description:
        "Premium proxy network designed for reliable connection and seamless campaign management. Ensure stable connections, avoid rate limits, and scale your marketing infrastructure.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-10 left-1/2 -translate-x-1/2 mt-2 bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 w-[95vw] sm:w-[360px] md:w-[420px] lg:w-[480px]"
    >
      <div className="flex flex-col sm:flex-row relative p-2 sm:p-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col gap-1 py-2 sm:py-0 px-2 sm:px-2.5 relative"
          >
            {/* Vertical Divider between items for desktop */}
            {index !== 0 && (
              <div className="hidden sm:block absolute top-0 left-0 h-full w-px bg-gray-600/50"></div>
            )}

            {/* Horizontal Divider between items for mobile */}
            {index !== 0 && (
              <div className="sm:hidden absolute top-0 left-0 right-0 h-px bg-gray-600/50"></div>
            )}

            <div className="flex items-center gap-1 sm:gap-1">
              <img
                src={product.icon}
                alt={product.title}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 -mt-1"
              />
              <div className="flex-1">
                <h3 className="text-white justify-center items-center font-semibold text-[9px] sm:text-[10px] mb-0.5 sm:mb-1 leading-tight">
                  {product.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-[7px] sm:text-[8px] leading-tight">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProductsDropdown;
