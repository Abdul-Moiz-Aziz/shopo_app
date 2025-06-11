import { ImArrowRight2 } from "react-icons/im";
import BoxProductTem from "../common/boxProductTem";

const TopRatedProducts = () => {
  return (
    <div className="w-full">
      <div className="w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px]">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[30px] font-medium text-[#1d1d1d] capitalize">
            popular category
          </h1>
          <a href="/view-more">
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
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-[30px]">
          <BoxProductTem />
          <BoxProductTem />
          <BoxProductTem />
          <BoxProductTem />
        </div>
      </div>
    </div>
  );
};
export default TopRatedProducts;
