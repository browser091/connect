import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
   setPrfileThunkCreator,
   getProfileStatusThunkCreator,
   updateProfileStatusThunkCreator,
} from "../../state/profilePageReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";
import { useNavigate } from "react-router-dom";

class ProfileContainer extends React.Component {
   componentDidMount() {
      // debugger;
      let userId = this.props.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.setPrfileThunkCreator(userId);
      this.props.getProfileStatusThunkCreator(userId);
   }
   render() {
      // if (!this.props.userId) {
      //    useNavigate("/login");
      // }
      return <Profile {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      profileStatus: state.profilePage.profileStatus,
      authorizedUserId: state.authUser.id,
   };
};

export default compose(
   connect(mapStateToProps, {
      setPrfileThunkCreator,
      getProfileStatusThunkCreator,
      updateProfileStatusThunkCreator,
   }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);
