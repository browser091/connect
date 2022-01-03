const ADD_POST_STATE = "ADD_POST_STATE";
const UPDATE_POST = "UPDATE_POST";
let initialState ={
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
};
const profilePageReducer = (state=initialState, action) => {
   switch (action.type) {
      case ADD_POST_STATE:
         let tempPost = {
            id: Date.now(),
            post: action.newPost,
            like: 28,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
         };
         state.posts.push(tempPost);
         state.newPostText = "";
         return state;
      case UPDATE_POST:
         state.newPostText = action.newText;
         return state;
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
export default profilePageReducer;