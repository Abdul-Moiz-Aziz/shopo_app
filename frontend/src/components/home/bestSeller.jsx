import { ImArrowRight2 } from "react-icons/im";
import BestSellingBrands from "../common/bestSellingBrands";

const BestSeller = () => {
  return (
    <div className="w-full md:mb-[60px] mb-[30px]">
      <div className="w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px]">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[30px] font-medium text-[#1d1d1d] capitalize">
            best seller
          </h1>
          <a href="/best-seller">
            <div className="flex items-center">
              <span className="mr-1 font-medium text-[#222222] capitalize">
                view more
              </span>
              <span>
                <ImArrowRight2 className="h-6 w-[18px] font-normal" />
              </span>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 xl:grid-cols-6 xl:gap-[30px]">
         <BestSellingBrands />
         <BestSellingBrands />
         <BestSellingBrands />
         <BestSellingBrands />
         <BestSellingBrands />
         <BestSellingBrands />
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
