import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { CargotegyCard } from '../types/types';
import { Link } from 'react-router-dom';

const CargoteryCard = ({ card }: CargotegyCard) => {
  return (
    <Card className='text-center'>
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Image src={card.background} fluid style={{height: "40vh", width:"70vw"}} rounded/>
        <Card.Title className="py-3">{card.name}</Card.Title>
        <Card.Text>
          {card.description}
        </Card.Text>
        <Link to={`explore/${card.name}`}>
        <Button variant='info'>Explore More</Button>
        </Link>
      </Card.Body>
      {/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
    </Card>
  );
};

export default CargoteryCard;
