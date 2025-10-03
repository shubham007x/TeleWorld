import { motion, useAnimationControls } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heart from "../assets/heart.png";

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

function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isDragging || isHovering) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 326; // card width + gap

        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // Reset to beginning when reaching end for infinite effect
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 50
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "auto" });
          }, 500);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging, isHovering]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const testimonials = [
    {
      handle: "@TechGrowthHacker",
      role: "SaaS Marketing Director",
      text: "Cut our Telegram campaign setup time from 6 hours to 30 minutes. The channel discovery feature alone paid for itself in the first month.",
      avatar: "B",
      rightAvatar: "T",
    },
    {
      handle: "@CryptoMarketingPro",
      role: "Blockchain Consultant",
      text: "Zero account bans since switching platforms. The rate limiting protection gives us complete peace of mind while scaling campaigns.",
      avatar: "T",
      rightAvatar: "C",
    },
    {
      handle: "@AgencyFounder_Mike",
      role: "Creative Digital Solutions",
      text: "White-label reporting makes us look like Telegram experts to our clients. Retention rate jumped to 95% after implementing this platform.",
      avatar: "C",
      rightAvatar: "A",
    },
    {
      handle: "@EcommerceGuru_Sara",
      role: "Digital Marketing Specialist",
      text: "Automated our entire Telegram marketing workflow. Now we reach 100k+ users daily without lifting a finger. Best investment we made this year!",
      avatar: "A",
      rightAvatar: "S",
    },
  ];

  return (
    <motion.section
      className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black border-gray-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Heart Background */}
        <div className="text-center mb-16 sm:mb-20  relative">
          {/* Heart Background */}
          <div className="absolute bottom-1 sm:-bottom-20 md:-bottom-20 lg:-bottom-20 w-full pointer-events-none">
            <img
              src={heart}
              alt="heart"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <motion.p
            className="text-sm sm:text-base text-gray-500 mb-4 relative z-10"
            variants={fadeInUp}
          >
            Testimonials
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold [text-shadow:_0_8px_20px_rgba(255,255,255,0.1),_0_12px_40px_rgba(255,255,255,0.2)] relative z-10"
            variants={fadeInUp}
          >
            What Our Users Say
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none transition-all duration-300"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
            }}
          >
            {/* Render testimonials 3 times for infinite scroll effect */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, i) => (
                <motion.div
                  key={i}
                  className="min-w-[280px] sm:min-w-[320px] max-w-[280px] sm:max-w-[320px] bg-black border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 transition-all duration-300 snap-center flex-shrink-0"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Testimonial Text */}
                  <div className="p-5 sm:p-8">
                    <p className="text-sm sm:text-base text-white mb-0 leading-relaxed min-h-[120px] sm:min-h-[140px]">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author Info - Dark Background */}
                  <div className="bg-gray-900/60 p-4 sm:p-6 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base mb-1">
                        {testimonial.handle}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-cyan-500/30">
                      {testimonial.rightAvatar}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}

export default Testimonials;
