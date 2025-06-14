import { BiExpand } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdStar } from "react-icons/io";
import { useQuickView } from "../../context/QuickViewContext";

const MainProductTem = ({product}) => {
  const { openQuickView } = useQuickView();
  return (
    <div className="w-full">
      <div className="relative flex h-[445px] flex-col bg-white product-container overflow-hidden group">
        <div className="relative flex h-[300px] items-center justify-center product-image-container">
          <div> image </div>
          <button
            className="absolute top-[10%] right-[-20%] flex h-10 w-10 items-center justify-center bg-[#f7f7f7] transition-[background-color,color,right] duration-150 hover:bg-[#FFBB38] hover:text-white rounded-sm product-features-btn right-btn cursor-pointer"
            onClick={() => openQuickView(product)}
          >
            <BiExpand className="h-6 w-6" />
          </button>
          <button className="absolute top-[27.5%] right-[-20%] flex h-10 w-10 items-center justify-center bg-[#f7f7f7] transition-[background-color,color,right] duration-150 hover:bg-[#FFBB38] hover:text-white rounded-sm product-features-btn second right-btn cursor-pointer">
            <GoHeart className="h-6 w-6" />
          </button>
        </div>
        <div className="relative flex-1 px-[30px] pt-2 pb-[30px]">
          <div className="absolute bottom-[-50%] left-0 h-10 w-full px-[30px] transition-[bottom] duration-300 ease-in-out add-to-cart-btn">
            <div className="flex h-10 items-center justify-center bg-[#FFBB38]">
              <button className="relative h-full w-full group flex items-center overflow-hidden justify-center transition-colors duration-300">
                <span className="relative z-10 flex items-center text-[#222] group-hover:text-white transition-colors duration-200">
                  <HiOutlineShoppingBag className="h-4 w-[14px]" />
                  <span className="ml-2 text-[13px] font-medium capitalize">
                    add to cart
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="mb-3 flex items-center">
            <span>
              <IoMdStar className="h-5 w-5 text-[#D2D8E1]" />
            </span>
            <span>
              <IoMdStar className="h-5 w-5 text-[#D2D8E1]" />
            </span>
            <span>
              <IoMdStar className="h-5 w-5 text-[#D2D8E1]" />
            </span>
            <span>
              <IoMdStar className="h-5 w-5 text-[#D2D8E1]" />
            </span>
            <span>
              <IoMdStar className="h-5 w-5 text-[#D2D8E1]" />
            </span>
          </div>
          <div className="mb-2">
            <p className="text-base font-medium text-[#222222] capitalize">
              <a href="/product"> Xbox Wireless Game Controller </a>
            </p>
          </div>
          <div>
            <p className="text-lg font-medium">
              <span className="text-[#797979] mr-2">11.11$</span>
              <span className="text-[#EF2626]">11.11$</span>
            </p>
          </div>
        </div>
        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#FFBB38] scale-x-0 transition-transform duration-500 ease  group-hover:scale-x-100 "></span>
        <span className="absolute top-0 left-0 h-[1px] w-full bg-[#FFBB38] scale-x-0 group-hover:scale-x-100  transition-transform duration-500 ease"></span>
        <span className="absolute top-0 right-0  h-full w-[1px] bg-[#FFBB38] transition-transform duration-500 ease group-hover:scale-y-100 scale-y-0"></span>
        <span className="absolute top-0 left-0 h-full w-[1px] bg-[#FFBB38] transition-transform duration-500 ease group-hover:scale-y-100 scale-y-0"></span>
      </div>
    </div>
  );
};

export default MainProductTem;
