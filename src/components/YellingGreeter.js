import React from 'react'

function YellingGreeter({ message }) {
  const messageUpper = message.toUpperCase();
  return (
    <h1 >{messageUpper}</h1>
  )
}

export default YellingGreeter;
