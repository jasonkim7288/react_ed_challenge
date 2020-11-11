import React, { useState, createContext } from 'react';

const ToDoListContext = createContext();

const ToDoListProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(null);

  return (
    <ToDoListContext.Provider value={[toDoList, setToDoList]}>
      {children}
    </ToDoListContext.Provider>
  )
}

export { ToDoListContext, ToDoListProvider };