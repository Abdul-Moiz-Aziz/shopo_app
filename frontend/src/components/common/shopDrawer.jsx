import { useState } from "react";
import { MdClose, MdKeyboardArrowRight, MdSearch } from "react-icons/md";
import { HiHeart, HiShoppingCart } from "react-icons/hi";
import { HiOutlineShoppingBag, HiMiniBars3BottomLeft } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ShopDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("categories"); // Default tab

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Top bar with menu button */}
      <div className="flex h-[60px] items-center justify-between px-2 sm:px-2 md:px-6 lg:hidden xl:px-[75px] bg-white">
        <button
          onClick={openDrawer}
          className="font-medium text-[#1d1d1d] capitalize"
          aria-label="Open category drawer"
        >
          <HiMiniBars3BottomLeft className="h-[22px] w-5" />
        </button>

        <span>
          <img src="./images/logo.svg" alt="logo" />
        </span>

        <div className="relative">
          <Link to="/cart">
            <HiOutlineShoppingBag className="h-[22px] w-5" />
          </Link>
          <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FFBB35] text-[9px]">
            0
          </span>
        </div>
      </div>

      {/* Background overlay when drawer is open */}
      {isOpen && (
        <div
          onClick={closeDrawer}
          className="bg-opacity-40 fixed top-0 left-0 z-40 h-screen w-full bg-[#959595] opacity-85"
          aria-hidden="true"
        />
      )}

      {/* Drawer content */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] overflow-x-hidden overflow-y-auto bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top icons and close button */}
        <div className="mt-5 mb-4 w-full px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <GoHeart className="h-[22px] w-5" />
                <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-amber-200 text-[9px]">
                  0
                </span>
              </div>
              <div className="relative">
                <MdOutlineShoppingCart className="h-[22px] w-5" />
                <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-amber-200 text-[9px]">
                  0
                </span>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              aria-label="Close category drawer"
              className="text-2xl font-bold"
            >
              <MdClose />
            </button>
          </div>
        </div>

        {/* Search box */}
        <div className="mt-5 flex h-[34px] w-full px-5">
          <div className="h-full flex-1 border border-r-0 border-[#E9E9E9] bg-white">
            <input
              type="text"
              name="search"
              placeholder="Search categories..."
              className="h-full w-full pl-[10px] text-sm text-[#222222] focus:outline-0"
            />
          </div>
          <div>
            <button className="h-full w-[34px] bg-amber-200 font-bold flex items-center justify-center">
              <MdSearch />
            </button>
          </div>
        </div>

        {/* Toggle Tabs: Categories / Main Menu */}
        <div className="mt-5 flex w-full items-center space-x-3 px-5">
          <button
            onClick={() => setActiveTab("categories")}
            className={`text-base font-semibold ${
              activeTab === "categories" ? "text-[#222222]" : "text-[#797979]"
            }`}
          >
            Categories
          </button>
          <span className="h-[14px] w-[1px] bg-[#797979]"></span>
          <button
            onClick={() => setActiveTab("mainMenu")}
            className={`text-base font-semibold ${
              activeTab === "mainMenu" ? "text-[#222222]" : "text-[#797979]"
            }`}
          >
            Main Menu
          </button>
        </div>

        {/* Conditional rendering of tabs */}
        {activeTab === "mainMenu" ? (
          <div className="mt-4">
            <ul>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  Shop
                </Link>
              </li>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/blog"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  Blogs
                </Link>
              </li>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/about"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  About
                </Link>
              </li>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/contact"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  Contact
                </Link>
              </li>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/privacy-policy"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  privacy policy
                </Link>
              </li>
              <li className="flex h-12 items-center px-5 capitalize">
                <Link
                  to="/terms-condition"
                  onClick={closeDrawer}
                  className="w-full text-sm font-medium text-[#222222]"
                >
                  terms & conditions
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-5">
            <ul>
              <li className="flex h-12 justify-center">
                <a
                  href="/category"
                  className="flex w-full items-center justify-between px-5"
                >
                  <div className="flex items-center">
                    <span className=" font-medium text-sm text-[#222222] capitalize">
                      name
                    </span>
                  </div>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopDrawer;
