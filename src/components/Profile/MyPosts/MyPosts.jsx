import React from "react";
import { Form, Field } from "react-final-form";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
   const onSubmit = (value) => {
      console.log(value);
      props.addPost(value.newPostText);
   };

   return (
      <div className={s.myPosts}>
         <h3>My post</h3>
         <AddPostForm onSubmit={onSubmit} />
         <Post posts={props.posts} />
      </div>
   );
};
export default MyPosts;

const AddPostForm = (props) => {
   return (
      <Form onSubmit={props.onSubmit}>
         {({ handleSubmit, pristine, form, submitting }) => (
            <form onSubmit={handleSubmit}>
               <div>
                  <Field
                     name="newPostText"
                     component="textarea"
                     type="text"
                     placeholder="Add new post"
                  />
               </div>
               <div>
                  <button>Add post</button>
               </div>
            </form>
         )}
      </Form>
   );
};
