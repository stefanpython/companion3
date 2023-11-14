import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Fees from "./components/Fees";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
