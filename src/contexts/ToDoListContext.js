import React, { useState, createContext } from 'react';

const ToDoListContext = createContext();

const ToDoListProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  return (
    <ToDoListContext.Provider value={[toDoList, setToDoList]}>
      {children}
    </ToDoListContext.Provider>
  )
}

export { ToDoListContext, ToDoListProvider };