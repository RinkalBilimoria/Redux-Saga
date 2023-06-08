import { Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../redux/Cart/action";
import { hideCartProducts } from "../../../redux/Cart/action";

export default function MiniCartProduct({ product }) {
  const dispatch = useDispatch();

  const handleRemovedCart = (productId) => {
    dispatch(removeProductFromCart(productId));
  };
  const closeCart = () => {
    dispatch(hideCartProducts());
  };

  return (
    <MenuItem onClick={closeCart}>
      <ListItemAvatar>
        <Avatar src={product.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={product.title}
        secondary={
          <>
            <Typography variant="span"> Qty:{product.qty}</Typography>
            <br />

            <Typography variant="span">
              TotalPrice: {product.totalPrice}
            </Typography>
          </>
        }
      ></ListItemText>

      <IconButton
        aria-label="delete"
        onClick={() => handleRemovedCart(product.id)}
      >
        <Delete />
      </IconButton>
    </MenuItem>
  );
}
