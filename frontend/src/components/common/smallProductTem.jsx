const SmallProductTem = ({ product }) => {
      return (
        <div className="h-[105px] w-full border border-[#F8F8F8] bg-white px-5">
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-full w-[75px]">
              <span>
                <img
                  src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fcustom-images%2Frolex-watch-prices-drop-amid-rising-2024-10-23-10-04-42-1316.webp&w=3840&q=75"
                  className="h-full w-full object-cover"
                />
              </span>
            </div>
            <div className="ml-5 flex h-full flex-1 flex-col justify-center">
              <a href="/single-product">
                <p className="font-600 mb-2 cursor-pointer text-[13px] font-semibold text-[#222222] hover:text-blue-600 sm:text-[15px]">
                  rolex watch drop amid rising
                </p>
              </a>
              <div className="text-lg font-semibold">
                <span className="text-[#797979] mr-1">
                  <span>340.00</span>
                  <span>$</span>
                </span>
                <span className="text-[#EF262C]">
                  <span>240.00</span>
                  <span>$</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
}
export default SmallProductTem;