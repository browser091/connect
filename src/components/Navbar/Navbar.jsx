import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/profile"
            >
               Profile
            </NavLink>
         </div>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/dialogs"
            >
               Messages
            </NavLink>
         </div>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/users"
            >
               Users
            </NavLink>
         </div>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/news"
            >
               News
            </NavLink>
         </div>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/music"
            >
               Music
            </NavLink>
         </div>
         <div>
            <NavLink
               className={({ isActive }) => (isActive ? `${s.active}` : "")}
               to="/settings"
            >
               Settings
            </NavLink>
         </div>
      </nav>
   );
};
export default Navbar;
