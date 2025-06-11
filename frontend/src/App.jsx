import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/home/Home";
import Footer from "./components/common/footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacy-policy/privacyPolicy";
import TermsConditions from "./pages/terms-&-conditions/termsConditions";

function App() {
  return (
    <>
      <Header />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-condition" element={<TermsConditions />} />
        </Routes>
      }
      <Footer />
    </>
  );
}

export default App;
