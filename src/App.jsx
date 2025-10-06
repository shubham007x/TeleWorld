import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation, Footer } from "./components";
import Home from "./pages/Home";
import WaitlistPage from "./pages/WaitlistPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
