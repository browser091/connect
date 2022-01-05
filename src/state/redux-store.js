import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";

let reducers=combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsPageReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer
})
let store = createStore(reducers)
export default store
window.store = store;
