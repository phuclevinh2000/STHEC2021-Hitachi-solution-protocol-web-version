import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <Row>
        <Col sm={12} md={6}>
          <Card className='my-3 p-3 rounded' style={{ width: '30rem', height: '30rem' }}>
            <Card.Img variant='top' src='/images/STHEC.png' />
            <Card.Body>
              <Card.Title>Hitachi Energy's Problem STHEC 2021</Card.Title>
              <Card.Text>
                The role of ecological and social values in the choice of
                technology solutions.
              </Card.Text>
              <Link to='/aboutproject'>
               <Button variant='primary'>More About This Project</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className='my-3 p-3 rounded' style={{ width: '30rem', height: '30rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
