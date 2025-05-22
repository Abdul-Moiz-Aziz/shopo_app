import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const TopHeader = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("english");
  return (
    <div className="flex h-10 items-center justify-between text-xs font-medium md:px-10 xl:px-[75px] border-b border-gray-200 border-solid">
      <div className="capitalize">
        <Link to="/login">account</Link>
        <Link to="/track-order" className="md:ml-6">
          track order
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-between">
          <span>
            <CiMobile3 />
          </span>
          <span className="ml-2">+00 00000 000 000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>
            <FaRegEnvelope />
          </span>
          <span className="ml-2">admin@gmail.com</span>
        </div>
        <div className="flex items-center justify-between relative">
          <button
            className="flex items-center justify-between cursor-pointer"
            onClick={() => {
              setIsCurrencyOpen(!isCurrencyOpen);
              setIsLanguageOpen(false);
            }}
          >
            <span className="uppercase ml-2">{currency}</span>
            <span className="ml-1 text-sm">
              <MdKeyboardArrowDown />
            </span>
          </button>
          {isCurrencyOpen && (
            <div className="bg-white absolute top-full overflow-hidden h-auto right-full w-full rounded-lg border border-solid border-gray-200">
              <ul>
                <li
                  className={`uppercase w-[120px] px-5 h-10 flex items-center cursor-pointer ${
                    currency === "usd" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setCurrency("usd");
                    setIsCurrencyOpen(false);
                    setIsLanguageOpen(false);
                  }}
                >
                  <span>usd</span>
                </li>
                <li
                  className={`uppercase w-[120px] h-10 px-5 flex items-center cursor-pointer ${
                    currency === "eur" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    setCurrency("eur");
                    setIsCurrencyOpen(false);
                    setIsLanguageOpen(false);
                  }}
                >
                  <span>eur</span>
                </li>
              </ul>
            </div>
          )}
          <div className="flex items-center justify-between relative">
            <button
              className="flex items-center justify-between cursor-pointer"
              onClick={() => {
                setIsLanguageOpen(!isLanguageOpen);
                setIsCurrencyOpen(false);
              }}
            >
              <span className="capitalize ml-2">{language}</span>
              <span className="ml-1 text-sm">
                <MdKeyboardArrowDown />
              </span>
            </button>
            {isLanguageOpen && (
              <div className="bg-white w-[120px] absolute top-full z-50 overflow-hidden h-auto right-full rounded-lg border border-solid border-gray-200">
                <ul>
                  <li
                    className={`capitalize px-5 h-10 flex items-center cursor-pointer ${
                      language === "english" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setLanguage("english");
                      setIsLanguageOpen(false);
                      setIsCurrencyOpen(false);
                    }}
                  >
                    english
                  </li>
                  <li
                    className={`capitalize px-5 h-10 flex items-center cursor-pointer ${
                      language === "french" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setLanguage("french");
                      setIsLanguageOpen(false);
                      setIsCurrencyOpen(false);
                    }}
                  >
                    frech
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
