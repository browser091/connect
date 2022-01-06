import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";

class Users extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://social-network.samuraijs.com/api/1.0/users")
         .then((response) => this.props.setUsers(response.data.items));
   }

   render() {
      return (
         <>
            {this.props.users.map((user) => {
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
                           onClick={() => {
                              console.log("ee");
                              this.props.unfollow(user.id);
                           }}
                        >
                           Follow
                        </button>
                     ) : (
                        <button
                           onClick={() => {
                              this.props.follow(user.id);
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
   }
}

export default Users;
