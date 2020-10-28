import { Box, Divider, Grid, Typography, TextField } from '@material-ui/core'
import React, { Component, createRef } from 'react'

export default class BusinessCardForm extends Component {
  constructor(props) {
    super(props);
    this.givenNameInput = createRef();
  }
  render() {
    return (
      <Box>
        <Typography variant="h2">PERSONAL DETAILS</Typography>
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box m={5}>
              <TextField inputRef={ ref => {this.givenNameInput = ref;} } label="GIVEN NAME" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={5}>
              <TextField inputRef={ ref => {this.surNameInput = ref;} } label="SUR NAME" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={5}>
              <TextField inputRef={ ref => {this.emailInput = ref;} } label="EMAIL" type="email" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box m={5}>
              <TextField inputRef={ ref => {this.givenNameInput = ref;} } label="GIVEN NAME" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
