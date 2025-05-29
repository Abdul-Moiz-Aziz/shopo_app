import { Link } from "react-router-dom";

const MainFooter =      () => {
      return (
        <div className="mb-[50px] justify-between lg:flex">
          <div className="mb-10 ml-0 w-full lg:mb-0 lg:w-[424px]">
            <h1 className="mb-5 text-lg font-medium text-[#2F2F2F] capitalize">
              about us
            </h1>
            <p className="w-[247px] text-[15px] leading-[28px] text-[#9A9A9A]">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>
          <div className="flex-1 lg:flex">
            <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
              <div className="mb-5">
                <h6 className="text-lg font-medium text-[#2F2F2F]">Feature</h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link rel="noopener noreferrer" to="/about">
                      <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link rel="noopener noreferrer" to="/terms-condition">
                      <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                        Terms & Condition
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      to="/products?highlight=best_product"
                    >
                      <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                        Best Products
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-10 w-full items-center lg:mb-0 lg:flex lg:w-1/3 lg:flex-col">
              <div>
                <div className="mb-5">
                  <h6 className="text-lg font-medium text-[#2F2F2F]">
                    General Links
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link rel="noopener noreferrer" to="/blog">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          blog
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" to="/shop">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          shop
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link rel="noopener noreferrer" to="/support">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          support
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10 w-full items-center lg:mb-0 lg:flex lg:w-1/3 lg:flex-col">
              <div>
                <div className="mb-5">
                  <h6 className="text-lg font-medium text-[#2F2F2F]">
                    Helpful
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link to="/privacy-policy">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          privacy policy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products?highlight=popular_category">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          popular category
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <span className="cursor-pointer border-b border-transparent text-[15px] text-[#9A9A9A] capitalize hover:border-[#222222] hover:text-[#222222]">
                          contact us
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default MainFooter;