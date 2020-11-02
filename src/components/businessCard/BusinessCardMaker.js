import React, { Component } from 'react'
import { Box } from '@material-ui/core';
import BusinessCardForm from './BusinessCardForm';
import BusinessCardCard from './BusinessCardCard';

export default class BusinessCardMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    }
  }

  handleSubmitCb = (submittedForm) => {
    console.log('handleSubmitCb');
    this.setState({ submittedForm })
  }

  render() {
    const { submittedForm } = this.state;
    return (
      <Box>
        { submittedForm &&
          (
            <BusinessCardCard submittedForm={submittedForm}/>
          )
        }
        <BusinessCardForm handleSubmitCb={this.handleSubmitCb}/>
        <br />

      </Box>
    )
  }
}
