import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
   state = {
      statusMode: false,
      localProfileStatus: this.props.profileStatus,
   };

   activeStatusMode = () => {
      this.setState({ statusMode: true });
   };
   deActiveStatusMode = () => {
      this.setState({ statusMode: false });
      this.props.updateProfileStatus(this.state.localProfileStatus);
   };
   changeProfileStatus = (e) => {
      this.setState({ localProfileStatus: e.currentTarget.value });
   };

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.profileStatus !== this.props.profileStatus) {
         this.setState({
            localProfileStatus: this.props.profileStatus,
         });
      }
      // debugger;
   }
   render() {
      // console.log(this.state.localProfileStatus);
      // debugger;
      return (
         <div>
            {!this.state.statusMode ? (
               <div>
                  <span onDoubleClick={this.activeStatusMode}>
                     {this.state.localProfileStatus || "Add you status"}
                  </span>
               </div>
            ) : (
               <div>
                  <input
                     onChange={this.changeProfileStatus}
                     autoFocus={true}
                     onBlur={this.deActiveStatusMode}
                     type="text"
                     value={this.state.localProfileStatus}
                  />
               </div>
            )}
         </div>
      );
   }
}
export default ProfileStatus;
