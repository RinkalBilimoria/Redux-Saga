import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "./constants";
import productsService from '../../services/productServices';
import { setProducts } from "./action";

function* fetchProductsList() {
  try{
    const product = yield call(productsService.getAllProducts);
    /* const data = yield fetch("https://dummyjson.com/products");
    const products = yield data.json();  */
    //console.warn("saga ", product); 
    yield put(setProducts(product));
  } catch (e) {}
 
} 

export default function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsList);
}


