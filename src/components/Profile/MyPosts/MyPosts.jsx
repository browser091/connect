import React, {useRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostStateActionCreator, updatePostActionCreator} from "../../../state/state";

const MyPosts = (props) => {
    // debugger;
    let post = useRef()
    const addPost = () => {
        let valuePost = post.current.value
        props.dispatch(addPostStateActionCreator(valuePost))
    }
    const getPost = () => {
        props.dispatch(updatePostActionCreator(post.current.value))
    }
    return (
        <div className={s.myPosts}>
            <h3> My post</h3>
            <div>
                <div>
                    <textarea ref={post} value={props.newPostText} onChange={getPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <Post posts={props.posts}/>
        </div>
    );
};
export default MyPosts;
