import {connect} from 'react-redux'
import ProductsList from '../components/ProductsList'
import {addProductToBasket} from '../actions'

const getVisibleProduct = (products, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return products.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return products.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return products;
    }
};

const mapStateToProps = (state) => {
    return {
        products: getVisibleProduct(state.products, 'SHOW_ALL')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (id) => {
            dispatch(addProductToBasket(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList)