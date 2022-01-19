import { combineReducers, createStore } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   sidebar: sidebarReducer,
   usersPage: userReducer,
   authUser: authReducer,
});
let store = createStore(reducers);
export default store;
window.store = store;
