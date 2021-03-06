const ADD_MESSAGE_STATE = "ADD-MESSAGE-STATE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
   peoples: [
      { id: "1", name: "Igor" },
      { id: "2", name: "Artem" },
      { id: "3", name: "Pavel" },
      { id: "4", name: "Vlad" },
      { id: "5", name: "Angelina" },
   ],
   mesages: [
      { id: "1", mesage: "loremc scsdc d " },
      { id: "2", mesage: "dcdcdcdcdc" },
      { id: "3", mesage: "Lorem ipsum dolor sit" },
      { id: "4", mesage: "l lkiiuytu k y" },
      {
         id: "5",
         mesage:
            "Alias repellat a quo accusantium illum neque inventore cumque sequi repudiandae?",
      },
   ],
  
};

const dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE_STATE:
         return {
            ...state,
            mesages: [
               ...state.mesages,
               {
                  id: Date.now(),
                  mesage: action.newMesage,
               },
            ],
           
         };

      // let stateCopy = { ...state };
      // stateCopy.addNewMessage = action.newText;
      // return stateCopy;

      default:
         return state;
   }
};
export const addMessageStateActionCreator = (valueMesage) => {
   return { type: ADD_MESSAGE_STATE, newMesage: valueMesage };
};
// export const updateMessageActionCreator = (valueText) => {
//    return { type: UPDATE_MESSAGE, newText: valueText };
// };
export default dialogsPageReducer;
