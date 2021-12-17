import "./App.css";
import React from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";

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
                        <Dialogs
                           data={props.state.dialogsPage}
                           addMesageState={props.addMesageState}
                        />
                     }
                  />
                  <Route
                     path="/profile"
                     element={<Profile data={props.state.profilePage} />}
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
