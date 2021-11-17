import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../data/products';
import cargotery from '../data/cargotery';
import Product from '../components/Product';
import CargoteryCard from '../components/CargoteryCard';

const ProductCargotery: React.FC = () => {
  return (
    <>
      <h1>Cargotery</h1>
      <Row>
        {cargotery.map((card) => (
          <Col key={card._id} sm={12}>
            <CargoteryCard card={card} />
          </Col>
        ))}
      </Row>
      <h1>All product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCargotery;
