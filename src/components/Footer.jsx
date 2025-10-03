import world from "../assets/World2.png";
import sideLeft from "../assets/sideleft.png";
import sideRight from "../assets/sideright.png";
import image from "../assets/image.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <footer className="bg-black py-6 sm:py-2 px-4 sm:px-6 lg:px-8 relative overflow-hidden ">
        {/* Vignette overlay */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)'
             }}
        />

        {/* Radial gradient blur from center top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2/3 pointer-events-none  ">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at center top, rgba(100, 100, 100, 0.05) 0%, transparent 90%)",
            }}
          />
        </div>

        {/* Decorative side image - Left */}
        <div className="hidden lg:block absolute left-0 top-0 h-9/10 pointer-events-none">
          <div className="relative h-full border-r border-gray-800 rounded-r-3xl shadow-[2px_0_0px_rgba(100,100,100,0.1)]">
               {/* Top Image */}
               <img
                 src={image}
                 alt=""
                 className="absolute top-10 right-0 w-auto h-16 object-contain opacity-80"
               />

               {/* Top Light Beam Effect - Single thick beam */}
                <div className="absolute top-16 -right-0.5 -translate-x-1/2 rounded-xl w-0.5 h-5 bg-white opacity-80"></div>

                {/* Radial Gradient Spotlight */}
                <div
                  className="absolute top-0 -right-3.5 -translate-x-1/2 w-1/2 h-12 sm:h-80 md:h-36 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center right, rgba(255, 255, 255, 255) 2%, rgba(255, 255, 255, 0.1) 1%, transparent 60%)",
                  }}
                ></div>
            <img
              src={sideLeft}
              alt=""
              className="h-full object-contain opacity-60"
            />
          </div>
        </div>

        {/* Decorative side image - Right */}
        <div className="hidden lg:block absolute right-0 top-0 h-9/10 pointer-events-none">
          <div className="relative h-full border-l border-gray-800 rounded-l-3xl shadow-[-2px_0_0px_rgba(100,100,100,0.1)]">
            {/* Top Image */}
            <img
              src={image}
              alt=""
              className="absolute top-10 left-0 w-auto h-16 object-contain opacity-80"
            />

            {/* Top Light Beam Effect - Single thick beam */}
                <div className="absolute top-16 left-0.5 -translate-x-1/2 rounded-xl w-0.5 h-5 bg-white opacity-80"></div>

                {/* Radial Gradient Spotlight */}
                <div
                  className="absolute top-0 left-3.5 -translate-x-1/2 w-1/2 h-12 sm:h-80 md:h-36 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center left, rgba(255, 255, 255, 255) 2%, rgba(255, 255, 255, 0.1) 1%, transparent 60%)",
                  }}
                ></div>
            <img
              src={sideRight}
              alt=""
              className="h-full object-contain opacity-60"
            />
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 ">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12 text-center lg:text-left">
              {/* Brand Section */}
              <div className="max-w-xs mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <img src={world} alt="TeleWorld" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="text-xl sm:text-2xl font-bold">TeleWorld</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                  Plan and navigate from idea to launch.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                  support@teleworld.net
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs sm:text-sm text-gray-400">
                    All Systems Operational
                  </span>
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-16">
                {/* Home Links */}
                <div>
                  <h3 className="font-semibold text-white mb-4">Home</h3>
                  <ul className="space-y-3">
                    {[
                      "Waitlist",
                      "Contact",
                      "Blogs",
                      "Changelog",
                      "Privacy Policy",
                      "404",
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Navigation */}
                <div>
                  <h3 className="font-semibold text-white mb-4">
                    Quick Navigation
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Product Overview",
                      "Features",
                      "Pricing",
                      "Testimonials",
                      "FAQ's",
                    ].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All Pages */}
                <div>
                  <h3 className="font-semibold text-white mb-4">All Pages</h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        All Pages
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Handles */}
                <div>
                  <h3 className="font-semibold text-white mb-4">
                    Social Handles
                  </h3>
                  <div className="flex justify-center lg:justify-start gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <LinkedInIcon sx={{ fontSize: 20, color: "white" }} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <XIcon sx={{ fontSize: 20, color: "white" }} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <InstagramIcon sx={{ fontSize: 20, color: "white" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-30 py-6 sm:py-10 sm:flex-row justify-between items-center gap-4 border-t border-gray-800">
        <p className="text-xs sm:text-sm text-gray-500">© 2024 All rights reserved.</p>
        <a
          href="#"
          className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </>
  );
}

export default Footer;
