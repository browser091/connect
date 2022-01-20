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
            ...action.data,
            isAuth: true,
         };
      default:
         return state;
   }
};
export const setAuthUserData = (id, email, login) => {
   return { type: SETAUTHUSERDATA, data: { id, email, login } };
};

export default authReducer;
