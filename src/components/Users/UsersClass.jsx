import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import tempUserPhoto from "../../assets/images/tempUserPhoto.png";

class Users extends React.Component {
   componentDidMount() {
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`
         )
         .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
         });
   }

   render() {
      let pages = Math.ceil(this.props.totalCount / 100 / this.props.count);
      let pagesaArr = [];
      for (let i = 1; i <= pages; i++) {
         pagesaArr.push(i);
      }
      let setPage = (e) => {
         let currentPage = e.target.innerText;
         this.props.setPage(currentPage);
         axios
            .get(
               `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${currentPage}`
            )
            .then((response) => {
               this.props.setUsers(response.data.items);
               this.props.setTotalCount(response.data.totalCount);
            });
      };
      return (
         <>
            <div>
               {pagesaArr.map((p) =>
                  p == this.props.currentPage ? (
                     <button onClick={setPage} className={style.currentPage}>
                        {p}
                     </button>
                  ) : (
                     <button onClick={setPage}>{p}</button>
                  )
               )}
            </div>
            {this.props.users.map((user) => {
               return (
                  <div key={user.id}>
                     <div>{user.name}</div>
                     <div>
                        <img
                           className={style.avatar}
                           src={
                              user.photos.small != null
                                 ? user.photos.small
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
