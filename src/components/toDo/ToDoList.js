import { List } from '@material-ui/core';
import React, { useContext } from 'react'
import { ToDoListContext } from '../../contexts/ToDoListContext';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [toDoList, setToDoList] = useContext(ToDoListContext);
  console.log('toDoList:', toDoList);
  return (
    <List>
      {
        toDoList.map(toDo => <ToDoItem toDo={toDo} key={toDo.id}/>)
      }
    </List>
  );
}

export default ToDoList
