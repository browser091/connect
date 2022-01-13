import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../state/profilePageReducer";

class ProfileContainer extends React.Component {
   componentDidMount() {
      // this.props.setIsFetching(true);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
         .then((response) => {
            // this.props.setIsFetching(false);
            this.props.setUserProfile(response.data);
         });
   }
   render() {
      // debugger;
      return <Profile {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
   };
};
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
