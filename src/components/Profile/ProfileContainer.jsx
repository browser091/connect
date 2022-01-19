import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../state/profilePageReducer";
import { useMatch, useParams } from "react-router";

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
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0//profile/` + userId,
            {
               withCredentials: true,
            }
         )
         .then((response) => {
            this.props.setUserProfile(response.data);
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
