import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

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

function BusinessCardTemplate2({ settings }) {
  const businessCardFormData = useSelector(state => state.businessCardFormData);
  const { givenName, surName, email, phone, houseNameOrNum, street, suburb, state, postcode, country } = businessCardFormData;
  const boxStyle = {
    height: '600px'
  };
  const gridContainerStyle = {
    height: '250px'
  };
  const logoStyle = {
    maxHeight: '100px',
    maxWidth: '200px',
  };
  const leftGridStyle = {
    paddingRight: '10px',
    textAlign: 'right',
  };
  const rightGridStyle = {
    paddingLeft: '10px',
    textAlign: 'left',
  };
  const centerStyle = {
    textAlign: 'center',
  };
  const nameStyle = {
    fontSize: '50px',
    letterSpacing: '2px',
    fontWeight: '900',
  };
  const phoneStyle = {
    marginRight: '13px',
    fontSize: '0.95em',
    transform: 'translateY(1px)'
  };
  const emailStyle = {
    marginRight: '15px',
    fontSize: '1.0em',
    transform: 'translateY(4px)'
  };

  return (
    <Box style={boxStyle}>
      <Grid container style={gridContainerStyle} align="center" alignItems="center">
        <Grid item xs={5} style={leftGridStyle}>
          <img src={settings.imgURL} alt="logo" style={logoStyle}/>
        </Grid>
        <Grid item xs={7} style={rightGridStyle}>
          <Typography style={nameStyle}>
            {givenName} {surName}
          </Typography>
        </Grid>
      </Grid>
      <Box style={centerStyle}>
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
      </Box>
    </Box>
  )
}

export default BusinessCardTemplate2
