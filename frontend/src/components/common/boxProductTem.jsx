import { BiExpand } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdStar } from "react-icons/io";

const BoxProductTem = () => {
  return (
    <div className="w-full">
      <div className="relative flex h-[250px] bg-white product-container overflow-hidden group">
        <div className="relative grid h-full grid-cols-2 w-full product-image-container">
          <div className="flex items-center justify-center relative">
            <div>image</div>
            <button className="absolute top-[5%] left-[-20%] flex h-10 w-10 items-center justify-center rounded-sm bg-[#f7f7f7] transition-[background-color,color,left] duration-150 hover:bg-[#FFBB38] hover:text-white product-features-btn left-btn cursor-pointer">
              <BiExpand className="h-6 w-6" />
            </button>
            <button className="absolute top-[25%] left-[-20%] flex h-10 w-10 items-center justify-center rounded-sm bg-[#f7f7f7] transition-[background-color,color,left] duration-150 hover:bg-[#FFBB38] hover:text-white product-features-btn second left-btn cursor-pointer">
              <GoHeart className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col justify-center px-5 md:px-[30px] relative">
            <div className="mb-3 flex items-center">
              {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} className="h-5 w-5 text-[#D2D8E1]" />
              ))}
            </div>
            <p className="text-base font-medium text-[#222222] capitalize mb-2">
              <a href="/product"> Xbox Wireless Game Controller </a>
            </p>
            <p className="text-lg font-medium mb-[26px]">
              <span className="text-[#797979] mr-2">11.11$</span>
              <span className="text-[#EF2626]">11.11$</span>
            </p>
            <div className="flex items-center">
              <button className="cursor-pointer bg-[#FFBB38] px-3 py-1">
                <span>
                  <span className="text-[13px] font-medium capitalize">
                    Add to cart
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Border Effects */}
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#FFBB38] scale-x-0 transition-transform duration-500 ease group-hover:scale-x-100" />
        <span className="absolute top-0 left-0 h-[1px] w-full bg-[#FFBB38] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease" />
        <span className="absolute top-0 right-0 h-full w-[1px] bg-[#FFBB38] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease" />
        <span className="absolute top-0 left-0 h-full w-[1px] bg-[#FFBB38] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease" />
      </div>
    </div>
  );
};

export default BoxProductTem;
