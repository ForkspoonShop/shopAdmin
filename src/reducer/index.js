import { combineReducers } from 'redux'
import products from './products'
import basket from './basket'

const reducer = combineReducers({
    products,
    basket
});

export default reducer
