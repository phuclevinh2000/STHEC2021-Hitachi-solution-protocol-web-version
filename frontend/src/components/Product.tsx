import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductCardType } from '../types/types';
import Rating from './Rating';

const Product = ({product}:ProductCardType) => {
  return (
    <Card className="my-1 p-3 rounded h-100" >
      <Link to={`/product/${product._id}`}>
       <Card.Img src={product.image} variant='top' style={{height: "220px"}}/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='div'>
        CO2 Emisson: {product.emissonCO2}kg
      </Card.Text>

      <Card.Text as='div'>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as='h3'>${product.prices}</Card.Text>
    </Card>
  )
}

export default Product
