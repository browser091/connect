import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
   return (
      <div className="dialog">
         <NavLink to={`dialog/${props.id}`}>{props.name}</NavLink>
      </div>
   );
};

const Mesage = (props) => {
   return <div className="mesage">{props.mesage}</div>;
};

const Dialogs = (props) => {
   // debugger;
   let msg = useRef();

   const addMesage = () => {
      let valueMesage = msg.current.value;
      props.addMesageState(valueMesage);
   };

   const getText = () => {
      props.updateMessage(msg.current.value);
      console.log(msg.current.value);
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {props.data.peoples.map((p) => (
               <Dialog key={p.id} id={p.id} name={p.name} />
            ))}
         </div>
         <div className={s.messages}>
            {props.data.mesages.map((mesage) => (
               <Mesage key={mesage.id} mesage={mesage.mesage} />
            ))}
            <div className="addMesage">
               <textarea
                  ref={msg}
                  value={props.data.addNewMessage}
                  onChange={getText}
               />
               <div>
                  <button onClick={addMesage} className="add">
                     Add message
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Dialogs;
