import { Link } from "react-router-dom";
import MainFooter from "./mainFooter";
import FooterBottom from "./footerBottom";

const Footer = () => {
  return (
    <footer className="bg-white print:hidden">
      <div className="w-full px-2 pt-[56px] md:px-6 xl:px-[75px]">
        <div className="mb-[50px] flex w-full flex-col items-center">
          <div className="mb-[50px] flex w-full flex-col items-center">
            <div className="mb-[40px]">
              <Link to="/">
                <span>
                  <img src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fwebsite-images%2Flogo-2024-10-23-07-53-11-7233.webp&w=256&q=75" />
                </span>
              </Link>
            </div>
            <div className="h-[1px] w-full bg-[#E9E9E9]"></div>
          </div>
        </div>
        <MainFooter />
        <FooterBottom />
      </div>
    </footer>
  );
};
export default Footer;
