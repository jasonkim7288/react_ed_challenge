import React, { Component } from 'react'
import { Button, Box, TextField, Typography} from '@material-ui/core';

export default class UserName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  handleClick() {
    this.setState({name: ''});
  }

  render() {
    return (
      <Box my={5}>
        <Box mb={2}>
          <Typography variant="h2">
            I am {this.state.name}
          </Typography>
        </Box>
        <Box component="span" mr={5}>
          <TextField inputRef={ref => {this.nameInput = ref;}} label='Input Name' InputLabelProps={{shrink: true}} onChange={(e) => this.handleChange(e)} value={this.state.name}/>
        </Box>
          <Button variant="contained" color="secondary" onClick={() => this.handleClick()}>Delete</Button>
      </Box>
    );
  }
}
