// import React, { useState } from 'react'
// import { FaHandPeace, FaPlus } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, deleteTodo, removeallTodo, removeTodo } from '../redux/action';
// import { AiFillDelete } from "react-icons/ai";
// import { FiEdit2 } from "react-icons/fi";
// import todoReducers from '../redux/reducer';

// const ReduxTodoList = () => {
//     const [inputData, setInputData] = useState('');
//     const dispatch = useDispatch();
//     const list = useSelector((state) => state.todoReducers.list);
//     return (
//         <div className='main-div'>
//             <div className='chid-div'>
//                 <h1>Add Your List Here <FaHandPeace style={{ color: 'yellow' }} /></h1>

//                 <div className='addItem'>
//                     <input type='text' placeholder='Add Items...' value={inputData} onChange={(e) => setInputData(e.target.value)} style={{ padding: '6px', width: '30%', border: 'none' }} />
//                     <FaPlus className='faplus' onClick={() => dispatch(addTodo(inputData), setInputData(''))} />
//                 </div>

//                 <div className='showItem'>
//                     {
//                         list.map((x) => 
//                                 <div key={x.id} className='icon'>
//                                   <span>  <h3 style={{ textAlign: 'left',width:'30%' }}>{x.data}<AiFillDelete className='fadelete' color='red' onClick={() => dispatch(deleteTodo(x.id))} /><FiEdit2 className='faedit' color='blue' onClick={()=>setInputData((x.data))}/></h3></span>

//                                      <span></span>

//                                 </div>
                            
//                         )
//                     }

//                 </div>
//                 <button style={{marginTop:'30px',padding:'7px',backgroundColor:'blueviolet',border:'none',color:'white'}} onClick={()=>dispatch(removeallTodo())}>Remove All</button>
//             </div>
//         </div>
//     )
// }

// export default ReduxTodoList