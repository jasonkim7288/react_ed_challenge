import React from 'react'
import { Button, Box } from '@material-ui/core';
import VibrationIcon from '@material-ui/icons/Vibration';

function BuzzBuzz() {

  const buzzBuzz = () => {
    window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
  }

  return (
      <Box my={8}>
        <Button variant="contained" color="primary" onClick={buzzBuzz} startIcon={<VibrationIcon />}>
          Buzz!
        </Button>
      </Box>
  )
}

export default BuzzBuzz
