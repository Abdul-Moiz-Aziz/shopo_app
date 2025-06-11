import { MdKeyboardArrowRight } from "react-icons/md";

const OneAdSection = () => {
return (
  <div className="w-full">
    <div className="mb-[30px] h-[190px] w-full px-2 md:mb-[60px] md:h-[295px] md:px-6 xl:px-[75px]">
      <div className="group flex h-full w-full items-center justify-center bg-[url('https://shopo.mamunuiux.com/uploads/website-images/Mega-menu-2022-10-27-01-43-51-3694.png')] bg-cover bg-no-repeat py-4 md:py-[40px] xl:py-[60px]">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <div>
            <div className="text-center md:mb-3">
              <span className="text-xs font-semibold text-[#222222] uppercase">
                headphone
              </span>
            </div>
            <div className="flex justify-center">
              <h1 className="w-[300px] text-center text-[20px] leading-7 font-semibold text-[#222222] md:text-[30px] md:leading-[40px]">
                Get the best deal for Headphones
              </h1>
            </div>
          </div>
          <div>
            <a href="/shop">
              <div className="relative flex h-[40px] justify-center overflow-hidden bg-white px-5">
                <div className="absolute top-0 -left-[240px] h-full w-full bg-[#FFBB35] transition-all duration-300 ease-in-out group-hover:left-0"></div>
                <div className="relative z-10 flex items-center space-x-1 rtl:space-x-reverse">
                  <span className="text-semibold text-sm text-[#FFBB35] capitalize transition-all duration-300 ease-in-out group-hover:text-white">
                    shop now
                  </span>
                  <span className="text-[#FFBB35] transition-all duration-300 ease-in-out group-hover:text-white">
                    <MdKeyboardArrowRight className="h-5 w-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default OneAdSection;