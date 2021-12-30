import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./state/redux-store";

export const rerender = () => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
      </React.StrictMode>,
      document.getElementById("root")
   );
};
rerender();
store.subscribe(rerender);
