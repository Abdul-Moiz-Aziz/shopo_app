const AboutContent = () => {
  return (
    <div className="w-full py-10 bg-[#f8f8f8]">
      <div className="md:px-6 xl:px-[75px] px-2 w-full">
        <div className="min-h-[665px] w-full items-center pb-10 lg:flex lg:space-x-12 lg:pb-0 rtl:space-x-reverse">
          <div className="relative my-5 h-auto w-full overflow-hidden rounded md:h-[560px] md:w-[570px] lg:my-0">
            <img
              src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fcustom-images%2Fabout-us-2022-09-22-04-39-05-2348.png&w=1920&q=75"
              alt="About"
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="flex-1 text-[#797979]">
            <h1 className="mb-4 text-[30px] font-semibold text-[#222222]">
              What is e-commerce business?
            </h1>
            <p className="mb-4 text-justify leading-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the on leap into
              electronic typesetting.
            </p>
            <ul className="list-none custom-list text-justify">
              <li className="my-[15px]">Slim body with metal cover</li>
              <li className="my-[15px]">
                Latest Intel Core i5-1135G7 processor
              </li>
              <li className="my-[15px]">
                8GB DDR4 RAM and fast 512GB PCIe SSD
              </li>
              <li className="my-[15px]">NVIDIA GeForce MX350 graphics card</li>
              <li className="my-[15px]">Hello hello hello Prashant sir?</li>
            </ul>
            <a
              href="/contact"
              className="mt-5 inline-block bg-[#FFBB38] px-5 py-2 font-semibold text-[#1D1D1D]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
