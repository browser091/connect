import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = ({ data }) => {
   return (
      <div className={css.sidebar}>
         {data.friends.map((f) => (
            <div key={f.id} className={css.friend}>
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
