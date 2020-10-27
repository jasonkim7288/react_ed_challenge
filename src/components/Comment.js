import React from 'react'
import faker from 'faker'
import Card from './Card';

function Comment(props) {
  return (
    <Card>
      <div className="comment">
        <img src={faker.image.avatar()} alt=""/>
      </div>
      <div className="contetn">
        <p className="author">
          {props.author}
        </p>
        <p className="text">
          {props.text}
        </p>
      </div>
    </Card>
  )
}

export default Comment;