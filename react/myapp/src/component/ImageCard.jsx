  import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ImageCard = ({key,src,title,desc}) => {
  const [Count ,setCount]= useState(0);
const HandleClick = () => {
  console.log("button clicked",Count);
setCount(Count+1)
};
  return (
    <div>
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={src}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button onClick = {HandleClick} variant="primary">Go somewhere</Button>
        {Count}
      </Card.Body>
    </Card>

    </div>
  )
}

export default ImageCard
