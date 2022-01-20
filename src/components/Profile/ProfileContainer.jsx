import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../state/profilePageReducer";
import { profileAPI } from "../api/api";
import { useParams } from "react-router";
const WithRouter = (props) => {
   let { userId } = useParams();
   return <ProfileContainer {...props} userId={userId} />;
};

class ProfileContainer extends React.Component {
   componentDidMount() {
      // debugger;
      let userId = this.props.userId;
      if (!userId) {
         userId = 2;
      }

      profileAPI.getProfileID(userId).then((data) => {
         this.props.setUserProfile(data);
      });
   }
   render() {
      return <Profile {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   };
};
export default connect(mapStateToProps, { setUserProfile })(WithRouter);
