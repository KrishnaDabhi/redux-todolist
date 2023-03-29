import logo from './logo.svg';
import './App.css';
import ReduxTodoList from './components/ReduxTodoList';
import Form from './components/Form';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
  const [editData,setEditData] = useState(false);
  const [editTodo,setEditTodo] = useState('');
  
  const handleEvent =(todo) =>{
    setEditData(true);
    setEditTodo(todo);
  }
  return (
    <div className="App">
    {/* <ReduxTodoList />*/ }  
    <Form editData={editData} editTodo={editTodo}/>
    <Todos handleEvent={handleEvent} editData={editData} />
    </div>
  );
}

export default App;
