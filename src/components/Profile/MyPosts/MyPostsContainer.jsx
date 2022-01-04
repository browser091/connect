import Post from "./Post/Post";
import {
   addPostStateActionCreator,
   updatePostActionCreator,
} from "../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//    // debugger;
//    let state = props.store.getState().profilePage;

//    const addPost = (valuePost) => {
//       props.store.dispatch(addPostStateActionCreator(valuePost));
//    };
//    const getPost = (value) => {
//       props.store.dispatch(updatePostActionCreator(value));
//    };
//    return (
//       <>
//          <MyPosts state={state} addPost={addPost} getPost={getPost} />
//          <Post posts={state.posts} />
//       </>
//    );
// };

const mapStateToProps = (state) => {
   // debugger;

   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (valuePost) => dispatch(addPostStateActionCreator(valuePost)),
      getPost: (value) => dispatch(updatePostActionCreator(value)),
   };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
