import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";

const Users = (props) => {
   window.props = props;
   let pages = Math.ceil(props.totalCount / 100 / props.count);
   let pagesArr = [];
   for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
   }
   // debugger
   return (
      <>
         <div>
            {pagesArr.map((p) =>
               p == props.currentPage ? (
                  <button
                     key={p}
                     onClick={props.setPage}
                     className={style.currentPage}
                  >
                     {p}
                  </button>
               ) : (
                  <button key={p} onClick={props.setPage}>
                     {p}
                  </button>
               )
            )}
         </div>
         {props.users.map((user) => {
            return (
               <div key={user.id}>
                  <div>{user.name}</div>
                  <div>
                     <NavLink to={`/profile/${user.id}`}>
                        <img
                           className={style.avatar}
                           src={
                              user.photos.small != null
                                 ? user.photos.small
                                 : tempUserPhoto
                           }
                        />
                     </NavLink>
                  </div>
                  <div>{user.status}</div>
                  {/* <div>
                     {user.location.country}, {user.location.city}
                  </div> */}
                  {user.follow ? (
                     <button
                        onClick={() => {
                           console.log("ee");
                           props.unfollow(user.id);
                        }}
                     >
                        Follow
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           props.follow(user.id);
                        }}
                     >
                        Unfollow
                     </button>
                  )}
               </div>
            );
         })}
      </>
   );
};

export default Users;
