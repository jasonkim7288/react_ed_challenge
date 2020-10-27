import React, { Component } from 'react'

export default class YellingGreeter extends Component {

  render() {
    return (
      <h1>{this.props.message.toUpperCase()}</h1>
    )
  }
}


// import React from 'react'



// function YellingGreeter({ message }) {
//   const messageUpper = message.toUpperCase();
//   return (
//     <h1 >{messageUpper}</h1>
//   )
// }

// export default YellingGreeter;
