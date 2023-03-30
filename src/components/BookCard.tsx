import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  title: string;
  content: string;
  image:string;
}

const BookCard: React.FC<Props> = ({title, content, image}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary" style={{fontFamily:"Segoe UI",width:"100%", background:"black",border:"black"}}>$ 14.99</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;