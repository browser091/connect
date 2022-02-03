import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import { Form, Field } from "react-final-form";

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
   const onSubmit = (value) => {
      props.addMesage(value.newNessage);
   };
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
            <AddMessage onSubmit={onSubmit} />
         </div>
      </div>
   );
};
export default Dialogs;

const AddMessage = (props) => {
   return (
      <Form
         onSubmit={props.onSubmit}
         render={({ handleSubmit, pristine, form, submitting }) => (
            <form onSubmit={handleSubmit}>
               <Field
                  name="newNessage"
                  component="textarea"
                  type="text"
                  placeholder="Add new message"
               />
               <div>
                  <button>Add message</button>
               </div>
            </form>
         )}
      />
   );
};
