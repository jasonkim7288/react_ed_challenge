import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import YellingGreeter from './YellingGreeter';


function YellingGreeterWrapper() {
  const [message, setMessage] = useState("this is my inside voice!")

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  console.log("it is rendering");

  return (
    <div style={{marginBottom: '100px'}}>
      <TextField id="standard-basic" label="Input yelling message" value={message} onChange={handleChange}/>
      <YellingGreeter message={message} />
    </div>
  )
}

export default YellingGreeterWrapper
