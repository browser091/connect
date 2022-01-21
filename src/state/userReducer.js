const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SETUSERS = "SETUSERS";
const SETTOTALCOUNT = "SETTOTALCOUNT";
const SETPAGE = "SETPAGE";
const SETISFETCHING = "SETISFETCHING";
const FOLLOWINGINPROGRESS = "FOLLOWINGINPROGRESS";

let initialState = {
   users: [],
   totalCount: 0,
   count: 6,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [21906],
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            }),
         };

      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
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
      case SETISFETCHING:
         return { ...state, isFetching: action.isFetching };
      case FOLLOWINGINPROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         };
      default:
         return state;
   }
};
export const follow = (userId) => {
   return { type: UNFOLLOW, userId };
};
export const unfollow = (userId) => {
   return { type: FOLLOW, userId };
};
export const setUsers = (users) => {
   return { type: SETUSERS, users };
};
export const setTotalCount = (totalCount) => {
   return { type: SETTOTALCOUNT, totalCount };
};
export const setPage = (currentPage) => {
   return { type: SETPAGE, currentPage };
};
export const setIsFetching = (isFetching) => {
   return { type: SETISFETCHING, isFetching };
};
export const setFollowingInProgress = (isFetching, userId) => {
   return {
      type: FOLLOWINGINPROGRESS,
      isFetching,
      userId,
   };
};
export default userReducer;
