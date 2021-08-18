import React from 'react';
import { Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import { makeStyles } from '@material-ui/core';
import Header from './components/products/header/Header';

export default function Routes() {
  const classes = useStyle();
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Route exact={true} path='/' component={ProductsPage} />
        <Route exact={true} path='/cart' component={CartPage} />
      </div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  content: {
    marginTop: 60,
    padding: 20
  }
}));
