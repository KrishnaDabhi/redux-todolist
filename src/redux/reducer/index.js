import { ADD_TODO, DOWN_TODO, REMOVE_ALL_TODO, REMOVE_TODO, UPDATE_TODO, UP_TODO } from "../types/type";

const initialState = [
    {id:1,todo:'Buy Laptop', completed:'false'},
    {id:2,todo:'Buy TV', completed:'false'},
    {id:3,todo:'Buy AC', completed:'false'},
    {id:4,todo:'Buy FREEZ', completed:'false'},
]

 const todoReducers = (state=initialState,action)=>{
    console.log("All action",action);
    switch(action.type){

        case ADD_TODO:
            return [...state,action.payload]

        case REMOVE_ALL_TODO:
            return [];

        case REMOVE_TODO:
            const dele_todo = state.filter((todo) => todo.id !== action.payload);
            return dele_todo;

        case UPDATE_TODO:
            let data = action.payload;
            console.log("data = ",data)
            const updatedArray=[];

            state.map((item)=>{
                
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                console.log("data id = ",data.id);
                console.log("item id = ",item.id);
                console.log("item = ",item);
                updatedArray.push(item);
            })
            console.log("updatedArray = ",updatedArray)
            return updatedArray;


            case DOWN_TODO: {
                // compute todo index
                const data=action.payload;

                console.log("todo action.id=",data);

                const index = state.findIndex(todo => todo.id === data);
                console.log("todo index=",index);
                console.log("todo state.length=",state.length);
              
            
                if (index > 0 && state.length > 1) {
                  // shallow copy state
                  const newState = [...state];
                  console.log("newState =",newState);
              
                  // swap values at found index and index - 1
                  [newState[index], newState[index + 1]] = [newState[index + 1], newState[index]];
                  console.log("newState =",newState);
                  return newState;
                } else {
                  // not swappable, return current state
                  console.log("current state =",state);
                  return state;
                 
                }
              }
              case UP_TODO: {
                // compute todo index
                const data=action.payload;

                console.log("todo action.id=",data);

                const index = state.findIndex(todo => todo.id === data);
                console.log("todo index=",index);
                console.log("todo state.length=",state.length);
              
            
                if (index > 0 && state.length > 1) {
                  // shallow copy state
                  const newState = [...state];
                  console.log("newState =",newState);
              
                  // swap values at found index and index - 1
                  [newState[index], newState[index - 1]] = [newState[index - 1], newState[index]];
                  console.log("newState =",newState);
                  return newState;
                } else {
                  // not swappable, return current state
                  console.log("current state =",state);
                  return state;
                 
                }
              }

        default:
            return state;
    }
}

export default todoReducers;















// import { ADD_TODO, REMOVE_ALL_TODO, REMOVE_TODO } from "../types/type"

// const initialData = {
//     list: []
// }
// const todoReducers = (state = initialData, action) => {
//     switch (action.type) {
//         case ADD_TODO:
    

//             const { id, data } = action.payload;
//             return {
//                 ...state,
//                 list: [
//                     ...state.list,
//                     {
//                         id: id,
//                         data: data
//                     }
//                 ]
//             } 

//         case REMOVE_TODO:

//             if (window.confirm('Are you sure you want to delete this row???')) {

//                 state.list.splice(state.list.findIndex(x => x.id === action.payload.id));
//                 return {
//                     list: [...state.list]
//                 }


//             // const newlist = state.list.filter((e)=>e.id !== action.id)
//             // return {
//             //     ...state,
//             //     list:newlist
               
//             // }
//             }
//             case REMOVE_ALL_TODO:
              
//                 return {
//                     ...state,
//                     list:[]
                   
//                 }

//         default:
//             return state
//     }

// }

// export default todoReducers;