import { NavBarPrimaryStyle } from "./NavBarPrimary.style.js";
import { NavLink } from "react-router-dom";

const NavBarPrimary = () => {
  return (
    <NavBarPrimaryStyle>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/posters">POSTERS</NavLink>
        </li>
        <li>
          <NavLink to="/about_us">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </NavBarPrimaryStyle>
  );
};

export default NavBarPrimary;
