import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>FRIENDS DATABASE</h1>
      <NavLink to="/login">LOGIN.</NavLink>
      <NavLink to="/friend-list">FRIENDLIST.</NavLink>
      <NavLink to="/add-friends">ADDFRIEND.</NavLink>
      <NavLink to="/">LOGOUT.</NavLink>
    </div>
  );
};

export default Header;
