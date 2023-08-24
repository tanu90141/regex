import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ImageCard = () => {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={}/>
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
          {}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ImageCard
