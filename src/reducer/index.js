import { combineReducers } from 'redux'
import products from './products'
import isloading from './isloading'

const reducer = combineReducers({
    products,
    isloading,
});

export default reducer
