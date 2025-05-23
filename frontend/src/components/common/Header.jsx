import { Link } from "react-router-dom";
import TopHeader from "./topHeader";
import MidHeader from "./midHeader";
import BottomHeader from "./bottomHeader";
import ShopDrawer from "./shopDrawer";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MidHeader />
      <ShopDrawer />
      <BottomHeader />
    </header>
  );
};

export default Header;
