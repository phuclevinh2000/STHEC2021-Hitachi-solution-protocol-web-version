import React from 'react'
import products from '../data/products'
import { useParams } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'

const CardProduct = () => {
  const { cardname } = useParams()
  const product = products.filter((p) => p.category === cardname)
  return (
    <>
      <h1>{cardname}</h1>
      <Row>
        {product.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CardProduct
