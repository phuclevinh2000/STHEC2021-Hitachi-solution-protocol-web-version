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
            <Card.Img variant='top' src='/images/hitachilogo.jpg' style={{ width: '27rem', height: '15rem' }}/>
            <Card.Body>
              <Card.Title>To Shop</Card.Title>
              <Card.Text>
                To the web application
              </Card.Text>
              <Link to="/product">
              <Button variant='primary'>To Shop</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
