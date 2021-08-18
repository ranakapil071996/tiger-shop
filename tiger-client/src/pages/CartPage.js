import React from 'react';
import { useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@material-ui/core';

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <List>
        {cart.map((item) => (
          <ListItem key={item.productId}>
            <ListItemAvatar>
              <Avatar src={item.searchImage} />
            </ListItemAvatar>
            <ListItemText primary={item.productName} secondary={item.brand} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
