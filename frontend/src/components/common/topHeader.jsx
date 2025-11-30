import {  useNavigate } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { handleProtectedRoute } from "../../utils/handleProtectedRoute";

const TopHeader = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("english");
  const { isAuthenticated, setShowLoginPopup } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex h-10 items-center justify-between px-2 text-xs font-medium sm:px-2 md:px-6 xl:px-[75px] border-b border-solid border-gray-300">
      <div>
        <button
          className="cursor-pointer capitalize"
          onClick={() => {
            handleProtectedRoute(
              isAuthenticated,
              setShowLoginPopup,
              navigate,
              "/profile"
            )
          }}
        >
          account
        </button>

        <button
          className="cursor-pointer ml-6"
          onClick={() => {
            handleProtectedRoute(
              isAuthenticated,
              setShowLoginPopup,
              navigate,
              "/track-order"
            )
          }}
        >
          Track order
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center">
          <CiMobile3 />
          <span className="xl:ml-2">+00 00000 000 000</span>
        </div>

        <div className="flex items-center">
          <FaRegEnvelope />
          <span className="xl:ml-2">admin@gmail.com</span>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => {
              setIsCurrencyOpen(!isCurrencyOpen);
              setIsLanguageOpen(false);
            }}
            className="flex items-center cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isCurrencyOpen}
          >
            <span className="uppercase xl:ml-2">{currency}</span>
            <MdKeyboardArrowDown className="ml-1 text-sm" />
          </button>
          {isCurrencyOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg w-[120px] z-50">
              <ul>
                {["usd", "eur"].map((cur) => (
                  <li
                    key={cur}
                    className={`uppercase px-5 h-10 flex items-center cursor-pointer ${
                      currency === cur ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setCurrency(cur);
                      setIsCurrencyOpen(false);
                      setIsLanguageOpen(false);
                    }}
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => {
              setIsLanguageOpen(!isLanguageOpen);
              setIsCurrencyOpen(false);
            }}
            className="flex items-center cursor-pointer"
            aria-haspopup="true"
            aria-expanded={isLanguageOpen}
          >
            <span className="capitalize xl:ml-2">{language}</span>
            <MdKeyboardArrowDown className="ml-1 text-sm" />
          </button>
          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg w-[120px] z-50">
              <ul>
                {["english", "french"].map((lang) => (
                  <li
                    key={lang}
                    className={`capitalize px-5 h-10 flex items-center cursor-pointer ${
                      language === lang ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLanguageOpen(false);
                      setIsCurrencyOpen(false);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
