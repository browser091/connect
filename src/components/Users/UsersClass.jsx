import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";
import { userFollower } from "../api/api";

const Users = (props) => {
   // debugger;
   let pages = Math.ceil(props.totalCount / props.count / 100);
   let pagesArr = [];
   for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
   }
   // debugger;
   return (
      <>
         <div>
            {pagesArr.map((p) =>
               p === props.currentPage ? (
                  <button
                     // debugger
                     key={p}
                     onClick={() => {
                        props.setPage(p);
                     }}
                     className={style.currentPage}
                  >
                     {p}
                  </button>
               ) : (
                  <button
                     key={p}
                     onClick={() => {
                        props.setPage(p);
                     }}
                  >
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
                           alt="lll"
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
                  {user.followed ? (
                     <button
                        disabled={props.followingInProgress.some(
                           (u) => u === user.id
                        )}
                        onClick={() => {
                           props.setUnFollowThunkCreator(user.id);
                        }}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        disabled={props.followingInProgress.some(
                           (u) => u === user.id
                        )}
                        onClick={() => {
                           props.setFollowThunkCreator(user.id);
                        }}
                     >
                        Follow
                     </button>
                  )}
               </div>
            );
         })}
      </>
   );
};

export default Users;
