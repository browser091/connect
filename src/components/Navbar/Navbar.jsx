import React from "react";
import s from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div><a href="#">Profile</a></div>
      <div><a href="#">Mesages</a></div>
      <div><a href="#">News</a></div>
      <div><a href="#">Music</a></div>
      <div><a href="#">Seattings</a></div>


    </nav>
  )
}
export default Navbar