import { SET_PRODUCTS } from "./constants";

export const initialState = {
  products: [],
};

export default function productReducer(state = initialState, action){
  //console.warn("action file",action);
  switch (action.type) {
    case SET_PRODUCTS:
      return {...action.state, products: action.payload };
    default:
      return state;
  }
};
