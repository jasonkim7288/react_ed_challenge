import React, { useEffect } from 'react';
import { Box, Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ToDoListContext } from '../../contexts/ToDoListContext';
import { useContext } from 'react';

function ToDoItem({ toDo }) {
  const [toDoList, setToDoList] = useContext(ToDoListContext);

  const handleChecked = () => {
    console.log('handleChecked');
    setToDoList(toDoList.map(element => element.id === toDo.id ?
        {
          id: element.id,
          toDo: element.toDo,
          done: !element.done
        } :
        element
    ))
  }

  const handleDelete = () => {
    setToDoList(toDoList.filter(element => element.id !== toDo.id));
  };

  useEffect(() => {
    console.log('toDoList:', toDoList);
  }, [toDoList]);


  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={toDo.done}
          onChange={handleChecked}
          color="primary"
        />
      </ListItemIcon>
      <ListItemText primary={toDo.toDo} style={{ textDecoration: toDo.done ? 'line-through' : 'none' }}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteIcon color="secondary"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ToDoItem;
