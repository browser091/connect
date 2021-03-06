import {
   addMessageStateActionCreator,
   // updateMessageActionCreator,
} from "../../state/dialogsPageReducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// const DialogsContainer = (props) => {
//    let state = props.store.getState().dialogsPage;
//    // debugger

//    const addMesage = (valueMesage) => {
//       props.store.dispatch(addMessageStateActionCreator(valueMesage));
//    };

//    const getText = (value) => {
//       props.store.dispatch(updateMessageActionCreator(value));
//    };

//    return <Dialogs addMesage={addMesage} getText={getText} state={state} />;
// };
const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      addMesage: (valueMesage) =>
         dispatch(addMessageStateActionCreator(valueMesage)),
      // getText: (value) => dispatch(updateMessageActionCreator(value)),
   };
};
export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);
