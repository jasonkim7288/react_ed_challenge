import React, { Component } from 'react'
import { Button, Typography, Box} from '@material-ui/core';

export default class LogInOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleChange = () => {
    this.setState({isLoggedIn: this.state.isLoggedIn ? false : true });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Box>
          <Button variant="contained" color={isLoggedIn ? "secondary" : "primary"} onClick={this.handleChange}>{isLoggedIn ? "Log out" : "Log in"}</Button>
          { isLoggedIn &&
            (
              <Typography variant="h1">Welcome!</Typography>
            )  
          }
        </Box>
      </div>
    )
  }
}
