import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
   //  debugger;
   return (
      <div className={s.content}>
         {!props.profile ? (
            <Preloader />
         ) : (
            <div className={s.description}>
               <img src={props.profile.photos.large} alt="" /> + description{" "}
               USERID: {props.profile.userId}
               <ProfileStatus
                  updateProfileStatus={props.updateProfileStatus}
                  // status={"hi ho h oh"}
                  profileStatus={props.profileStatus}
               />
            </div>
         )}
      </div>
   );
};
export default ProfileInfo;
