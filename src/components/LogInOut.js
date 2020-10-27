import React, { Component } from 'react'
import { Button, Typography, Box} from '@material-ui/core';

export default class LogInOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidUpdate
  handleChange(isLoggedIn) {
    this.setState({ isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        { isLoggedIn ?
          (
            <Box>
              <Button variant="contained" color="secondary" onClick={() => this.handleChange(false)}>Log out</Button>
              <Typography variant="h1">Welcome!</Typography>
            </Box>
          ) :
          (
            <Box>
              <Button variant="contained" color="primary" onClick={() => this.handleChange(true)}>Log in</Button>
            </Box>
          )
        }
      </div>
    )
  }
}
