import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";

const BottomHeader = () => {
      return (
        <div className="h-[60px] w-full bg-amber-300">
          <div className="flex h-full w-full items-center justify-between text-sm md:px-10 xl:px-[75px]">
            <div className="flex h-full items-end gap-5">
              <div className="rounded-tl-md rounded-tr-md bg-white h-[53px] w-[270px]">
                <button className="flex h-full w-full cursor-pointer items-center justify-between px-4 font-medium text-[#1d1d1d] capitalize">
                  <span className="ml-3 flex items-center gap-2">
                    <span>
                      <HiBars3CenterLeft className="h-5 w-5" />
                    </span>
                    all categories
                  </span>
                  <span className="mr-3">
                    <MdKeyboardArrowDown className="h-5 w-5" />
                  </span>
                </button>
              </div>
              <div className="h-full">
                <ul className="flex h-full gap-6">
                  <li className="flex h-full items-center justify-center px-2">
                    <Link
                      to="/shop"
                      className="font-medium text-[#222222] capitalize"
                    >
                      shop
                    </Link>
                  </li>
                  <li className="flex h-full items-center justify-center px-2">
                    <Link
                      to="/blog"
                      className="font-medium text-[#222222] capitalize"
                    >
                      blogs
                    </Link>
                  </li>
                  <li className="flex h-full items-center justify-center px-2">
                    <Link
                      to="/about-us"
                      className="font-medium text-[#222222] capitalize"
                    >
                      about
                    </Link>
                  </li>
                  <li className="flex h-full items-center justify-center px-2">
                    <Link
                      to="/contact-us"
                      className="font-medium text-[#222222] capitalize"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      );
}
export default BottomHeader;