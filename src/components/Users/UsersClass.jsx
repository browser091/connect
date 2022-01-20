import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";
import { userFollower } from "../api/api";

const Users = (props) => {
   let pages = Math.ceil(props.totalCount / 100 / props.count);
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
                        // disabled={props.followingInProgress.some(
                        //    (id) => id === user.id
                        // )}
                        onClick={() => {
                           props.setFollowingInProgress(true);
                           userFollower.userUnfollow(user.id).then((data) => {
                              props.setFollowingInProgress(false);
                              if (data.resultCode === 0) {
                                 props.unfollow(user.id);
                              }
                           });
                        }}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        // disabled={props.followingInProgress.some(
                        //    (id) => id === user.id
                        // )}
                        onClick={() => {
                           props.setFollowingInProgress(true);
                           userFollower.userFollow(user.id).then((data) => {
                              props.setFollowingInProgress(false);
                              if (data.resultCode === 0) {
                                 props.follow(user.id);
                              }
                           });
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
