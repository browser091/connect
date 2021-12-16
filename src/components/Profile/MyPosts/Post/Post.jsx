import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
   // debugger;
   return (
      <div className={s.post}>
         {props.posts.map((p) => {
            return (
               <div key={p.id}>
                  <div>
                     <img className={s.avatar} src={p.img} alt="img" />
                  </div>
                  <div>{p.post}</div>
                  <div className="like">{p.like}</div>
               </div>
            );
         })}
      </div>
   );
};
export default Post;
