
import {
   addMessageStateActionCreator,
   updateMessageActionCreator,
} from "../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";
import React from "react";



const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage
// debugger

   const addMesage = (valueMesage) => {

      props.store.dispatch(addMessageStateActionCreator(valueMesage));
   };

   const getText = (value) => {
      props.store.dispatch(updateMessageActionCreator(value));
   };

   return (
      <Dialogs addMesage={addMesage} getText={getText} state={state}/>
   );
};
export default DialogsContainer;
