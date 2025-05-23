import { Link } from "react-router-dom";

const ShopByBrand = () => {
  const brandImages = [
    "images1",
    "images2",
    "images3",
    "images4",
    "images5",
    "images6",
    "images7",
    "images8",
    "images9",
    "images10",
    "images11",
    "images12",
  ];
  return (
    <div className="w-full">
      <div className="w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px]">
        <div>
          <h1 className="text-[30px] text-[#1d1d1d] font-medium">
            Shop by Brand
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 mt-5">
          {brandImages.map((image, i) => (
            <div
              key={i}
              className="w-full h-[130px] bg-amber-100 border border-gray-400 border-solid"
            >
              <Link
                className="w-full h-full flex justify-center items-center hover:scale-150 duration-300"
                to={"/image"}
              >
                <span>{image}</span>
              </Link>
            </div>
          ))}
          {}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrand;
