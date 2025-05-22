import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { useState } from "react";

const BottomHeader = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryopening = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="h-[60px] w-full bg-[#FFBB35]">
      <div className="flex h-full w-full items-center justify-between text-sm md:px-10 xl:px-[75px]">
        <div className="flex h-full items-end gap-5">
          <div className="rounded-tl-md rounded-tr-md bg-white h-[53px] w-[270px] relative">
            <button
              onClick={handleCategoryopening}
              className="flex h-full w-full cursor-pointer items-center justify-between px-4 font-medium text-[#1d1d1d] capitalize"
            >
              <span className="flex items-center gap-2">
                <span>
                  <HiBars3CenterLeft className="h-5 w-5" />
                </span>
                all categories
              </span>
              <span>
                <MdKeyboardArrowDown className="h-5 w-5" />
              </span>
            </button>
            {isCategoryOpen && (
              <div class="fixed top-0 left-0 hidded w-full h-full -z-10"></div>
            )}
            {/* {isCategoryOpen && ( */}
            <div
              className={`absolute top-[53px] left-0 w-full bg-white overflow-hidden transition-all ${
                isCategoryOpen ? "h-auto" : "h-0"
              } duration-100 ease-linear`}
            >
              <ul className="h-full w-full">
                <li className="px-5 py-3 border-t border-solid border-t-gray-400">
                  <a
                    href="/category"
                    className="text-sm text-[#222222] flex items-center justify-between gap-2"
                  >
                    <span>
                      <MdElectricBolt className="w-5 h-5" />
                    </span>
                    <span className="capitalize">category name</span>
                    <span>
                      <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </li>
                <li className="px-5 py-3 border-t border-solid border-t-gray-400">
                  <a
                    href="/category"
                    className="text-sm text-[#222222] flex items-center justify-between gap-2"
                  >
                    <span>
                      <MdElectricBolt className="w-5 h-5" />
                    </span>
                    <span className="capitalize">category name</span>
                    <span>
                      <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>
          <div className="h-full">
            <ul className="flex h-full gap-6">
              <li className="flex h-full items-center justify-center px-2">
                <Link
                  to="/shop"
                  className="font-medium text-[#222222] capitalize"
                >
                  shop
                </Link>
              </li>
              <li className="flex h-full items-center justify-center px-2">
                <Link
                  to="/blog"
                  className="font-medium text-[#222222] capitalize"
                >
                  blogs
                </Link>
              </li>
              <li className="flex h-full items-center justify-center px-2">
                <Link
                  to="/about-us"
                  className="font-medium text-[#222222] capitalize"
                >
                  about
                </Link>
              </li>
              <li className="flex h-full items-center justify-center px-2">
                <Link
                  to="/contact-us"
                  className="font-medium text-[#222222] capitalize"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Link
              to="/become-seller"
              className="flex items-center gap-2 text-sm bg-[#222222] text-white px-5 font-medium py-3 capitalize"
            >
              <span>become seller</span>
              <span>
                <MdOutlineKeyboardArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomHeader;
