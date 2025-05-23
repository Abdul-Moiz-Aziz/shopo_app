import {
  MdKeyboardArrowDown,
  MdElectricBolt,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

const BottomHeader = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryOpening = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="hidden h-[60px] w-full bg-amber-300 lg:block">
      <div className="flex h-full w-full items-center justify-between text-sm md:px-10 xl:px-[75px]">
        <div className="flex h-full items-end gap-5">
          <div className="relative rounded-tl-md rounded-tr-md bg-white lg:h-[53px] xl:w-[270px] lg:w-[200px]">
            <button
              onClick={handleCategoryOpening}
              className="flex h-full w-full cursor-pointer items-center justify-between px-4 font-medium text-[#1d1d1d] capitalize "
            >
              <span className="flex items-center gap-2">
                <HiBars3CenterLeft className="h-5 w-5" />
                all categories
              </span>
              <MdKeyboardArrowDown className="h-5 w-5" />
            </button>

            {isCategoryOpen && (
              <div
                onClick={() => setIsCategoryOpen(false)}
                className="fixed inset-0 z-10"
              />
            )}

            <div
              className={`absolute top-[53px] left-0 w-full bg-white overflow-hidden transition-[max-height] duration-[0.25s] ease-in-out z-20 ${
                isCategoryOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="w-full">
                <li className="px-5 py-3 border-t border-solid border-t-gray-400">
                  <Link
                    to="/category"
                    className="text-sm text-[#222222] flex items-center justify-between gap-2"
                  >
                    <MdElectricBolt className="w-5 h-5" />
                    <span className="capitalize">category name</span>
                    <MdKeyboardArrowRight className="w-5 h-5" />
                  </Link>
                </li>
                <li className="px-5 py-3 border-t border-solid border-t-gray-400">
                  <Link
                    to="/category"
                    className="text-sm text-[#222222] flex items-center justify-between gap-2"
                  >
                    <MdElectricBolt className="w-5 h-5" />
                    <span className="capitalize">category name</span>
                    <MdKeyboardArrowRight className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-full">
            <ul className="flex h-full gap-5">
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
          <Link
            to="/become-seller"
            className="flex items-center gap-2 text-sm bg-[#222222] text-white px-5 font-medium py-3 capitalize"
          >
            <span>become seller</span>
            <MdKeyboardArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
