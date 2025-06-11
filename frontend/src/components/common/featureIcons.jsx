import { IoCartOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineLockPerson } from "react-icons/md";
import { GoTrophy } from "react-icons/go";

const FeatureIcons = () => {
  const features = [
    {
      title: "free shipping",
      desc: "Free Shipping on Payment",
      icon: <IoCartOutline className="h-full w-full" />,
    },
    {
      title: "return policy",
      desc: "24 Hours Return Policy",
      icon: <GiReturnArrow className="h-full w-full" />,
    },
    {
      title: "secured payment",
      desc: "Secure Card Payments",
      icon: <MdOutlineLockPerson className="h-full w-full" />,
    },
    {
      title: "best quality",
      desc: "Best Quality Products",
      icon: <GoTrophy className="h-full w-full" />,
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 gap-3 md:px-6 xl:px-[75px] px-2 py-5 sm:grid-cols-2 md:gap-5 lg:py-[60px] md:py-6 lg:h-[110px] lg:grid-cols-4 lg:gap-0 lg:px-10">
      {features.map(({ title, desc, icon }) => (
        <div key={title} className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center text-[#FFBB38]">
            {icon}
          </div>
          <div className="ml-5">
            <p className="mb-1 text-[15px] font-bold capitalize">{title}</p>
            <p className="text-sm text-[#797979]">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureIcons;
