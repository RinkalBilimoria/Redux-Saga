import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Product/action";
import ProductCard from "../components/pages/ProductCard/ProductCard";

export default function Home() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product, index) => {
          return (
            <Grid item md={3} xs={12} lg={3} key={index}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
