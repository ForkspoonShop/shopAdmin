import axios from 'axios';


export const updateProduct = (products) => {
    return {
        type: 'UPDATE_PRODUCT',
        products
    }
};

export const isLoading = isloading => {
    return {
        type: 'ISLOADING',
        isloading,
    }
};

export const requestProduct = description => {
    return {
        type: 'REQUEST_PRODUCT',
        description
    }
};

export const receiveProduct = description => {
    return {
        type: 'RECIVE_PRODUCT',
        description
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export function fetchProduct() {
    return function (dispatch) {

        return axios.get('http://localhost:8080/allproducts')
            .then(function (response) {
                console.log(response.data);
                dispatch(updateProduct(response.data));
                dispatch(isLoading(false));
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
}


export const addProduct = (url, name, cost, description, category) => {
    console.log('addProduct', url, name, cost, description, category);

    return function (dispatch) {
        dispatch(isLoading(true));

        return axios.post('http://localhost:8080/addproduct', {URL: url, Name:name, Cost:cost, Description:description, Category:category,headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                console.log(response.data);
                dispatch(fetchProduct())
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};

export const deleteProduct = id => {
    console.log("delete",id);

    return function (dispatch) {
        dispatch(isLoading(true));

        return axios.delete('http://localhost:8080/delproduct/'+id, {headers: {
                'Content-Type': 'application/json'
            }})
            .then(function (response) {
                console.log(response.data);
                dispatch(fetchProduct())
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};