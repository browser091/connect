import React from "react";
import Header from "./Header";
import axios from "axios";
import { auth } from "../api/api";
import { connect } from "react-redux";
import { setAuthThunkCreator } from "../../state/authReducer";

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.setAuthThunkCreator();
      console.log("dwddwd");
   }
   render() {
      return <Header {...this.props} />;
   }
}

const mapStateToProps = (state) => {
   return {
      authUser: state.authUser,
   };
};
export default connect(mapStateToProps, { setAuthThunkCreator })(
   HeaderContainer
);
