import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import Home from "./pages/Home";
import WaitlistPage from "./pages/WaitlistPage";

function App() {
  return (
    <Router>
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
