import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Brand from './pages/brand/Brand';
import Contacts from './pages/contacts/Contacts';
import Footer from './components/layout/footer/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import OneModel from './pages/shop/OneModel/OneModel';
import Authorization from './pages/authorization/Authorization';
import Basket from './pages/basket/Basket';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/oneModel' element={<OneModel />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/authorization' element={<Authorization />}></Route>
          <Route path='/brand' element={<Brand />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </React.Fragment>
    </Provider>
  );
}
