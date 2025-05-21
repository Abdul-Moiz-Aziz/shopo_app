import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="flex h-10 items-center justify-between text-xs font-medium md:px-10 xl:px-[75px] border-b border-gray-200 border-solid">
      <div className="capitalize">
        <Link to="/login">account</Link>
        <Link to="/track-order" className="md:ml-6">
          track order
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-between">
          <span>
            <CiMobile3 />
          </span>
          <span className="ml-2">+00 00000 000 000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>
            <FaRegEnvelope />
          </span>
          <span className="ml-2">admin@gmail.com</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="uppercase ml-2">usd</span>
          <span className="ml-1 text-sm">
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="capitalize ml-2">select</span>
          <span className="ml-1 text-sm">
            <MdKeyboardArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
