 import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
 import store from "./state/state";

export const rerender = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            store={store}
         />
      </React.StrictMode>,
      document.getElementById("root")
   );

   reportWebVitals();
};
store.subscribe(rerender)
rerender();
