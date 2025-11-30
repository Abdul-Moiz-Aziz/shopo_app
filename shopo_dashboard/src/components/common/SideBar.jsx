import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuBlocks, LuUserRound } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const path = location.pathname;
    const section = path.split("/")[1]; // Gets 'inventory', 'orders', etc.
    setActiveSection(section);
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 z-[6000] h-full w-[240px]  ${
        sideBarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-[#E2E7F1] transition-all duration-300 ease-in-out  xl:w-[250px]`}
    >
      {/* Header */}
      <div className="flex min-h-[100px] items-center justify-between px-5">
        <Link to="/">
          <img
            src="https://quomodothemes.website/shopo/admin/img/logo.png"
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setSideBarOpen(false)}
          className="relative h-10 w-10 min-w-[30px] flex justify-center items-center cursor-pointer rounded-[4px] bg-[#6176FE] text-center"
        >
          <RxCross2 className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="pt-[25px] pb-[30px] pl-5">
        <ul className="flex flex-col gap-[2px]">
          {/* Dashboard */}
          <li>
            <Link
              to="/home"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "home" && "/" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <LuBlocks className="h-6 w-6" />
                </span>
                <span>Dashboard</span>
              </span>
            </Link>
          </li>
          {/* Users */}
          <li>
            <Link
              to="/users/manage-users"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "users" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <LuUserRound className="h-6 w-6" />
                </span>
                <span>Users</span>
              </span>
            </Link>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "users" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="pl-[30px]">
                <li>
                  <Link
                    to="/users/manage-users"
                    className={`block py-2  ${
                      location.pathname === "/users/manage-users"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Manage All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users/add-user"
                    className={`block py-2 ${
                      location.pathname === "/users/add-user"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Add User
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Inventory */}
          <li>
            <Link
              to="/inventory/manage-inventory"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "inventory" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <MdOutlineInventory2 className="h-6 w-6" />
                </span>
                <span>Inventory</span>
              </span>
            </Link>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "inventory" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className="pl-[30px]">
                <li>
                  <Link
                    to="/inventory/manage-inventory"
                    className={`block py-2  ${
                      location.pathname === "/inventory/manage-inventory"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Manage All Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inventory/add-product"
                    className={`block py-2 ${
                      location.pathname === "/inventory/add-product"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Add Products
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Orders */}
          <li>
            <Link
              to="/orders/unshipped"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "orders" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <TbShoppingBag className="h-6 w-6" />
                </span>
                <span>Orders</span>
              </span>
            </Link>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeSection === "orders" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <ul className=" pl-[30px]">
                <li>
                  <Link
                    to="/orders/pending"
                    className={`block py-2 ${
                      location.pathname === "/orders/pending"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Pending
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/unshipped"
                    className={`block py-2 ${
                      location.pathname === "/orders/unshipped"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Unshipped
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/canceled"
                    className={`block py-2  ${
                      location.pathname === "/orders/canceled"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Canceled
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/shipped"
                    className={`block py-2  ${
                      location.pathname === "/orders/shipped"
                        ? "text-[#222222] font-semibold"
                        : "text-[#878f9a] "
                    }`}
                  >
                    Shipped
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Settings */}
          <li>
            <Link
              to="/settings"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "settings" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <IoSettingsOutline className="h-6 w-6" />
                </span>
                <span>Settings</span>
              </span>
            </Link>
          </li>
          {/* log Out */}
          <li>
            <Link
              to="/logout"
              className={`flex w-full items-center rounded-l-full py-4 pr-10 pl-5 text-[18px] text-[#6176FE] ${
                activeSection === "logout" ? "bg-[#EBF0FF]" : ""
              }`}
            >
              <span className="flex items-center">
                <span className="mr-3">
                  <IoMdLogOut className="h-6 w-6" />
                </span>
                <span>Log Out</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
