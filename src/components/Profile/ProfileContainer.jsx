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

class ProfileContainer extends React.Component {
   componentDidMount() {
      // debugger;
      let userId = this.props.userId;
      if (!userId) {
         userId = 21906;
      }
      this.props.setPrfileThunkCreator(userId);
      this.props.getProfileStatusThunkCreator(userId);
   }
   render() {
      return <Profile {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      profileStatus: state.profilePage.profileStatus,
   };
};

export default compose(
   connect(mapStateToProps, {
      setPrfileThunkCreator,
      getProfileStatusThunkCreator,
      updateProfileStatusThunkCreator,
   }),
   withRouter
   // withAuthRedirect
)(ProfileContainer);
