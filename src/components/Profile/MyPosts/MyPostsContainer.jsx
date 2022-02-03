import { addPostStateActionCreator } from "../../../state/profilePageReducer";
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
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   };
};
const mapDispatchToProps = (dispatch) => {
   // debugger;
   return {
      addPost: (valuePost) => dispatch(addPostStateActionCreator(valuePost)),
   };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
