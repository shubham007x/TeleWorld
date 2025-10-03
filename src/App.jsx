import {
  Navigation,
  Hero,
  ProductOverview,
  Features,
  Benefits,
  Pricing,
  ProgressTracking,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "./components";

function App() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen  bg-black text-white">
      <Navigation />
      <Hero
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <ProductOverview
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <Features
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <Benefits
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <Pricing
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <ProgressTracking
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <Testimonials
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        scaleIn={scaleIn}
      />
      <FAQ fadeInUp={fadeInUp} />
      <CTA fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <Footer />
    </div>
  );
}

export default App;
