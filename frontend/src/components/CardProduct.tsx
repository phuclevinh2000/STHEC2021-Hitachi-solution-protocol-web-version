import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import Product from './Product'
import { Link } from 'react-router-dom'
import { listProducts } from '../redux/actions/productAction'
import { ProductType } from '../types'

const CardProduct = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state: any) => state.productList);
  const { cardname } = useParams()
  
  const { products } = productList;
  const product = products.filter((p: { category: string | undefined }) => p.category === cardname)
  
  // console.log(product)
  useEffect(() => {
    // const fetchProducts = async () => {
      
    //   const filterData = data.filter((p : any) => p.category === cardname)
    // }
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <Link className='btn btn-light my-3' to='/product'>
        Go Back
      </Link>
      <h1>{cardname}</h1>
      <Row>
        {product.map((product: ProductType) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CardProduct
