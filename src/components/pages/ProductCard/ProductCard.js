import { addToCart } from "../../../redux/Cart/action";
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  //console.warn("card", product);
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            backgroundImage: `url(${product.thumbnail})`,
            height: "300px",
            textAlign: "center",
            alignContent: "center",
            justifyContent: "center",
            backgroundSize: "cover",
          }}
        ></Box>

        <Typography>{product.title}</Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.rating}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onAddToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
