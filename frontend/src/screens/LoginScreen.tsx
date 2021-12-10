import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../redux/actions/userAction';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector((state: any) => state.userLogin)
  const { loading, error, userInfo} = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'
  console.log(location.search)
  useEffect(() => {
    if(userInfo)  {
      navigate(redirect)  //navigate to redirect route
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e: any) => {
    e.preventDefault()
    //DISPATCH LOGIN
    dispatch(login(email, password))
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passwordShown ? 'text' : 'password'}
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup.Text onClick={togglePassword}>
              <i className='fas fa-eye'></i>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : "/register" }>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
