import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutProject from './screens/AboutProject';
import ProductCargotery from './screens/ProductCargotery';
import CardProduct from './components/CardProduct';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3 d-flex justify-content-center'>
        <Container>
          <Routes>
            <Route path='/cart/' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/aboutproject' element={<AboutProject />} />
            <Route path='/product' element={<ProductCargotery />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route
              path='/product/explore/:cardname'
              element={<CardProduct />}
            />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
