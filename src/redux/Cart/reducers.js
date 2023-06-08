import {
  ADD_TO_CART,
  SHOW_PRODUCTS_IN_CART,
  HIDE_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "./constants";

export const initialState = {
  product: [],
  totalPrice: 0,
  show_products: false,
};

export default function cartReducer(state = initialState, action) {
  console.warn(action);
  const productData = [...state.product];
  switch (action.type) {
    case ADD_TO_CART:
      const index = productData.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index >= 0) {
        productData[index].qty++;
        productData[index].totalPrice =
          productData[index].qty * productData[index].price;
      } else {
        productData.push({
          ...action.payload,
          qty: 1,
          totalPrice: action.payload.price,
        });
      }

      return {
        ...state,
        product: productData,
      };

    case SHOW_PRODUCTS_IN_CART:
      return { ...state, show_products: true };

    case HIDE_PRODUCTS_IN_CART:
      return { ...state, show_products: false };

    case REMOVE_PRODUCT_FROM_CART: {
      const product = state.product.filter(
        (product) => product.id !== action.payload
      );
      return { ...state, product };
    }
    default:
      return state;
  }
}
