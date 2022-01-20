import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";

const Users = (props) => {
   if (props.users.length === 0) {
      axios
         .get("https://social-network.samuraijs.com/api/1.0/users", {
            withCredentials: true,
         })
         .then((response) => props.setUsers(response.data.items));
   }

   return (
      <>
         {props.users.map((user) => {
            return (
               <div key={user.id}>
                  <div>{user.name}</div>
                  <div>
                     <img
                        alt="lll"
                        className={style.avatar}
                        src={
                           user.photos.small != null
                              ? user.photo.small
                              : tempUserPhoto
                        }
                     />
                  </div>
                  <div>{user.status}</div>
                  {user.follow ? (
                     <button
                        key={Date.now()}
                        onClick={() => {
                           props.unfollow(user.id);
                        }}
                     >
                        Follow
                     </button>
                  ) : (
                     <button
                        key={Date.now()}
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
