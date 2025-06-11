import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="w-full">
      <div className="mb-[30px] flex flex-col gap-2 xl:h-[600px] xl:flex-row xl:gap-[30px]">
        <div className="flex h-[220px] items-center bg-[url('https://shopo.mamunuiux.com/uploads/custom-images/slider-2022-10-27-01-36-44-4193.png')] bg-cover bg-center pl-[30px] md:h-[500px] xl:h-full xl:w-[740px]">
          <div className="flex flex-col">
            <h2 className="mb-[15px] flex h-7 items-center justify-center rounded-2xl bg-white text-[10px] font-medium uppercase md:mb-[30px] md:w-[150px] md:text-xs">
              <span>new released</span>
            </h2>
            <div className="mb-[15px] md:mb-[30px]">
              <p className="text-[20px] text-[#222222] capitalize md:text-[50px]">
                headphone
              </p>
              <h1 className="text-[20px] font-bold text-[#222222] capitalize md:text-[50px]">
                JBL music
              </h1>
            </div>
            <div>
              <Link
                to="/shop"
                className="text-sm font-medium text-[#2222222] capitalize"
              >
                <div className="flex items-center gap-2">
                  <span>shop now</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </div>
                <div className="mt-1 h-[2px] w-20 bg-[#FFBB35]"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-1 gap-2 xl:flex-col xl:gap-[30px]">
          <div className="flex h-[150px] w-1/2 items-center bg-[url('https://shopo.mamunuiux.com/uploads/website-images/Mega-menu-2022-10-27-01-41-46-7345.png')] bg-cover bg-center pl-[30px] md:h-[350px] xl:h-1/2 xl:w-full xl:pl-10 home-banner">
            <div className="flex flex-col">
              <h2 className="mb-[15px] flex h-7 items-center justify-center rounded-2xl bg-white text-[10px] font-medium uppercase shadow-sm md:mb-[22px] md:w-20 md:text-xs">
                <span>gaming</span>
              </h2>
              <div className="mb-3 md:mb-[30px]">
                <h1 className="leading-none font-medium text-[#222222] capitalize md:mb-3 md:text-[30px]">
                  apple
                </h1>
                <h1 className="font-medium text-[#222222] capitalize md:text-[30px]">
                  smart watch
                </h1>
              </div>
              <div>
                <Link
                  to="/shop"
                  className="text-sm font-medium text-[#2222222] capitalize"
                >
                  <div className="flex items-center gap-2">
                    <span>shop now</span>
                    <span>
                      <MdKeyboardArrowRight />
                    </span>
                  </div>
                  <div className="mt-1 h-[2px] w-20 bg-[#FFBB35]"></div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-[150px] w-1/2 items-center bg-[url('https://shopo.mamunuiux.com/uploads/website-images/Mega-menu-2022-10-27-01-42-01-1798.png')] bg-cover bg-center pl-[30px] md:h-[350px] xl:h-1/2 xl:w-full xl:pl-10 home-banner">
            <div className="flex flex-col">
              <h2 className="mb-[15px] flex h-7 items-center justify-center rounded-2xl bg-white text-[10px] font-medium uppercase shadow-sm md:mb-[22px] md:w-20 md:text-xs">
                <span>gaming</span>
              </h2>
              <div className="mb-3 md:mb-[30px]">
                <h1 className="leading-none font-medium text-[#222222] capitalize md:mb-3 md:text-[30px]">
                  xbox
                </h1>
                <h1 className="font-medium text-[#222222] capitalize md:text-[30px]">
                  5th version
                </h1>
              </div>
              <div>
                <Link
                  to="/shop"
                  className="text-sm font-medium text-[#2222222] capitalize"
                >
                  <div className="flex items-center gap-2">
                    <span>shop now</span>
                    <span>
                      <MdKeyboardArrowRight />
                    </span>
                  </div>
                  <div className="mt-1 h-[2px] w-20 bg-amber-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
