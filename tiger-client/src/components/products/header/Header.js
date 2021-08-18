import React from 'react';
import { AppBar, Badge, makeStyles } from '@material-ui/core';
import { Home, ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Header({ history }) {
  const classes = useStyle();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <AppBar className={classes.header} color='primary'>
      <div onClick={() => history.push('/')} className={classes.home}>
        <Home />
      </div>
      TIGER PRODUCTS
      <div className={classes.cart}>
        <Badge
          onClick={() => history.push('/cart')}
          color='error'
          badgeContent={cart.length}
        >
          <ShoppingCartOutlined />
        </Badge>
      </div>
    </AppBar>
  );
}

export default withRouter(Header);

const useStyle = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  cart: {
    position: 'absolute',
    right: 25,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  home: {
    position: 'absolute',
    left: 25,
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
}));
