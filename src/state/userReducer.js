const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SETUSERS = "SETUSERS";

let initialState = { users: [] };

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, follow: true };
               }
               return user;
            }),
         };

      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, follow: false };
               }
               return user;
            }),
         };
      case SETUSERS:
         return { ...state, users: [...action.users] };

      default:
         return state;
   }
};
export const followAC = (userId) => {
   return { type: UNFOLLOW, userId };
};
export const unfollowAC = (userId) => {
   return { type: FOLLOW, userId };
};
export const setUsersAC = (users) => {
   return { type: SETUSERS, users };
};
export default userReducer;
