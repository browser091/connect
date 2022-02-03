import React from "react";
import { Form, Field } from "react-final-form";

const LoginForm = (props) => {
   return (
      <div>
         <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, pristine, form, submitting }) => (
               <form onSubmit={handleSubmit}>
                  <div>
                     <label>Login:</label>
                     <Field
                        name="login"
                        component="input"
                        type="text"
                        placeholder="login"
                     />
                  </div>
                  <div>
                     <label>Password:</label>
                     <Field
                        name="password"
                        component="input"
                        type="text"
                        placeholder="Password"
                     />
                  </div>
                  <div>
                     <label>Remember me</label>
                     <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                     />
                  </div>
                  <div className="buttons">
                     <button type="submit">Submit</button>
                  </div>
               </form>
            )}
         />
      </div>
   );
};

const Login = () => {
   const onSubmit = (values) => {
      console.log(values);
   };
   // debugger;
   return (
      <div>
         <h1>Login</h1>
         <LoginForm onSubmit={onSubmit} />
      </div>
   );
};

export default Login;
