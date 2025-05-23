import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const MidHeader = () => {
  return (
    <div className="hidden h-[86px] w-full items-center justify-between px-2 sm:px-2 md:px-6 lg:flex xl:px-[75px]">
      <div>
        <Link to="/">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
      </div>

      <div className="flex items-center justify-center border border-solid border-[#EFEFEF] xl:h-11 lg:h-[42px] xl:w-[517px]">
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
            <span>all categories</span>
            <MdKeyboardArrowDown className="h-5 w-5" />
          </button>
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
          <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FFBB35] text-[9px]">
            0
          </span>
        </div>

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <HiOutlineShoppingBag className="h-[22px] w-5" />
          </Link>
          <span className="absolute -top-2.5 -right-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#FFBB35] text-[9px]">
            0
          </span>
        </div>

        {/* Profile */}
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
