import Post from "./Post/Post";
import {
   addPostStateActionCreator,
   updatePostActionCreator,
} from "../../../state/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
   // debugger;
   let state = props.store.getState().profilePage;

   const addPost = (valuePost) => {
      props.store.dispatch(addPostStateActionCreator(valuePost));
   };
   const getPost = (value) => {
      props.store.dispatch(updatePostActionCreator(value));
   };
   return (
      <>
         <MyPosts state={state} addPost={addPost} getPost={getPost} />
         <Post posts={state.posts} />
      </>
   );
};
export default MyPostsContainer;
