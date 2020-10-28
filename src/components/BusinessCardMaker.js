import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardCard from './BusinessCardCard';


export default class BusinessCardMaker extends Component {
  render() {
    return (
      <Box>
        <BusinessCardForm />
        <BusinessCardCard />
      </Box>
    )
  }
}
