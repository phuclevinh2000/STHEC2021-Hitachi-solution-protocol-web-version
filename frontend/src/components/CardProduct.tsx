import React, {useEffect, useState} from 'react'
// import products from '../data/products'
import { useParams } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CardProduct = () => {
  const { cardname } = useParams()
  const [products, setProducts] = useState([])
  // const product = products.filter((p) => p.category === cardname)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      const filterData = data.filter((p : any) => p.category === cardname)
      setProducts(filterData)
    }
    fetchProducts()
  }, [cardname])
  return (
    <>
      <Link className='btn btn-light my-3' to='/product'>
        Go Back
      </Link>
      <h1>{cardname}</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CardProduct
