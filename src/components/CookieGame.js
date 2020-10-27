import React, { Component, createRef } from 'react'
import { Button, Box, Badge, TextField} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';

class CookieGame extends Component {
  constructor(props) {
    super(props);
    this.numInput = createRef();
    this.state = {
      number: 0,
      plusCount: 0,
      minusCount: 0,
      step: 1
    };
  }

  handleClick(num) {
    this.setState({
      number: this.state.number + num,
      plusCount: this.state.plusCount + (num >= 0 ? 1 : 0),
      minusCount: this.state.minusCount + (num < 0 ? 1 : 0),
    })
  }

  handleNumberClick(e) {
    this.setState({ ...this.state, step: parseInt(this.numInput.value)});
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.handleClick(this.state.step);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { number, plusCount, minusCount } = this.state;

    console.log('number, plusCount, minusCount:', number, plusCount, minusCount);

    return (
      <Box my={8}>
        <h1>{number}</h1>
        <Box component="span" mr={5}>
          <Badge badgeContent={plusCount} color="secondary">
            <Button variant="contained" color="primary" onClick={() => this.handleClick(this.state.step)} startIcon={<AddIcon />}>
              Plus
            </Button>
          </Badge>
        </Box>
        <Badge badgeContent={minusCount} color="secondary">
          <Button variant="contained" color="primary" onClick={() => this.handleClick(-this.state.step)} startIcon={<RemoveIcon />}>
            Minus
          </Button>
        </Badge>
        <Box component="span" mx={5}>
          <TextField inputRef={ref => { this.numInput = ref; }} id="standard-number" defaultValue='1' label="Number" type="number" InputLabelProps={{shrink: true}} />
        </Box>
        <Button variant="contained" color="secondary" onClick={() => this.handleNumberClick()} startIcon={<EditIcon />}>
          Change the increment
        </Button>
      </Box>
    )
  };
}

export default CookieGame;