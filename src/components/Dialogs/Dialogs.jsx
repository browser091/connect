import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const peoples = [
   { id: "1", name: "Igor" },
   { id: "2", name: "Artem" },
   { id: "3", name: "Pavel" },
   { id: "4", name: "Vlad" },
   { id: "5", name: "Angelina" },
];
const mesages = [
   { id: "1", mesage: "loremc scsdc d " },
   { id: "2", mesage: "dcdcdcdcdc" },
   { id: "3", mesage: "Lorem ipsum dolor sit" },
   { id: "4", mesage: "Vlad" },
   {
      id: "5",
      mesage:
         "Alias repellat a quo accusantium illum neque inventore cumque sequi repudiandae?",
   },
];
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

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {peoples.map((people) => (
               <Dialog id={people.id} name={people.name} />
            ))}
         </div>
         <div className={s.messages}>
            {mesages.map((m) => (
               <Mesage mesage={m.mesage} />
            ))}
         </div>
      </div>
   );
};
export default Dialogs;
