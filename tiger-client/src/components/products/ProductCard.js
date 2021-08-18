import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../store/actions/types';

export default function ProductCard({ data }) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const {
    searchImage,
    brand,
    productName,
    price,
    primaryColour,
    gender,
    productId
  } = data;

  const addToCart = () => {
    dispatch({
      type: ADD_PRODUCT,
      payload: data
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: data
    });
  };
  console.log(cart);
  const isCartSelected = () => {
    return cart.some((item) => productId === item.productId);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <b>Gender: </b>
          {gender}
        </div>
        <div>
          <b>Color: </b>
          {primaryColour}
        </div>
      </div>
      <img
        loading='lazy'
        src={searchImage}
        alt={brand}
        className={classes.img}
        onLoad={(e) => (e.target.style.opacity = 1)}
      />
      <div className={classes.details}>
        <h3>{brand}</h3>
        <p className={classes.subTitle}>{productName}</p>
        <p>Cost: {price}</p>
        {isCartSelected() ? (
          <Button
            onClick={removeFromCart}
            className={classes.removeFromcart}
            variant='contained'
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            onClick={addToCart}
            className={classes.addToCart}
            variant='contained'
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    border: '1px solid #777',
    borderRadius: 4,
    width: '100%',
    padding: 4
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14
  },
  img: {
    width: '100%',
    margin: '5px 0',
    transition: 0.2,
    opacity: 0
  },
  details: {
    padding: 20
  },
  addToCart: {
    color: '#fff',
    background: '#3f51b5',
    '&:hover': {
      color: '#fff',
      background: '#3f51b5'
    }
  },
  removeFromcart: {
    color: '#fff',
    background: '#EF4444',
    '&:hover': {
      color: '#fff',
      background: '#EF4444'
    }
  },
  subTitle: {
    wordBreak: 'break-word',
    height: 80
  }
}));
