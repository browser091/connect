import "./App.css";
import React from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import store from "./state/state";

function App(props) {
   // debugger;
   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <Sidebar data={props.state.sidebar} />
            <div className="content">
               <Routes>
                  <Route
                     path="/dialogs/*"
                     element={
                        <DialogsContainer store={props.store}
                           data={props.state.dialogsPage}
                           dispatch={props.dispatch}
                        />
                     }
                  />
                  <Route
                     path="/profile"
                     element={<Profile data={props.state.profilePage}
                     dispatch={props.dispatch}/>}
                  />

                  <Route path="/news" element={<News />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/music" element={<Music />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}
export default App;
