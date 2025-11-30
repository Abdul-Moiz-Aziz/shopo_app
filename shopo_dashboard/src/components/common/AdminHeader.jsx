import { CiBellOn } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const AdminHeader = ({ setSideBarOpen }) => {
  return (
    <header className="sticky top-0 left-0 z-[5000] flex w-full items-center bg-white">
      <div className="flex w-full items-center">
        <div className="flex h-[100px] w-full items-center justify-between gap-[25px] border-b border-b-[#E2E7F1] px-5 md:px-10">
          <button
            className="relative h-10 w-10 min-w-[30px] cursor-pointer rounded-[4px] bg-[#6176FE] text-center leading-[30px] text-white"
            onClick={() => {
              setSideBarOpen((prev) => !prev);
            }}
          >
            <span className="flex items-center justify-center h-full w-full">
              <HiMiniBars3CenterLeft className="h-6 w-6" />
            </span>
          </button>
          <div className="hidden items-center lg:flex">
            {/* <!-- Search Form --> */}
            <div>
              <form
                action="#"
                className="relative w-[340px] max-w-full xl:w-[270px]"
              >
                <button
                  type="submit"
                  className="absolute right-0 h-full w-auto pr-5 cursor-pointer rounded-l-none rounded-r-[4px] border-none bg-transparent p-0 text-[#6176FE]"
                >
                  <span>
                    <IoSearchOutline className="h-6 w-6" />
                  </span>
                </button>
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  className="h-[52px] w-full rounded-[5px] bg-[#F3F4F7] px-[20px] pr-[60px] text-[14px] focus:outline-0"
                />
              </form>
            </div>
            {/* <!-- End Search Form --> */}
          </div>
          <div className="flex items-center justify-end gap-[35px] xl:gap-[30px]">
            <div className="flex items-center justify-end gap-[25px]">
              <div>
                <div className="flex items-center justify-end gap-3 md:gap-5 xl:gap-[30px]">
                  <div className="group relative w-max cursor-pointer rounded-full text-center">
                    <button
                      id="sherah-dark-light-button"
                      className="m-0 border-none bg-none p-0 shadow-none"
                    >
                      <span>
                        <TbMessage className="h-6 w-6" />
                      </span>
                    </button>
                    {/* <!-- Notification dot --> */}
                    <span className="absolute top-[-8px] right-[-8px] flex h-4 w-4 items-center justify-center rounded-full bg-[#09AD955C]">
                      <span className="block h-full w-full animate-ping rounded-full bg-[#09AD9A]"></span>
                    </span>

                    {/* <!-- Dropdown card --> */}
                    <div className="invisible absolute top-[62px] right-[-30px] z-[5000] min-w-[280px] translate-y-12 rounded-md border border-gray-300 bg-white text-left opacity-0 shadow-lg transition-all duration-400 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="border-b border-gray-300 px-8 py-5 text-lg font-semibold">
                        Recent Message
                      </h3>

                      <ul className="flex max-h-80 flex-col space-y-4 overflow-y-auto px-6 py-6">
                        {/* <!-- Single List Item --> */}
                        <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                          <div className="flex items-center gap-5">
                            <div className="relative">
                              <img
                                src="img/chat-author1.png"
                                alt="#"
                                className="h-12 w-12 rounded-full object-cover"
                              />
                              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-600"></span>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold">
                                Jamen Oliver
                              </h4>
                              <p className="text-sm text-gray-600">
                                Hey! You forgot your keys....
                              </p>
                            </div>
                          </div>
                        </li>

                        <li className="flex items-center justify-between border-b border-gray-200 pb-3">
                          <div className="flex items-center gap-5">
                            <div className="relative">
                              <img
                                src="img/chat-author2.png"
                                alt="#"
                                className="h-12 w-12 rounded-full object-cover"
                              />
                              <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-gray-400"></span>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold">
                                Orian Heho
                              </h4>
                              <p className="text-sm text-gray-600">
                                How are you?
                              </p>
                            </div>
                          </div>
                          <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                            5
                          </span>
                        </li>

                        {/* <!-- Add more list items similarly --> */}
                      </ul>

                      <div className="px-6 pb-6">
                        <a
                          href="chat-messages.html"
                          className="block text-center font-semibold text-green-600 hover:underline"
                        >
                          {" "}
                          See all Notification{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="group relative inline-block">
                    {/* <!-- Icon and badge --> */}
                    <button className="relative focus:outline-none">
                      <span>
                        <CiBellOn className=" h-8 w-7" />
                      </span>
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6176FE] px-2 py-1 text-xs leading-none font-bold text-white">
                        4
                      </span>
                    </button>

                    {/* <!-- Dropdown menu (modified for animation) --> */}
                    <div className="invisible absolute top-[65px] right-[-30px] z-[5000] min-w-[280px] translate-y-12 rounded-md border border-gray-300 bg-white text-left opacity-0 shadow-lg transition-all duration-400 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                        Recent Notification
                      </h3>

                      <ul className="max-h-72 divide-y divide-gray-200 overflow-y-auto">
                        {/* <!-- Notification item --> */}
                        <li className="flex cursor-pointer px-4 py-3 hover:bg-gray-50">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
                              icon
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900">
                              You have an offer!{" "}
                              <span className="font-normal text-green-600">
                                successfully done
                              </span>
                            </h4>
                            <p className="text-xs text-gray-500">
                              20 minutes ago
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="group relative flex cursor-pointer items-center gap-4">
                    {/* <!-- Profile Image --> */}
                    <div className="max-w-[62px]">
                      <img
                        src="https://quomodothemes.website/shopo/admin/img/profile-pic.png"
                        className="h-[45px] min-h-[45px] w-[45px] min-w-[45px] rounded-full object-cover"
                      />
                    </div>

                    {/* <!-- Author Info --> */}
                    <div className="flex flex-col items-start gap-1">
                      <h4 className="flex flex-col items-start text-base">
                        Anthony
                        <span className="text-sm text-gray-500">USA</span>
                      </h4>
                      {/* <!-- icon placeholder --> */}
                      <div>{/* <!-- icon here --> */}</div>
                    </div>

                    {/* <!-- Dropdown Card --> */}
                    <div className="invisible absolute top-[73px] right-10 z-50 w-[260px] translate-y-12 rounded-md border border-gray-300 bg-white opacity-0 shadow-lg transition-all duration-400 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="border-b border-gray-300 px-8 py-5 text-lg font-semibold">
                        My Profile
                      </h3>
                      <ul className="flex flex-col space-y-4 p-6">
                        <li className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                              <span>
                                <IoPersonOutline className="h-6 w-6" />
                              </span>
                            </div>
                            <h4 className="text-lg leading-6 font-normal">
                              <a
                                href="profile-info.html"
                                className="hover:underline"
                              >
                                My Profile
                              </a>
                            </h4>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                              <span>
                                <TbMessage className="h-6 w-6" />
                              </span>
                            </div>
                            <h4 className="text-lg leading-6 font-normal">
                              <a
                                href="chat-messages.html"
                                className="hover:underline"
                              >
                                Message
                              </a>
                            </h4>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                              <span>
                                <IoSettingsOutline className="h-6 w-6" />
                              </span>
                            </div>
                            <h4 className="text-lg leading-6 capitalize font-normal">
                              <a
                                href="chat-messages.html"
                                className="hover:underline"
                              >
                                settings
                              </a>
                            </h4>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                              <span>
                                <IoMdLogOut className="h-6 w-6" />
                              </span>
                            </div>
                            <h4 className="text-lg capitalize leading-6 font-normal">
                              <a
                                href="chat-messages.html"
                                className="hover:underline"
                              >
                                log out
                              </a>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AdminHeader;
