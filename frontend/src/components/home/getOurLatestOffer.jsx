import { CiMail } from "react-icons/ci";

const GetOurLatestOffer = () => {
  return (
    <div className="flex h-[307px] w-full items-center justify-center bg-[url('https://shopo.mamunuiux.com/uploads/website-images/banner-2022-09-25-05-12-43-6914.png')] bg-cover bg-no-repeat print:hidden">
      <div>
        <div>
          <h1 className="mb-2 text-center text-xl font-bold text-[#222222] sm:text-3xl">
            Get our latest offer
          </h1>
          <p className="text-center text-sm sm:text-[18px]">by subscription</p>
        </div>
        <div className="mt-8 flex h-[54px] w-[300px] sm:w-[543px]">
          <div className="flex h-full flex-1 items-center space-x-2 bg-white text-[#222222] focus-within:text-[#FFBB35] ltr:pl-4 rtl:space-x-reverse rtl:pr-4">
            <span>
              <CiMail className="h-5 w-5" />
            </span>
            <input
              type="email"
              name="email"
              className="h-full w-full text-sm font-normal text-[#222222] placeholder:text-xs placeholder:text-[#222222] focus:outline-none"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <button
            type="button"
            className="h-full w-[80px] bg-[#FFBB35] text-sm font-semibold sm:w-[158px]"
          >
            Get the Coupon
          </button>
        </div>
      </div>
    </div>
  );
};
export default GetOurLatestOffer;
