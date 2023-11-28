import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Header.css";

const Header = () => {
  const login = localStorage.getItem("token");
  return (
    <div className="header">
      <h1>FRIENDS DATABASE</h1>
      {!login ? (
        <NavLink to="/">LOGIN.</NavLink>
      ) : (
        <NavLink to="/logout">LOGOUT.</NavLink>
      )}
      <NavLink to="/friends">FRIENDSLIST.</NavLink>
      <NavLink to="/friends/add" exact>
        ADDFRIEND.
      </NavLink>
    </div>
  );
};

export default Header;
