import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
   //  debugger;
   return (
      <div className={s.content}>
         <div>
            <img
               src="https://www.gannett-cdn.com/presto/2018/08/14/PTAL/6e4fff76-595d-4069-9112-cfe15dbfaa43-IMG_Stadium.jpeg?width=660&height=319&fit=crop&format=pjpg&auto=webp"
               alt="img"
            />
         </div>
         {!props.profile ? (
            <Preloader />
         ) : (
            <div className={s.description}>
               <img src={props.profile.photos.large} alt="" /> + description
            </div>
         )}
      </div>
   );
};
export default ProfileInfo;
