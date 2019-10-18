import {connect} from 'react-redux'
import ProductsList from '../components/ProductsList'
import {deleteProduct, openUpdateProduct} from '../actions'
/*
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
};*/

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelProduct: (id) => {
            dispatch(deleteProduct(id))
        },
        onEditProduct: (product) => {
            dispatch(openUpdateProduct(product))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList)