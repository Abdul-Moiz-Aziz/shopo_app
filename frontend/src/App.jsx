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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AuthContext";
import LoginPopup from "./components/common/loginPopup";

function App() {
  const { isAuthenticated, loading, showLoginPopup, setShowLoginPopup } =
    useAuth();

  return (
    <QuickViewProvider>
      <Header />
      
      {!loading && !isAuthenticated && showLoginPopup && (
        <LoginPopup isOpen={true} onClose={() => setShowLoginPopup(false)} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      <Footer />

      {/* Always render the modal globally */}
      <QuickViewWrapper />
    </QuickViewProvider>
  );
}

export default App;
