import React from 'react'

const styles = {
  backgroundColor: 'gray'
}

const Card = (props) => {
  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default Card
