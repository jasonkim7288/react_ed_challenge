import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { Component, createRef } from 'react'
import html2canvas from 'html2canvas';

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

export default class BusinessCardCard extends Component {
  constructor(props) {
    super(props);
    this.savingAreaRef = createRef();
    this.state = {
      url: null
    }
  }

  openImage = (base64URL) => {
    var win = window.open();
    win.document.write(`<iframe src="` + base64URL  + `" frameborder="0" style="border:0;
   top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen>
   </iframe>`);
  }

  handleClick = () => {
    html2canvas(this.savingAreaRef.current)
      .then(canvas => {
        const url = canvas.toDataURL();
        console.log('url:', url);

        // window.open(url, '_blank');
        // this.openImage(url);
        const w = window.open('about:blank', 'image from canvas');
        w.document.write("<img src='" + url +"' alt='from canvas'/>")
      })
  }

  render() {
    const paperStyle = {
      width: '1050px',
      height: '600px',
      marginRight: 'auto',
      overflow: 'hidden'
    }
    const savingAreaStyle = {
      margin: '0',
      padding: '0',
      backgroundColor: '#2A2B2E',
      color: '#D1D0D8',
    }
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

    const { givenName, surName, email, phone, houseNameOrNum, street, suburb, state, postcode, country } = this.props.submittedForm;
    const { url } = this.state;
    return (
      <div >
        <div style={paperStyle}>
          <div ref={this.savingAreaRef} style={savingAreaStyle}>
            <Grid container style={gridContainerStyle} align="center" alignItems="center">
              <Grid item xs={5} >
                <img src={process.env.PUBLIC_URL + '/coderAcademy.png'} width="200"/>
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
                  <i class="fas fa-phone-alt" style={phoneStyle}></i>
                  {phone}
                </MyTypography>
                <MyTypography myType="subtitle1">
                  <i class="far fa-envelope" style={emailStyle}></i>
                  {email}
                </MyTypography>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box my={5}>
          <Button variant="contained" color="primary" onClick={this.handleClick}>Save as png</Button>
        </Box>
      </div>
    )
  }
}
