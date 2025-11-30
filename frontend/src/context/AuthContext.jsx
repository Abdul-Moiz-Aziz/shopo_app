// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authAPI } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const { data } = await authAPI.getProfile();
          setUser(data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    const { data } = await authAPI.login(credentials);
    setUser(data.user);
    setIsAuthenticated(true);
    Cookies.set("token", data.token); // if needed
    setShowLoginPopup(false); // ✅ close popup after login
  };

  const register = async (userData) => {
    const { data } = await authAPI.register(userData);
    setUser(data.user);
    setIsAuthenticated(true);
    Cookies.set("token", data.token); // if needed
    setShowLoginPopup(false); // ✅ close popup after register
  };

  const logout = async () => {
    await authAPI.logout();
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout,
        showLoginPopup,
        setShowLoginPopup, // expose setter
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
