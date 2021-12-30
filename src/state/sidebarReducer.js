let initialState={
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
}

const sidebarReducer = (state=initialState, action) => {
   return state;
};

export default sidebarReducer;
