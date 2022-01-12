import { connect } from "react-redux";
import Users from "./UsersClass";
import {
   followAC,
   unfollowAC,
   setUsersAC,
   setTotalCountAC,
   setPageAC,
} from "../../state/userReducer";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      count: state.usersPage.count,
      currentPage: state.usersPage.currentPage,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
      setPage: (currentPage) => dispatch(setPageAC(currentPage)),
   };
};
export const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Users);
