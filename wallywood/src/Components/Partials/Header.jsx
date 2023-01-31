import { HeaderStyle } from "../Styled/Header.style.js";
import NavBarPrimary from "./NavBarPrimary";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">Wallywood</Link>
      <NavBarPrimary />
    </HeaderStyle>
  );
};

export default Header;
