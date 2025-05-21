import { Link } from "react-router-dom";
import TopHeader from "./topHeader";
import MidHeader from "./midHeader";
import BottomHeader from "./bottomHeader";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MidHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
