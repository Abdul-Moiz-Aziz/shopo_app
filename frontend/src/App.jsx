import { Route, Routes } from "react-router-dom";
import "./App.css";

// Layout components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import QuickViewWrapper from "./components/common/quickViewWrapper";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsConditions from "./pages/terms-&-conditions/TermsConditions";

// Context
import { QuickViewProvider } from "./context/QuickViewContext";

function App() {
  return (
    <QuickViewProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
      </Routes>

      <Footer />

      {/* Always render the modal globally */}
      <QuickViewWrapper />
    </QuickViewProvider>
  );
}

export default App;
