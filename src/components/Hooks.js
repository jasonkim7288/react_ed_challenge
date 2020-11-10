import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography variant="subtitle1">You clicked {count} times</Typography>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1 )}>Click me</Button>
    </div>
  );
}

export default Hooks;
