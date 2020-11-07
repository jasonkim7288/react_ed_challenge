import React from 'react'
import { Box, Grid, } from '@material-ui/core'


function GridBox({children}) {
  return (
    <Grid item xs={12} sm={6}>
      <Box>
        { children }
      </Box>
    </Grid>
  )
}

export default GridBox;
