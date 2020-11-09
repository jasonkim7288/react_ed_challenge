import React from 'react'
import { ToDoListProvider } from '../../contexts/ToDoListContext';
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import { Box, Typography } from '@material-ui/core';

function ToDoMain() {
  return (
    <ToDoListProvider>
      <Box mb={4}>
        <Typography variant="h3">You gotta do what you gotta do</Typography>
      </Box>
      <ToDoForm />
      <ToDoList />
    </ToDoListProvider>
  )
}

export default ToDoMain
