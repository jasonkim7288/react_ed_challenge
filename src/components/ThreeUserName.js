import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import UserName from './UserName';

export default class ThreeUserName extends Component {
  render() {
    return (
      <Box>
        <UserName />
        <UserName />
        <UserName />
      </Box>
    );
  }
}
