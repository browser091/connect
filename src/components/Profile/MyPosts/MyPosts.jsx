import React, { useRef } from "react";
import s from "./MyPosts.module.css";

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
         <h3> My post</h3>
         <div>
            <div>
               <textarea
                  ref={post}
                  value={props.state.newPostText}
                  onChange={getPost}
               />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
      </div>
   );
};
export default MyPosts;
