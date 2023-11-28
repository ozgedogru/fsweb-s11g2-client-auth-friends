import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>FRIENDS DATABASE</h1>
      <NavLink to="/">LOGIN.</NavLink>
      <NavLink to="/friends">FRIENDSLIST.</NavLink>
      <NavLink to="/friends/add" exact>
        ADDFRIEND.
      </NavLink>
      <NavLink to="/">LOGOUT.</NavLink>
    </div>
  );
};

export default Header;
