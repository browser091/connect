import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
   const logout = () => {
      props.setLogoutThunkCreator();
   };
   // debugger;
   return (
      <header className={s.header}>
         <i className="fas fa-child"></i>
         {props.authUser.isAuth ? (
            <div>
               <span>{props.authUser.login} - </span>
               <button onClick={logout}>LogOut</button>
            </div>
         ) : (
            <NavLink to="/login">Login</NavLink>
         )}
      </header>
   );
};
export default Header;
