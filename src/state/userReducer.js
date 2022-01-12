const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SETUSERS = "SETUSERS";
const SETTOTALCOUNT = "SETTOTALCOUNT";
const SETPAGE = "SETPAGE";

let initialState = {
   users: [],
   totalCount: "0",
   count: "6",
   currentPage: "1",
};

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
      case SETTOTALCOUNT:
         return { ...state, totalCount: action.totalCount };
      case SETPAGE:
         return { ...state, currentPage: action.currentPage };

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
export const setTotalCountAC = (totalCount) => {
   return { type: SETTOTALCOUNT, totalCount };
};
export const setPageAC = (currentPage) => {
   return { type: SETPAGE, currentPage };
};
export default userReducer;
