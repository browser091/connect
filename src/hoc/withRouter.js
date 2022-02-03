import React from "react";
import { useParams } from "react-router";

export const withRouter = (Component) => {
   let RouterComponent = (props) => {
      let { userId } = useParams();
      return <Component {...props} userId={userId} />;
   };
   return RouterComponent;
};
