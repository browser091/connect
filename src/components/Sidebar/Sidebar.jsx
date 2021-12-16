import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = ({ data }) => {
   console.log(data.friends);
   return (
      <div className={css.sidebar}>
         {data.friends.map((f) => (
            <div className={css.friend}>
               <div className={css.img}>
                  <img src={f.img} alt="img" />
               </div>
               <div className={css.name}>{f.name}</div>
            </div>
         ))}
      </div>
   );
};
export default Sidebar;
