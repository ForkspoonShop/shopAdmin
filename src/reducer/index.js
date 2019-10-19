import {combineReducers} from 'redux'
import products from './products'
import isLoading from './isLoading'
import changingProduct from "./changingProduct";
import isModal from "./isModal";

const reducer = combineReducers({
    products,
    isLoading,
    isModal,
    changingProduct,
});

export default reducer
