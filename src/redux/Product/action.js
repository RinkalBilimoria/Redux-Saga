import { FETCH_PRODUCTS, SET_PRODUCTS } from "./constants";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};

export const setProducts = (products) => {
  //console.warn("action",product);
  if (products) {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }
};
