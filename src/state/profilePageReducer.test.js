import profilePageReducer, {addPostStateActionCreator, deletePostStateActionCreator} from "./profilePageReducer";


let initialState = {
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

   profile: null,
   profileStatus: "",
};

it('new post should be added',()=>{
   let action=addPostStateActionCreator('plplpllplpplplplplplplplpl')
   let newState=profilePageReducer(initialState, action);
   expect(newState.posts.length).toBe(4)
})
it('after deleting length of message should be decrement', ()=>{
   let action= deletePostStateActionCreator(1)
   let newState=profilePageReducer(initialState, action);
   expect(newState.posts.length).toBe(2)



})