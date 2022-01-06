import { connect } from "react-redux";
import Users from "./UsersClass";
import { followAC, unfollowAC, setUsersAC } from "../../state/userReducer";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
   };
};
export const UsersContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Users);
