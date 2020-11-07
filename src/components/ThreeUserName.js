import React, { useState } from 'react'
import { Box } from '@material-ui/core';
import UserName from './UserName';


function ThreeUserName() {
  const [keys, setKeys] = useState([0]);

  const handleAdd = () => {
    console.log('keys:', keys);
    setKeys([...keys, keys[keys.length - 1] + 1]);
  }

  const handleDel = (key) => {
    setKeys(keys.filter(element => element !== parseInt(key)))
  }

  return (
    <Box>
      {
        keys.map(key => (<UserName handleAddCb={handleAdd} handleDelCb={handleDel} key={key} keyData={key} keysLength={keys.length}/>))
      }
    </Box>
  );
}

export default ThreeUserName;

