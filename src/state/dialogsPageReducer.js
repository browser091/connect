const ADD_MESSAGE_STATE = "ADD-MESSAGE-STATE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsPageReducer = (state, action) => {
   switch (action.type) {
      case ADD_MESSAGE_STATE:
         let tempMesage = {
            id: Date.now(),
            mesage: action.newMesage,
         };
         state.mesages.push(tempMesage);
         state.addNewMessage = "";
         return state;
      case UPDATE_MESSAGE:
         state.addNewMessage = action.newText;
         return state;
      default:
         return state;
   }
};
export const addMessageStateActionCreator = (valueMesage) => {
   return { type: ADD_MESSAGE_STATE, newMesage: valueMesage };
};
export const updateMessageActionCreator = (valueText) => {
   return { type: UPDATE_MESSAGE, newText: valueText };
};
export default dialogsPageReducer;
