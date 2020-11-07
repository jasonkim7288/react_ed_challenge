import React, { useState } from 'react'
import { Button, Box, TextField, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function UserName({ handleAddCb, handleDelCb, keyData, keysLength }) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleClear = () => {
    setName('');
  }

  const handleAdd = (e) => {
    handleAddCb();
  }

  const handleDel = (e) => {
    handleDelCb(keyData);
  }

  return (
    <Box my={1}>
      <Box component="span" mr={5}>
        <TextField label='Input Name' InputLabelProps={{shrink: true}} onChange={(e) => handleChange(e)} value={name}/>
      </Box>
      <Box component="span" mr={5}>
        <Button variant="contained" color="secondary" onClick={() => handleClear()}>Clear</Button>
      </Box>
      <Box component="span" mr={5}>
        <Fab color="primary" aria-label="add" onClick={handleAdd} >
          <AddIcon />
        </Fab>
      </Box>
      {
        keysLength > 1 &&
        (
          <Box component="span" mr={5}>
            <Fab color="secondary" aria-label="del" onClick={handleDel}>
              <RemoveIcon />
            </Fab>
          </Box>
        )
      }
      <Box component="span" style={{fontSize: '3em'}}>
          I am {name}
      </Box>
    </Box>
  );
}

export default UserName
