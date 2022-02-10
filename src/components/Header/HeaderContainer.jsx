import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
   setAuthThunkCreator,
   setLogoutThunkCreator,
} from "../../state/authReducer";

class HeaderContainer extends React.Component {
   render() {
      return <Header {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      authUser: state.authUser,
   };
};
export default connect(mapStateToProps, {
   setAuthThunkCreator,
   setLogoutThunkCreator,
})(HeaderContainer);
