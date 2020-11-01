import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { Component, createRef } from 'react'

function MyTypography({ children, myType }) {
  const typoStyle = {
    fontSize: '30px',
    letterSpacing: '1px',
    fontWeight: '300',
    lineHeight: '120%'
  }
  return (
    <Typography variant={myType} style={typoStyle}>
      { children }
    </Typography>
  )
}

function BusinessCardTemplate1({ settings, submittedForm }) {
  const { givenName, surName, email, phone, houseNameOrNum, street, suburb, state, postcode, country } = submittedForm;
  const gridContainerStyle = {
    padding: '77px 0'
  };
  const rightGridStyle = {
    borderLeft: '2px solid #A1A0A8',
    padding: '20px 50px',
    textAlign: 'left',
  };
  const nameStyle = {
    fontSize: '35px',
    letterSpacing: '2px',
    fontWeight: '900',
    marginBottom: '100px'
  };
  const phoneStyle = {
    marginRight: '13px',
    fontSize: '0.95em',
    transform: 'translateY(1px)'
  }
  const emailStyle = {
    marginRight: '15px',
    fontSize: '1.0em',
    transform: 'translateY(4px)'
  }

  return (
    <Grid container style={gridContainerStyle} align="center" alignItems="center">
      <Grid item xs={5} >
        <img src={settings.imgURL} width="200"/>
      </Grid>
      <Grid item xs={7} style={rightGridStyle}>
        <Typography style={nameStyle}>
          {givenName} {surName}
        </Typography>
        <MyTypography myType="subtitle1">
          {houseNameOrNum} {street}
        </MyTypography>
        <MyTypography myType="subtitle1">
          {suburb} {state}
        </MyTypography>
        <MyTypography myType="subtitle1">
          {country} {postcode}
        </MyTypography>

        <Box m={7} />
        <MyTypography myType="subtitle1">
          <i className="fas fa-phone-alt" style={phoneStyle}></i>
          {phone}
        </MyTypography>
        <MyTypography myType="subtitle1">
          <i className="far fa-envelope" style={emailStyle}></i>
          {email}
        </MyTypography>
      </Grid>
    </Grid>
  )
}

export default BusinessCardTemplate1
