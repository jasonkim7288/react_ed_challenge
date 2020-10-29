import { Box, Divider, Grid, Typography, TextField, Button } from '@material-ui/core';
import React, { Component, createRef } from 'react';
import GridBox from './GridBox';

export default class BusinessCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: '',
      surName: '',
      email: '',
      phone: '',
      houseNameOrNum: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    console.log('this.state:', this.state);
    e.preventDefault();
    this.props.handleSubmitCb({...this.state});
  }

  render() {
    return (
      <Box>
        <Typography variant="h3">PERSONAL DETAILS</Typography>
        <Divider />
        <br />
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={3}>
            <GridBox>
              <TextField label="GIVEN NAME" name="givenName" value={this.state.givenName} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="SUR NAME" name="surName" value={this.state.surName} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="EMAIL" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="PHONE" name="phone" value={this.state.phone} onChange={this.handleChange}/>
            </GridBox>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <GridBox>
              <TextField label="HOUSE NAME OR #" name="houseNameOrNum" value={this.state.houseNameOrNum} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="STREET" name="street" value={this.state.street} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="SUBURB" name="suburb" value={this.state.suburb} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="STATE" name="state" value={this.state.state} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="POSTCODE" name="postcode" value={this.state.postcode} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <TextField label="COUNTRY" name="country" value={this.state.country} onChange={this.handleChange}/>
            </GridBox>
            <GridBox>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </GridBox>
          </Grid>
        </form>
      </Box>
    )
  }
}
