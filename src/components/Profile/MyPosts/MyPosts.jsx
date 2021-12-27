import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
   // debugger;
   return (
      <div className={s.myPosts}>
         <h3> My post</h3>
         <div>
            <div>
               <textarea value={props.newPostText} />
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <Post posts={props.posts} />
      </div>
   );
};
export default MyPosts;
