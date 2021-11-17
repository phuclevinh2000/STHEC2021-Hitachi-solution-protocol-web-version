import React from 'react';
// import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutProject from './screens/AboutProject';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3 d-flex justify-content-center'>
        {/* <Container> */}
        <Routes>
          {/* <Route path="/product/:id" element={<ProductScreen />} /> */}
          <Route path="/aboutproject" element={<AboutProject />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
        {/* </Container> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
