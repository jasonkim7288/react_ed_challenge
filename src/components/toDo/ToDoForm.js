import React, { useContext, useRef } from 'react';
import { ToDoListContext } from '../../contexts/ToDoListContext';
import { Box, TextField } from '@material-ui/core';
import uuid from 'react-uuid';


function ToDoForm() {
  const [toDoList, setToDoList] = useContext(ToDoListContext);
  const inputText = useRef();

  const handleKeydown = (e) => {
    if(e.keyCode === 13) {
      setToDoList([{
        id: uuid(),
        toDo: inputText.current.value,
        done: false
      }, ...toDoList]);
      inputText.current.value = '';
    }
  }

  return (
    <Box mb={4}>
      <TextField inputRef={inputText} onKeyDown={handleKeydown} fullWidth={true} autoFocus={true}/>
    </Box>
  );
}

export default ToDoForm;
