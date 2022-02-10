import "./App.css";
import React from "react";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
// import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { setInitializedSuccsessThunkCreator } from "./state/authReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withRouter } from "./hoc/withRouter";

class App extends React.Component {
   componentDidMount() {
      this.props.setInitializedSuccsessThunkCreator();
   }

   render() {
      if (!this.props.initialized) return <Preloader />;

      return (
         <BrowserRouter>
            <div className="app-wrapper">
               <HeaderContainer />
               <Navbar />
               {/* <Sidebar data={props.state.sidebar} /> */}
               <div className="content">
                  <Routes>
                     <Route path="/dialogs/*" element={<DialogsContainer />} />
                     <Route path="/profile" element={<ProfileContainer />} />
                     <Route
                        path="/profile/:userId"
                        element={<ProfileContainer />}
                     />
                     <Route path="login" element={<Login />} />
                     <Route path="/news" element={<News />} />
                     <Route path="/settings" element={<Settings />} />
                     <Route path="/music" element={<Music />} />
                     <Route path="/users" element={<UsersContainer />} />
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      initialized: state.authUser.initialized,
   };
};

export default compose(
   withRouter,
   connect(mapStateToProps, { setInitializedSuccsessThunkCreator })
)(App);
