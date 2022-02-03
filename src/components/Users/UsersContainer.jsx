import { connect } from "react-redux";
import Users from "./UsersClass";
import {
   follow,
   unfollow,
   setPage,
   setFollowingInProgress,
   getUsersThunkCreator,
   setPageThunkCreator,
   setFollowThunkCreator,
   setUnFollowThunkCreator,
} from "../../state/userReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.count, this.props.currentPage);
      // this.props.setIsFetching(true);
      // usersAPI
      //    .getUsers(this.props.count, this.props.currentPage)
      //    .then((data) => {
      //       this.props.setIsFetching(false);
      //       this.props.setUsers(data.items);
      //       this.props.setTotalCount(data.totalCount);
      //    });
   }

   setPage = (pageNumber) => {
      this.props.setPageThunkCreator(pageNumber, this.props.count);
   };

   render() {
      // if (!this.props.isAuth) return <Navigate to="/login" />;
      return (
         <>
            {this.props.isFetching ? (
               <Preloader />
            ) : (
               <Users {...this.props} setPage={this.setPage} />
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
      // isAuth: state.authUser.isAuth,
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

// let withRedirect = withAuthRedirect(UsersContainer);
// export default connect(mapStateToProps, {
//    follow,
//    unfollow,
//    setPage,
//    setFollowingInProgress,
//    getUsersThunkCreator,
//    setPageThunkCreator,
//    setFollowThunkCreator,
//    setUnFollowThunkCreator,
// })(withRedirect);

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setPage,
      setFollowingInProgress,
      getUsersThunkCreator,
      setPageThunkCreator,
      setFollowThunkCreator,
      setUnFollowThunkCreator,
   }),
   withAuthRedirect
)(UsersContainer);
