import { RxCross2 } from "react-icons/rx";
import { useQuickView } from "../../context/QuickViewContext";
import { GoHeart } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

const QuickViewWrapper = () => {
  const { product, closeQuickView } = useQuickView();

  if (!product) return null;

  return (
    <div class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <div class="fixed right-0 left-0 h-full w-full bg-black opacity-25"></div>
      <div
        class="relative h-full w-full overflow-y-scroll rounded bg-white px-3 pt-[80px] pb-[40px] sm:px-[38px] md:mx-10 md:mt-10 lg:py-[40px] xl:mt-[50px] mt-5 mx-5 xl:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="h-full w-full overflow-y-scroll quick-view-container">
          <div class="grid w-full grid-cols-1 justify-between lg:grid-cols-2">
            <div class="lg:mr-[50px] xl:mr-[70px]">
              <div class="w-full">
                <div class="relative mb-3 flex h-[350px] w-full items-center justify-center overflow-hidden border border-[#EFEFEF] md:h-[600px]">
                  <span class="h-full w-full">
                    <img
                      src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fcustom-images%2Frolex-watch-prices-drop-amid-rising-2024-10-23-10-04-42-1316.webp&w=1920&q=75"
                      class="h-full w-full"
                      alt=""
                    />
                  </span>
                  <div class="absolute top-[30px] left-[30px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FFBB38] text-xl font-medium text-[#222222]">
                    <span class="text-[#222222]">-41%</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  <div class="relative h-[110px] w-[110px] cursor-pointer border border-[#efefef] p-[15px]">
                    <span class="h-full w-full">
                      <img
                        src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fcustom-images%2Frolex-watch-prices-drop-amid-rising-2024-10-23-10-04-42-1316.webp&w=1920&q=75"
                        alt=""
                        class="h-full w-full"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="mt-10 w-full lg:mt-0">
                <span class="aos-init aos-animate mb-2 inline-block text-xs font-normal tracking-wider text-[#797979] uppercase">
                  Apple
                </span>
                <p
                  data-aos="fade-up"
                  class="mb-4 text-xl font-medium text-[#222222]"
                >
                  Rolex Watch Drop Amid Rising
                </p>
                <div class="mb-6 flex items-center space-x-[10px]">
                  <div className="flex items-center">
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
                  <span class="text-[13px] font-normal text-[#222222]">
                    0 Reviews
                  </span>
                </div>
                <div class="mb-7 flex items-baseline space-x-2">
                  <span class="text-[15px] font-semibold text-[#797979] line-through">
                    <span>
                      <span>340.00$</span>
                    </span>
                  </span>
                  <span class="ml-2 text-[24px] font-semibold text-[#EF262C]">
                    <span>200.00$</span>
                  </span>
                </div>
                <div class="mb-[30px]">
                  <div class="text-normal line-clamp-2 text-sm leading-7 text-[#797979]">
                    Investors in high-end Swiss watch brands, including Rolex,
                    are witnessing a significant trend: prices in the secondhand
                    market are falling, and supply is increasing.
                  </div>
                  <button type="button" class="text-xs font-bold text-blue-500">
                    See More
                  </button>
                </div>
                <div class="mb-[30px] flex w-fit items-center space-x-2 bg-[#FFBB38]/10 p-3">
                  <span class="text-base font-bold text-[#222222]">
                    Availability :
                  </span>
                  <span class="text-base font-bold text-[#FFBB38]">
                    0 Products Available
                  </span>
                </div>
                <div class="mb-[30px] flex h-[50px] w-full items-center space-x-[10px]">
                  <div class="flex h-full w-[120px] items-center border border-[#EFEFEF] px-[26px]">
                    <div class="flex w-full items-center justify-between">
                      <button type="button" class="text-base text-[#797979]">
                        -
                      </button>
                      <span class="text-[#222222]">1</span>
                      <button type="button" class="text-base text-[#797979]">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="flex h-full w-[60px] items-center justify-center border border-[#EFEFEF]">
                    <button className="cursor-pointer">
                      <span class="flex h-7 w-7 items-center justify-center">
                        <GoHeart className="h-full w-full" />
                      </span>
                    </button>
                  </div>
                  <div class="h-full flex-1">
                    <button
                      type="button"
                      class="h-full cursor-pointer w-full bg-[#222222] text-sm font-semibold text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div class="mb-[20px]">
                  <p class="text-[13px] leading-7 text-[#797979]">
                    <span class="text-[#222222]">Category :</span>
                    Electronics
                  </p>
                  <p class="text-[13px] leading-7 text-[#797979]">
                    <span class="text-[#222222] uppercase">SKU:</span>
                  </p>
                </div>
                <div class="mb-[20px] flex items-center space-x-2 text-[#EF262C]">
                  <span>ic</span>
                  <button type="button" class="text-[13px] font-semibold">
                    Report This Item
                  </button>
                </div>
                <div class="mb-[20px] flex w-full items-center">
                  <span class="mr-[17px] inline-block text-[13px] text-[#222222]">
                    Share This
                  </span>
                  <div class="flex items-center space-x-5">
                    <button>
                      <span class="h-4 w-4 cursor-pointer">ic</span>
                    </button>
                    <button>
                      <span class="h-4 w-4 cursor-pointer">ic</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="absolute top-3 right-3" onClick={closeQuickView}>
          <span class="flex h-12 w-12 items-center justify-center rounded border border-[#EF262C] text-[#EF262C]">
            <RxCross2 className="h-full w-full" />
          </span>
        </button>
      </div>
    </div>
  );
};
export default QuickViewWrapper;
