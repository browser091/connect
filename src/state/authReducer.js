import { auth } from "../components/api/api";
import { FORM_ERROR } from "final-form";
import { Form, Field } from "react-final-form";

const SETAUTHUSERDATA = "SETAUTHUSERDATA";

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SETAUTHUSERDATA:
         return {
            ...state,
            ...action.payload,
         };
      default:
         return state;
   }
};
export const setAuthUserData = (id, email, login, isAuth) => {
   return { type: SETAUTHUSERDATA, payload: { id, email, login, isAuth } };
};

export const setAuthThunkCreator = () => {
   return (dispatch) => {
      auth.me().then((data) => {
         if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
         }
      });
   };
};
export const setLoginThunkCreator = (email, password, rememberMe) => {
   return (dispatch) => {
      auth.login(email, password, rememberMe).then((data) => {
         if (data.resultCode === 0) {
            dispatch(setAuthThunkCreator());
         } else {
            let message =
               data.messages.length > 0 ? data.messages[0] : "Some error";

            return { [FORM_ERROR]: "message" };
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

export default authReducer;
