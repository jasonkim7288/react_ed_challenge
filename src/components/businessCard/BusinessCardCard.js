import { Box, Button } from '@material-ui/core';
import React, { Component, createRef } from 'react'
import html2canvas from 'html2canvas';
import BusinessCardTemplate1 from './BusinessCardTemplate1';
import BusinessCardTemplate2 from './BusinessCardTemplate2';
import BusinessCardSettings from './BusinessCardSettings';
import BusinessCardImageSetting from './BusinessCardImageSetting';
import Carousel from 'react-material-ui-carousel';

export default class BusinessCardCard extends Component {
  constructor(props) {
    super(props);
    this.savingAreaRef = createRef();
    this.state = {
      settings: {
        textColor: '#d1d0d8',
        backgroundColor: '#2a2b2e',
        imgURL: process.env.PUBLIC_URL + '/coderAcademy.png'
      }
    }
  }

  openImage = (base64URL) => {
    var win = window.open();
    win.document.write(`<iframe src="` + base64URL  + `" frameborder="0" style="border:0;
   top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen>
   </iframe>`);
  }

  handleClick = () => {
    html2canvas(this.savingAreaRef.current, {
      scrollX: 0,
      scrollY: -window.window.pageYOffset
    })
      .then(canvas => {
        const url = canvas.toDataURL();
        console.log('url:', url);

        // window.open(url, '_blank');
        // this.openImage(url);
        const w = window.open('about:blank', 'image from canvas');
        w.document.write("<img src='" + url +"' alt='from canvas'/>")
      })
  }

  updateSetting = (key, value) => {
    this.setState({settings: {
      ...this.state.settings,
      [key]: value
    }})
  }

  render() {
    const { textColor, backgroundColor } = this.state.settings;
    const paperStyle = {
      width: '1050px',
      height: '600px',
      minHeight: '600px',
      maxHeight: '600px',
      overflow: 'hidden'
    }
    const savingAreaStyle = {
      margin: '0',
      padding: '0',
      backgroundColor,
      color: textColor,
      height: '100%',
      width: '100%'
    }
    const cardTemplates = [
      (<BusinessCardTemplate1 key="T1" settings={this.state.settings} submittedForm={this.props.submittedForm} />),
      (<BusinessCardTemplate2 key="T2" settings={this.state.settings} submittedForm={this.props.submittedForm} />)
    ]

    return (
      <div >
        <div style={paperStyle}>
          <div ref={this.savingAreaRef} style={savingAreaStyle}>
            <Carousel navButtonsAlwaysVisible={false} autoPlay={false} interval="10000000" style={{margin: '0', padding: '0'}} >
              {
                cardTemplates.map(cardTemplate => cardTemplate)
              }
            </Carousel>

          </div>
        </div>
        <Box my={5}>
          <Box component="span" mr={3}>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Save as png</Button>
          </Box>
          <BusinessCardSettings settings={this.state.settings} updateSettingCb={this.updateSetting}/>
          <BusinessCardImageSetting settings={this.state.settings} updateSettingCb={this.updateSetting}/>
        </Box>
      </div>
    )
  }
}
