import MainProductTem from "../common/mainProductTem";
import { ImArrowRight2 } from "react-icons/im";

const PopularCategory = () => {
  const product = {
    id: 1,
    name: "Xbox Wireless Game Controller",
    image: "https://via.placeholder.com/300x300",
    price: "11.11$",
    oldPrice: "20.00$",
    description: "Wireless controller with precise controls.",
    category: "Electronics",
    brand: "Xbox",
  };
  return (
    <div className="w-full">
      <div className="w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px]">
        <div className="flex items-center justify-between">
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
        <div className="mt-5 w-full">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]">
            <div className="w-full xl:block hidden">
              <div className="relative flex h-[445px] flex-col bg-amber-200 bg-[url('https://shopo.mamunuiux.com/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg')] p-[30px]">
                <div className="mb-2">
                  <h2 className="font-medium capitalize">popular category</h2>
                </div>
                <div>
                  <ul>
                    <li>
                      <a
                        href="/product"
                        className="text-[#797979] capitalize duration-150 hover:underline"
                      >
                        electronics
                      </a>
                    </li>
                    <li>
                      <a
                        href="/product"
                        className="text-[#797979] capitalize duration-150 hover:underline"
                      >
                        gaming
                      </a>
                    </li>
                    <li>
                      <a
                        href="/product"
                        className="text-[#797979] capitalize duration-150 hover:underline"
                      >
                        mobile
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    href="/shop"
                    className="text-sm font-medium text-[#222222] capitalize"
                  >
                    <span className="mr-1">shop now</span>
                    <span>ic</span>
                  </a>
                </div>
              </div>
            </div>
            <MainProductTem product={product} />
            <MainProductTem product={product} />
            <MainProductTem product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
