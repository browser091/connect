import { connect } from "react-redux";
import Users from "./UsersClass";
import {
   follow,
   unfollow,
   setUsers,
   setTotalCount,
   setPage,
   setIsFetching,
} from "../../state/userReducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersLogic extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`,
            {
               withCredentials: true,
            }
         )
         .then((response) => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
         });
   }

   setPage = (e) => {
      let currentPage = e.target.innerText;
      this.props.setPage(currentPage);
      this.props.setIsFetching(true);

      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${currentPage}`,
            {
               withCredentials: true,
            }
         )
         .then((response) => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
         });
   };

   render() {
      // debugger
      return (
         <>
            {this.props.isFetching ? (
               <Preloader />
            ) : (
               <Users
                  totalCount={this.props.totalCount}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  count={this.props.count}
                  currentPage={this.props.currentPage}
                  setPage={this.setPage}
               />
            )}
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      count: state.usersPage.count,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(follow(userId)),
//         unfollow: (userId) => dispatch(unfollow(userId)),
//         setUsers: (users) => dispatch(setUsers(users)),
//         setTotalCount: (totalCount) => dispatch(setTotalCount(totalCount)),
//         setPage: (currentPage) => dispatch(setPage(currentPage)),
//         setIsFetching: (isFetching) => dispatch(setIsFetching(isFetching))
//     };
// };
export const UsersContainer = connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setTotalCount,
   setPage,
   setIsFetching,
})(UsersLogic);
