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
   refreshUserId = () => {
      let userId = this.props.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.setPrfileThunkCreator(userId);
      this.props.getProfileStatusThunkCreator(userId);
   };
   componentDidMount() {
      this.refreshUserId();
   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.userId != this.props.userId) {
         this.refreshUserId();
      }
   }
   submitImg = () => {
      console.log("submit Img");
   };

   render() {
      return <Profile {...this.props} submitImg={this.submitImg} />;
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
