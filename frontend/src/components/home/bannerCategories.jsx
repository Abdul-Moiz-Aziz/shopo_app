import { Link } from "react-router-dom";

const BannerCategories = () => {
  const bannerCategory = [
    "electronics",
    "game",
    "mobile",
    "lifestyle",
    "babies & toys",
    "bike",
    "men's fashion",
    "woman fashion",
  ];
  return (
    <div className="mt-[30px] md:mt-[60px]">
      <div className="grid w-full grid-cols-2 gap-[30px] md:grid-cols-4 xl:grid-cols-8">
        {bannerCategory.map((category) => (
          <div key={category} className="hover:scale-110 duration-200">
            <Link to={"/" + category}>
              <div className="h-[120px] w-full flex items-center justify-center bg-amber-200">
                <span>img</span>
              </div>
              <p className="mt-[15px] text-center text-[#797979] capitalize">
                {category}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCategories;
