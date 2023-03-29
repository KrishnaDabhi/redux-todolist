// import { ADD_TODO, REMOVE_ALL_TODO, REMOVE_TODO } from "../types/type"

import { ADD_TODO, DOWN_TODO, REMOVE_ALL_TODO, REMOVE_TODO, UPDATE_TODO, UP_TODO } from "../types/type"

// export const addTodo = (data) =>{
//     return{
//         type:ADD_TODO,
//         payload:{
//             id:new Date().getTime().toString(),
//             data:data
//         }
//     }
// }
// export const removeallTodo = () =>{
//     return{
//         type:REMOVE_ALL_TODO,
       
//     }
// }

// export const deleteTodo = (id) =>{
//     return{
//         type:REMOVE_TODO,
//         id

//     }
// }


// .....................

export const addTodo = (payload) =>{
    return{
        type:ADD_TODO,
        payload

    }
}
export const removeAllTodo = () =>{
    return{
       type:REMOVE_ALL_TODO

    }
}

export const removeTodos = (id) =>{
    return {
        type:REMOVE_TODO,
        payload:id
    }
}

export const handleEditSubmit = (payload) =>{
    console.log("payload =",payload);
    return{
        type:UPDATE_TODO,
        payload
    }

}
export const up_todo = (payload) =>{
    console.log("payload id=",payload);
    return{
        type:UP_TODO,
        payload
    }

}
export const down_todo = (payload) =>{
    console.log("payload id=",payload);
    return{
        type:DOWN_TODO,
        payload
    }

}