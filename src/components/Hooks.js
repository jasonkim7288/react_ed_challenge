import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function Hooks() {
  const [count, setCount] = useLocalStorage('count', 0);
  return (
    <div>
      <Typography variant="subtitle1">You clicked {count} times</Typography>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1 )}>Click me</Button>
    </div>
  );
}

export default Hooks;
