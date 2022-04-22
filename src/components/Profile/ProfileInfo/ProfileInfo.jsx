import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../../assets/images/tempUserPhoto.png";

const ProfileInfo = (props) => {
   return (
      <div className={s.content}>
         {!props.profile ? (
            <Preloader />
         ) : (
            <div className={s.description}>
               {props.profile.photos.large ? (
                  <img
                     className={s.avatar}
                     src={props.profile.photos.large}
                     alt="AVATAR"
                  />
               ) : (
                  <img className={s.avatar} src={avatar} />
               )}
               <br />
               <input type="file" onChange={props.submitImg} />
               <br />
               <ProfileStatus
                  updateProfileStatus={props.updateProfileStatus}
                  // status={"hi ho h oh"}
                  profileStatus={props.profileStatus}
               />
               description USERID: {props.profile.userId}
            </div>
         )}
      </div>
   );
};
export default ProfileInfo;
