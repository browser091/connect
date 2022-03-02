import { auth } from "../components/api/api";
import { FORM_ERROR } from "final-form";

const SETAUTHUSERDATA = "SETAUTHUSERDATA";
const INITIALIZED_SUCSESS = "INITIALIZED_SUCSESS";

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   initialized: false,
   // authorizedUserId: null,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SETAUTHUSERDATA:
         return {
            ...state,
            ...action.payload,
         };
      case INITIALIZED_SUCSESS:
         return {
            ...state,
            initialized: true,
         };
      default:
         return state;
   }
};
export const setAuthUserData = (id, email, login, isAuth, authorizedUserId) => {
   return {
      type: SETAUTHUSERDATA,
      payload: { id, email, login, isAuth, authorizedUserId },
   };
};

export const setInitializedSuccsess = () => {
   return { type: INITIALIZED_SUCSESS };
};

export const setAuthThunkCreator = () => {
   return (dispatch) => {
      return auth.me().then((data) => {
         if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
      });
   };
};
export const setLoginThunkCreator = (email, password, rememberMe) => {
   return (dispatch) => {
     return auth.login(email, password, rememberMe).then((data) => {
         if (data.resultCode === 0) {
            dispatch(setAuthThunkCreator());
         } else {
            // debugger
             let message =data.messages.length > 0 ? data.messages[0] : "Some error";
            return {[FORM_ERROR]:message}
            // return console.log(message)
         }
      });
   };
};

export const setLogoutThunkCreator = () => {
   return (dispatch) => {
      auth.logout().then((data) => {
         if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
         }
      });
   };
};
export const setInitializedSuccsessThunkCreator = () => {
   return (dispatch) => {
      const promise = dispatch(setAuthThunkCreator());
      Promise.all([promise]).then(() => dispatch(setInitializedSuccsess()));
   };
};

export default authReducer;
