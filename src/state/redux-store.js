import { combineReducers, createStore } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
   sidebar: sidebarReducer,
   usersPage: userReducer,
   authUser: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
window.store = store;
