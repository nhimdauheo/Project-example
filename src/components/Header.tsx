import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
const Header = () => {
  return (
    <NavLink to='/sample.com'>
      <div className="header_logo">
        <img className="logo" src={logo} />
      </div>
    </NavLink>
  );
};

export default Header;
