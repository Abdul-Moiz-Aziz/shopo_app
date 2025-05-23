const FeatureIcons = () => {
  const features = [
    { title: "free shipping", desc: "Free Shipping on Payment" },
    { title: "return policy", desc: "24 Hours Return Policy" },
    { title: "secured payment", desc: "Secure Card Payments" },
    { title: "best quality", desc: "Best Quality Products" },
  ];
  return (
    <div className="grid w-full grid-cols-1 gap-3 bg-white px-5 py-5 sm:grid-cols-2 sm:px-5 sm:py-5 md:gap-5 md:px-[30px] md:py-[30px] lg:h-[110px] lg:grid-cols-4 lg:gap-0 lg:px-10">
      {features.map(({ title, desc, i }) => (
        <div key={title} className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center text-amber-300">
            <span> ic </span>
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
