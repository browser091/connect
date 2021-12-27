import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./state/state";
import { addMesageState, updateMessage } from "./state/state";

export const rerender = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addMesageState={addMesageState}
            updateMessage={updateMessage}
         />
      </React.StrictMode>,
      document.getElementById("root")
   );

   reportWebVitals();
};
rerender();
