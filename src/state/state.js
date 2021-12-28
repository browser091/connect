const ADD_MESSAGE_STATE = "ADD-MESSAGE-STATE";
const UPTADE_MESSAGE = "UPTADE-MESSAGE";

const store = {
   rerender() {
      console.log("rerender");
   },
   _state: {
      profilePage: {
         posts: [
            {
               id: 1,
               post: "ssc ssdew rtyty rf d cd",
               like: 8,
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
            },
            {
               id: 2,
               post: "ssc ssdew ",
               like: 0,
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
            },
            {
               id: 3,
               post: "ssc ssdew dcd d dc dc ddcrtyty rf d cd",
               like: 28,
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU",
            },
         ],
         newPostText: "xaxa",
      },
      dialogsPage: {
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
         addNewMessage: "tutu",
      },
      sidebar: {
         friends: [
            {
               id: "1",
               name: "Igor",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnkuifUbzWP7wwUy6LESwHTAwh5PzJk5ihw&usqp=CAU",
            },
            {
               id: "2",
               name: "Artem",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUAaxOy8jnQYmYxXZOjcrq_iFW_Zjlbvv-A&usqp=CAU",
            },
            {
               id: "3",
               name: "Pavel",
               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4z0Tnr0B6-eClusbGaeJ4Pa4DRRvdlnuWw&usqp=CAU",
            },
         ],
      },
   },

   subscribe(observer) {
      this.rerender = observer;
   },
   getState() {
      return this._state;
   },

   dispatch(action) {
      switch (action.type) {
         case ADD_MESSAGE_STATE:
            let tempMesage = {
               id: "6",
               mesage: action.newMesage,
            };
            this._state.dialogsPage.mesages.push(tempMesage);
            this._state.dialogsPage.addNewMessage = "";
            this.rerender();
            break;
         case UPTADE_MESSAGE:
            this._state.dialogsPage.addNewMessage = action.newText;
            this.rerender();
            break;
         default:
            break;
      }
   },
};

export const addMessageStateActionCreator = (valueMesage) => {
   return { type: ADD_MESSAGE_STATE, newMesage: valueMesage };
};
export const updateMessageActionCreator = (valueText) => {
   return { type: UPTADE_MESSAGE, newText: valueText };
};

export default store;
