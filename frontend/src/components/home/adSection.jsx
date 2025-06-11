import { MdKeyboardArrowRight } from "react-icons/md";

const AdSection = () => {
  return (
    <div className="w-full">
      <div className="mb-[30px] w-full px-2 md:mb-[60px] md:px-6 md:h-[295px] xl:px-[75px]">
        <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]">
          <div className="relative flex h-full w-full flex-col justify-between bg-[url('https://shopo.mamunuiux.com/uploads/website-images/Mega-menu-2022-10-27-01-43-02-7910.png')] bg-cover bg-no-repeat py-[35px] ltr:pl-[30px] sm:ltr:pl-[50px] rtl:pr-[30px] sm:rtl:pr-[50px]">
            <div>
              <div className="mb-[22px]">
                <p className="text-xs font-medium text-[#222222] uppercase">
                  headset
                </p>
              </div>
              <div className="mb-2.5 lg:mb-[30px]">
                <p className="text-[20px] leading-none font-semibold text-[#222222] capitalize lg:mb-3 lg:text-[30px]">
                  beat wireless
                </p>
                <h1 className="text-[20px] font-semibold text-[#222222] capitalize lg:text-[30px] lg:leading-[40px]">
                  headphone
                </h1>
              </div>
            </div>
            <div>
              <a
                href="/shop"
                className="text-sm font-medium text-[#222222] capitalize"
              >
                <span className="flex items-center gap-1">
                  <span>shop now</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>
                <div className="mt-1 h-[2px] w-20 bg-[#FFBB35]"></div>
              </a>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col justify-between bg-[url('https://shopo.mamunuiux.com/uploads/website-images/Mega-menu-2022-10-27-01-43-27-5225.png')] bg-cover bg-no-repeat py-[35px] ltr:pl-[30px] sm:ltr:pl-[50px] rtl:pr-[30px] sm:rtl:pr-[50px]">
            <div>
              <div className="mb-[22px]">
                <p className="text-xs font-medium text-[#222222] uppercase">
                  smart watch
                </p>
              </div>
              <div className="mb-2.5 lg:mb-[30px]">
                <p className="text-[20px] leading-none font-semibold text-[#222222] capitalize lg:mb-3 lg:text-[30px]">
                  samsung
                </p>
                <h1 className="text-[20px] font-semibold text-[#222222] capitalize lg:text-[30px] lg:leading-[40px]">
                  smart watch II
                </h1>
              </div>
            </div>
            <div>
              <a
                href="/shop"
                className="text-sm font-medium text-[#222222] capitalize"
              >
                <span className="flex items-center gap-1">
                  <span>shop now</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </span>
                <div className="mt-1 h-[2px] w-20 bg-[#FFBB35]"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdSection;
