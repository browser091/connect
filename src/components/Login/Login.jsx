import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { Input } from "../common/FormControl/FormControl";
import {
   composeValidators,
   maxLengthCreator,
   required,
} from "../utilits/validator/validator";
import { setLoginThunkCreator } from "../../state/authReducer";
import { Navigate } from "react-router";
import { FORM_ERROR } from "final-form";

const LoginForm = (props) => {
   // debugger;
   return (
      <div>
         <Form
            onSubmit={props.onSubmit}
            render={({
               submitError,
               handleSubmit,
               pristine,
               form,
               submitting,
            }) => (
               <form onSubmit={handleSubmit}>
                  <div>
                     <label>Login:</label>
                     <Field
                        name="email"
                        component={Input}
                        type="text"
                        placeholder="login"
                        validate={composeValidators(
                           required,
                           maxLengthCreator(20)
                        )}
                     />
                  </div>
                  <div>
                     <label>Password:</label>
                     <Field
                        name="password"
                        component={Input}
                        type="password"
                        placeholder="Password"
                        validate={composeValidators(
                           required,
                           maxLengthCreator(20)
                        )}
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
                  {/* {console.log(submitError)} */}
                  {submitError && <div className="error">{submitError}</div>}
                  <div className="buttons">
                     <button type="submit" disabled={submitting}>
                        Submit
                     </button>
                  </div>
               </form>
            )}
         />
      </div>
   );
};

const Login = (props) => {
   const onSubmit = ({ email, password, rememberMe }) => {
      props.setLoginThunkCreator(email, password, rememberMe);
      // console.log(values);
   };
   // debugger;
   return (
      <div>
         {!props.authUser.isAuth ? (
            <div>
               <h1>Login</h1>
               <LoginForm onSubmit={onSubmit} />
            </div>
         ) : (
            <Navigate to="/profile" />
         )}
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      authUser: state.authUser,
   };
};
export default connect(mapStateToProps, { setLoginThunkCreator })(Login);
