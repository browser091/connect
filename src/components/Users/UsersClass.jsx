import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";
import axios from "axios";

const Users = (props) => {
   // debugger;
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
                           axios
                              .delete(
                                 `https://social-network.samuraijs.com/api/1.0/follow/` +
                                    user.id,
                                 {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY":
                                          "e308b533-37d3-49ee-9102-f4683aac1a03",
                                    },
                                 }
                              )
                              .then((response) => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(user.id);
                                 }
                              });
                        }}
                     >
                        Unfollow
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           axios
                              .post(
                                 `https://social-network.samuraijs.com/api/1.0/follow/` +
                                    user.id,
                                 {},
                                 {
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY":
                                          "e308b533-37d3-49ee-9102-f4683aac1a03",
                                    },
                                 }
                              )
                              .then((response) => {
                                 if (response.data.resultCode === 0) {
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
