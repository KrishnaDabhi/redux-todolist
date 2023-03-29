import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rootReducers from '../redux/reducer/rootReducer'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { MdDelete } from 'react-icons/md';
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { BiUpArrowAlt } from 'react-icons/bi';
import { down_todo, removeAllTodo, removeTodos, up_todo } from '../redux/action';

const Todos = ({ handleEvent, editData }) => {

  const todos = useSelector((state) => state.todoReducers);
  const dispatch = useDispatch();
  console.log(todos);

  const handledownEvent = (id) => {
    console.log("id down = ", id);
    console.log("todos down =", todos);

    let array = [todos];
    console.log("array= ", array.length);
    dispatch(down_todo(id));
  }

  const handledUpEvent = (id) => {
    console.log("id down = ", id);
    console.log("todos down =", todos);

    let array = [todos];
    console.log("array= ", array.length);
    dispatch(up_todo(id));
  }
  return (
    <div>
      {
        todos.map((x) => {
          return (
            <Box key={x.id} sx={{
              width: 600,
              height: 'auto',
              margin: '0 auto',
   
            }}>

              <Stack direction='row' justifyContent='space-between' sx={{ margin: '0 auto', width: '50%', marginTop: '20px' }}>
                <Box>  <Typography>{x.todo}</Typography></Box>

                <Box>
                  <Stack direction='row' sx={{ margin: '0 auto', width: '50%', alignItem: 'right' }}>
                    <Typography sx={{ paddingRight: '10px' }}><MdDelete onClick={() => dispatch(removeTodos(x.id))} /></Typography>
                    <Typography sx={{ paddingRight: '10px' }}><FiEdit onClick={() => handleEvent(x)} /></Typography>
                    <Typography sx={{ paddingRight: '10px' }}><BsFillArrowDownSquareFill onClick={() => handledownEvent(x.id)} /></Typography>
                    <Typography><BiUpArrowAlt onClick={() => handledUpEvent(x.id)} /></Typography>
                  </Stack>
                </Box>

              </Stack>
            </Box>
          )
        })
      }
      <Button variant="outlined" color="error" sx={{ marginTop: '30px' }} onClick={() => dispatch(removeAllTodo())}>DELETE ALL</Button>
    </div >
  )
}

export default Todos
