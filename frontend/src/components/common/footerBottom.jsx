import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between border-t border-[#EFEFEF] lg:h-[82px] lg:flex-row">
      <div className="mb-3 flex items-center justify-between space-x-2.5 lg:space-x-5 rtl:space-x-reverse">
        <div className="flex items-center space-x-5 rtl:space-x-reverse">
          <Link to="/facebook">
            <span>
              <FaFacebookF className="text-[#1877F2]" />
            </span>
          </Link>
          <Link to="/twitter">
            <span>
              <FaTwitter className="text-[#1DA1F2]" />
            </span>
          </Link>
          <Link to="/linkedin" className="text-[#0077B5]">
            <span>
              <FaLinkedinIn />
            </span>
          </Link>
        </div>
        <span className="font-300 text-[10px] text-[#797979] sm:text-base">
          ©2022 Quomodosoft All rights reserved
        </span>
      </div>
      <div className="mt-2 lg:mt-0">
        <Link to="/">
          <span>
            <img
              src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fshopo.mamunuiux.com%2Fuploads%2Fwebsite-images%2Fpayment-card-2022-09-26-12-59-29-8933.png&w=384&q=75"
              alt=""
            />
          </span>
        </Link>
      </div>
    </div>
  );
};
export default FooterBottom;
