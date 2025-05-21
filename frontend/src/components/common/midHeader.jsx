import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const MidHeader = () => {
  return (
    <div className="flex h-[86px] w-full items-center justify-between md:px-8 lg:px-[55px] xl:px-[75px]">
      <div>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center justify-center border border-solid border-[#EFEFEF] xl:h-[44px] xl:w-[517px]">
        <div className="flex h-full items-center justify-center">
          <input
            type="text"
            name="search-products"
            placeholder="Search Products..."
            className="px-4 py-3 text-xs leading-4 text-[#222222] focus:outline-0 font-medium"
          />
        </div>
        <div className="h-[22px] w-[1px] border-l border-[#EFEFEF]"></div>
        <div className="relative w-full px-4">
          <button className="font-medium flex w-full cursor-pointer items-center justify-between text-xs text-[#797979] capitalize">
            <span>category</span>
            <span>
              <MdKeyboardArrowDown className="h-5 w-5" />
            </span>
          </button>
          <div className="fixed top-0 left-0 z-50 hidden h-full w-full"></div>
        </div>
        <div className="h-full">
          <button className="h-full w-[93px] bg-[#FFBB38] text-sm font-medium capitalize">
            search
          </button>
        </div>
      </div>
      <div className="relative flex items-center space-x-6 rtl:space-x-reverse">
        <div className="relative">
          <Link to="/wishlist">
            <GoHeart className="h-[22px] w-5" />
          </Link>
          <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-amber-300 text-[9px]">
            0
          </span>
        </div>
        <div className="relative">
          <Link to="/cart">
            <HiOutlineShoppingBag className="h-[22px] w-5" />
          </Link>
          <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-amber-300 text-[9px]">
            0
          </span>
        </div>
        <div className="relative">
          <Link to="/profile">
            <GoPerson className="h-[22px] w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
