import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./components/common/SideBar";
import AdminHeader from "./components/common/AdminHeader";
import BodyHeader from "./components/common/BodyHeader";
import Orders from "./pages/orders/Orders";
import Settings from "./pages/settings/Settings";
import DashBoard from "./pages/dashboard/DashBoard";
import "./App.css";
import AddProduct from "./pages/inventory/AddProduct";
import Inventory from "./pages/inventory/Inventory";
import EditProduct from "./pages/inventory/EditProduct";
import Users from "./pages/users/Users";
import UserForm from "./components/common/UserForm";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const location = useLocation();

  // Generate title and subtitle from URL
  const pathSegments = location.pathname.split("/").filter(Boolean); // remove empty parts
  const title = pathSegments[0]
    ? pathSegments[0].replace(/-/g, " ")
    : "home";
  const subtitle = pathSegments[1]
    ? pathSegments[1].replace(/-/g, " ")
    : "";

  return (
    <div className="h-full w-full bg-[#F5F7FA]">
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <AdminHeader setSideBarOpen={setSideBarOpen} />
      <div className="ml-0 px-5 md:px-10 pb-[50px] transition-all">
        <div className="mx-auto">
          <div className="w-full">
            <BodyHeader title={title} subtitle={subtitle} />
            <Routes>
              <Route path="/" exact element={<DashBoard />} />
              <Route path="/home" element={<DashBoard />} />
              <Route path="/users/*" element={<Users />} />
              <Route path="/users/add-user" element={<UserForm />} />
              <Route
                path="/inventory/manage-inventory/*"
                element={<Inventory />}
              />
              <Route path="/inventory/add-product" element={<AddProduct />} />
              <Route path="/inventory/edit-product/:productId" element={<EditProduct />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:status" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
