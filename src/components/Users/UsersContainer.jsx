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

   setPage = (e) => {
      debugger;
      let currentPage = e.target.innerText;
      this.props.setPage(currentPage);
      this.props.setIsFetching(true);
      usersAPI
         .getUsers(this.props.count, this.props.currentPage)
         .then((data) => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
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
