import SmallProductTem from "../common/smallProductTem";

const BestProductsSection = () => {
  return (
    <div className="mb-[30px] w-full md:mb-[60px]">
      <div className="w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px]">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[30px] font-medium text-[#1d1d1d] capitalize">
            best products
          </h1>
          <a href="/best-products">
            <div>
              <span className="mr-1 font-medium text-[#222222] capitalize">
                view more
              </span>
              <span className="h-[14px] w-[17px]">ic</span>
            </div>
          </a>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 xl:gap-[30px]">
            <div>
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
            </div>
            <div>
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
            </div>
            <div>
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
              <SmallProductTem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestProductsSection;
