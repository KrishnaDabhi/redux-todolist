import { Box, Typography, TextField, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/action';

const Form = ({ editData, editTodo }) => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  const [editValue, setEditValue] = useState('');
  const [toggleSubmit, setToggleSubmit] = useState(true);

  useEffect(() => {
    setEditValue(editTodo.todo);
    console.log("editTodo.todo =", editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false
    }
    setTodoValue('');
    dispatch(addTodo(todoObj))
  }

  const editSubmit = (e) => {
    e.preventDefault();
    let editObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    setToggleSubmit(false);
    console.log("editobj = ", editObj);
    dispatch(handleEditSubmit(editObj));

  }
  return (
    <div>
      {
        (editData === false) ? (
          <Box

            sx={{
              width: 600,
              height: 'auto',

              margin: '0 auto'
            }}
          >
            <Typography variant='h4' sx={{ marginTop: '50px' }}>TODO APP USING REDUX</Typography>
            <Stack direction='row' sx={{ margin: '0 auto', width: '80%', marginTop: '30px', marginBottom: '40px' }}>

              <TextField id="outlined-basic" label="Add your Todo-items" variant="outlined" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} sx={{ height: '10px !important', width: '150% !important', fontSize: '12px !important' }} />

              <Button variant="contained" onClick={handleSubmit}>ADD</Button>


            </Stack>
          </Box>

        ) : (
          <Box

            sx={{
              width: 800,
              height: 'auto',

              margin: '0 auto'
            }}
          >
            <Typography variant='h5'>TODO APP USING REDUX</Typography>
            <Stack direction='row' sx={{ margin: '0 auto', width: '50%', marginTop: '30px' }}>

              {
                toggleSubmit ? <TextField id="outlined-basic" label="Update your Todo-items" variant="outlined" value={editValue} onChange={(e) => setEditValue(e.target.value)} sx={{ height: '10px !important' }} />
                  : <TextField id="outlined-basic" label="Add your Todo-items" variant="outlined" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} sx={{ height: '10px !important' }} />
              }
              {
                toggleSubmit ? <Button variant="contained" onClick={editSubmit}>UPDATE</Button>
                  : <Button variant="contained" onClick={handleSubmit}>ADD</Button>

              }

            </Stack>
          </Box>

        )
      }

    </div>
  )
}

export default Form