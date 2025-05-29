const PageTitle = ({ title }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      <div className="w-full bg-[#FFBB38]/10 px-2 md:py-10 py-5 md:px-6 xl:px-[75px]">
        <div className="container-x mx-auto">
          <div className="mb-5 text-[13px] font-normal text-[#222222] print:hidden">
            <a href="/" className="mx-1 capitalize">
              home
            </a>
            <span className="sperator">/</span>
            <a href={`/${slug}`} className="mx-1 capitalize">
              {title}
            </a>
          </div>
          <div className="flex justify-center">
            <h1 className="sm:text-3xl text-2xl font-bold text-[#222222] capitalize">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
