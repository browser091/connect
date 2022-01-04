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
   let msg = useRef();

   const addMesage = () => {
      let valueMesage = msg.current.value;
      props.addMesage(valueMesage);
   };

   const getText = () => {
      let valueMesage = msg.current.value;
      props.getText(valueMesage);
   };
   // debugger;
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {props.state.peoples.map((p) => (
               <Dialog key={p.id} id={p.id} name={p.name} />
            ))}
         </div>
         <div className={s.messages}>
            {props.state.mesages.map((mesage) => (
               <Mesage key={mesage.id} mesage={mesage.mesage} />
            ))}
            <div className="addMesage">
               <textarea
                  ref={msg}
                  value={props.state.addNewMessage}
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
