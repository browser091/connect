import { profileAPI } from "../components/api/api";

const ADD_POST_STATE = "ADD_POST_STATE";
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
   posts: [
      {
         id: 1,
         post: "ssc ssdew rtyty rf d cd",
         like: 8,
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
      },
      {
         id: 2,
         post: "ssc ssdew ",
         like: 0,
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
      },
      {
         id: 3,
         post: "ssc ssdew dcd d dc dc ddcrtyty rf d cd",
         like: 28,
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
      },
   ],
   newPostText: "xaxa",
   profile: null,
};
const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST_STATE:
         // let tempPost = {
         //    id: Date.now(),
         //    post: action.newPost,
         //    like: 28,
         //    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
         // };
         // debugger;

         return {
            ...state,
            posts: [
               ...state.posts,
               {
                  id: Date.now(),
                  post: action.newPost,
                  like: 28,
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
               },
            ],

            newPostText: "",
         };
      // let stateCopy = { ...state };
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(tempPost);
      // stateCopy.newPostText = "";
      // return stateCopy;
      case UPDATE_POST: {
         return {
            ...state,
            newPostText: action.newPostText,
         };
         // let stateCopy = { ...state };
         // stateCopy.newPostText = action.newText;
         // return stateCopy;
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }
      default:
         return state;
   }
};
export const addPostStateActionCreator = (valuePost) => {
   return { type: ADD_POST_STATE, newPost: valuePost };
};
export const updatePostActionCreator = (valueText) => {
   return { type: UPDATE_POST, newText: valueText };
};
export const setUserProfile = (profile) => {
   return { type: SET_USER_PROFILE, profile: profile };
};

export const setPrfileThunkCreator = (userId) => {
   return (dispatch) => {
      profileAPI.getProfileID(userId).then((data) => {
         dispatch(setUserProfile(data));
      });
   };
};
export default profilePageReducer;
