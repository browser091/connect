import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setPrfileThunkCreator } from "../../state/profilePageReducer";
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
      this.props.setPrfileThunkCreator(userId);
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
export default connect(mapStateToProps, { setPrfileThunkCreator })(WithRouter);
