import React, { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
   //    debugger;
   let post = useRef();
   const addPost = () => {
      let valuePost = post.current.value;
      props.addPost(valuePost);
   };
   const getPost = () => {
      let value = post.current.value;
      props.getPost(value);
   };
   return (
      <div className={s.myPosts}>
         <h3>My post</h3>
         <div>
            <div>
               <textarea
                  ref={post}
                  value={props.newPostText}
                  onChange={getPost}
               />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <Post posts={props.posts} />
      </div>
   );
};
export default MyPosts;
