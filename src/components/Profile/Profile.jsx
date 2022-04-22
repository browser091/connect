import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   // debugger;

   return (
      <div className={s.content}>
         <ProfileInfo
            submitImg={props.submitImg}
            profile={props.profile}
            profileStatus={props.profileStatus}
            updateProfileStatus={props.updateProfileStatusThunkCreator}
         />
         <MyPostsContainer
            store={props.store}
            //    newPostText={props.data.newPostText}
            //    dispatch={props.dispatch}
         />
      </div>
   );
};
export default Profile;
