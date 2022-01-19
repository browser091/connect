import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
   //  debugger;
   return (
      <header className={s.header}>
         <i className="fas fa-child"></i>
         {props.authUser.isAuth ? (
            <div>{props.authUser.login}</div>
         ) : (
            <NavLink to="/login">Login</NavLink>
         )}
      </header>
   );
};
export default Header;
