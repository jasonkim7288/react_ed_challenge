import { List } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import { ToDoListContext } from '../../contexts/ToDoListContext';
import ToDoItem from './ToDoItem';
import AWS from 'aws-sdk';
import { useRef } from 'react';

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
});

const params = {
  Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
  Key: process.env.REACT_APP_AWS_FILE_NAME_TODO_LIST
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function ToDoList() {
  const [toDoList, setToDoList] = useContext(ToDoListContext);
  const prevToDoList = usePrevious(toDoList);

  useEffect(() => {
    if (!toDoList) {
      s3.getObject(params, (err, data) => {
        if (err) {
          console.log('err:', err);
        } else {
          console.log(data.Body.toString('ascii'));
          setToDoList(JSON.parse(data.Body.toString('ascii')));
        }
      })
    }
  });

  useEffect(() => {
    console.log('useEffect of toDoList');
    console.log('prevToDoList:', prevToDoList);
    console.log('toDoList:', toDoList);
    console.log('process.env.REACT_APP_AWS_BUCKET_NAME:', process.env.REACT_APP_AWS_BUCKET_NAME)

    if (prevToDoList) {
      const writeParams = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: process.env.REACT_APP_AWS_FILE_NAME_TODO_LIST,
        Body: JSON.stringify(toDoList)
      };

      s3.upload(writeParams, (err, data) => {
        if (err) {
          console.log('err:', err);
        } else {
          console.log(`File uploaded successfully. ${data.Location}`);
        }
      })
    }
  }, [toDoList, prevToDoList])

  return (
    <List>
      { toDoList &&
        toDoList.map(toDo => <ToDoItem toDo={toDo} key={toDo.id}/>)
      }
    </List>
  );
}

export default ToDoList
