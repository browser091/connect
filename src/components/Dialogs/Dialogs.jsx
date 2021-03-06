import React, { useRef } from "react";
import s from "./Dialogs.module.css";
import { Form, Field } from "react-final-form";
// import Textarea from "../common/FormControl/FormControl";

import { NavLink } from "react-router-dom";
import {
   composeValidators,
   maxLengthCreator,
   required,
} from "../utilits/validator/validator";
import { Textarea } from "../common/FormControl/FormControl";

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
                  component={Textarea}
                  placeholder="Add new message"
                  validate={composeValidators(required, maxLengthCreator(10))}
               />
               <div>
                  <button type="submit" disabled={submitting}>
                     Add message
                  </button>
               </div>
            </form>
         )}
      />
   );
};
