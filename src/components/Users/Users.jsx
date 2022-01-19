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
      //   props.setUsers([
      //      {
      //         id: "1",
      //         name: "Dmitri",
      //         location: {
      //            city: "Minsk",
      //            country: "Belarus",
      //         },
      //         status: "i am good",
      //         img: "https://cdn-icons-png.flaticon.com/512/3/3729.png",
      //         follow: true,
      //      },
      //      {
      //         id: 2,
      //         name: "Pavel",
      //         location: {
      //            city: "Brest",
      //            country: "Belarus",
      //         },
      //         status: "i am good",
      //         img: "https://cdn-icons-png.flaticon.com/512/3/3729.png",
      //         follow: false,
      //      },
      //      {
      //         id: 3,
      //         name: "Dmitri",
      //         location: {
      //            city: "Vitebsk",
      //            country: "Belarus",
      //         },
      //         status: "i am good",
      //         img: "https://cdn-icons-png.flaticon.com/512/3/3729.png",
      //         follow: false,
      //      },
      //   ]);
   }

   return (
      <>
         {props.users.map((user) => {
            return (
               <div key={user.id}>
                  <div>{user.name}</div>
                  <div>
                     <img
                        className={style.avatar}
                        src={
                           user.photos.small != null
                              ? user.photo.small
                              : tempUserPhoto
                        }
                     />
                  </div>
                  <div>{user.status}</div>
                  {/* <div>
                     {user.location.country}, {user.location.city}
                  </div> */}
                  {user.follow ? (
                     <button
                        key={Date.now()}
                        onClick={() => {
                           console.log("ee");
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
