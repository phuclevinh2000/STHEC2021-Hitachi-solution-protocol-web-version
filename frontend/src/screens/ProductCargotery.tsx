import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
// import cargotery from '../data/cargotery';
import Product from '../components/Product';
import CargoteryCard from '../components/CargoteryCard';
import axios from 'axios';

const ProductCargotery: React.FC = () => {
  const [products, setProducts] = useState([])
  const [cargotery, setCargotery] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    
    const fetchCargotery = async () => {
      const { data } = await axios.get('/api/cargotery')
      setCargotery(data)
    }

    fetchCargotery()
    fetchProducts()
  }, [])
  return (
    <>
      <h1>Cargotery</h1>
      <Row>
        {cargotery.map((card) => (
          <Col sm={12}>
            <CargoteryCard card={card} />
          </Col>
        ))}
      </Row>
      <h1>All product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductCargotery;
