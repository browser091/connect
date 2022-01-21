import { connect } from "react-redux";
import Users from "./UsersClass";
import {
   follow,
   unfollow,
   setUsers,
   setTotalCount,
   setPage,
   setIsFetching,
   setFollowingInProgress,
} from "../../state/userReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../api/api";
import axios from "axios";
class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      usersAPI
         .getUsers(this.props.count, this.props.currentPage)
         .then((data) => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
         });
   }

   setPage = (pageNumber) => {
      // debugger;
      // let currentPage = +e.target.innerText;
      this.props.setPage(pageNumber);
      this.props.setIsFetching(true);
      // usersAPI
      //    .getUsers(this.props.count, this.props.currentPage)
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${pageNumber}`,
            {
               withCredentials: true,
            }
         )
         .then((response) => {
            // debugger;
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
                  {...this.props}
                  // totalCount={this.props.totalCount}
                  // users={this.props.users}
                  // unfollow={this.props.unfollow}
                  // follow={this.props.follow}
                  // count={this.props.count}
                  // currentPage={this.props.currentPage}
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
      followingInProgress: state.usersPage.followingInProgress,
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
export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setTotalCount,
   setPage,
   setIsFetching,
   setFollowingInProgress,
})(UsersContainer);
