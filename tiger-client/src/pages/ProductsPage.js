import { CircularProgress, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProducts } from '../store/actions/ProductAction';
import { GET_PRODUCTS } from '../store/actions/types';

function ProductsPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const classes = useStyle();
  const products = useSelector((state) => state.ui.products);
  console.log(products, 'pp');
  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllProducts = async () => {
    const res = await getProducts();
    if (res) {
      dispatch({
        type: GET_PRODUCTS,
        payload: res
      });
    }
    setLoading(false);
  };
  if (loading) {
    return (
      <div className={classes.loader}>
        <CircularProgress size={20} />
      </div>
    );
  }
  return (
    <div className={classes.container + ' fadeIn'}>
      {products.map((item) => (
        <div className={classes.product} key={item.searchImage}>
          <ProductCard data={item} />
        </div>
      ))}
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  loader: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  product: {
    width: '18%',
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      width: '20%',
      marginBottom: 20
    },
    [theme.breakpoints.down('sm')]: {
      width: '22.5%',
      marginBottom: 20
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginBottom: 20
    }
  }
}));

export default ProductsPage;
