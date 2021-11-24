import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
// import cargotery from '../data/cargotery';
import Product from '../components/Product';
import CargoteryCard from '../components/CargoteryCard';
import { listProducts } from '../redux/actions/productAction';
import { listCargotery } from '../redux/actions/cargoteryAction';
import { ProductType, CargoteryType } from '../types';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductCargotery: React.FC = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const cargoteryList = useSelector((state: any) => state.cargoteryList);

  const { loading, error, products } = productList;
  const { cargoterys } = cargoteryList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCargotery());
  }, [dispatch]);

  // const cargotery: any[] = []
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error} </Message>
      ) : (
        <>
          <h1>Cartegory</h1>
          <Row>
            {cargoterys.map((card: CargoteryType) => (
              <Col key={card._id} sm={12}>
                <CargoteryCard card={card} />
              </Col>
            ))}
          </Row>
          <h1>All product</h1>
          <Row>
            {products.map((product: ProductType) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ProductCargotery;
