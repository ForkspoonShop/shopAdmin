import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


export const updateProduct = (products) => {
    return {
        type: 'UPDATE_PRODUCT',
        products
    }
};

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        id
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
        const mock = new MockAdapter(axios, {delayResponse: 2000});
        mock.onGet('/users').reply(30, {
            products: [
                {id: 5, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши"},
                {id: 6, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши"},
                {id: 7, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши"}
            ]
        });

        return axios.get('/users')
            .then(function (response) {
                console.log(response.data);
                dispatch(updateProduct(response.data.products));
                dispatch(isLoading(false));
            }).catch(function (error) {
                console.log(error);
            });
    }
}


export const addProduct = (url, name, cost, description, category) => {
    //console.log('addProduct', url, name, cost, description, category);

    return function (dispatch) {
        dispatch(isLoading(true));

        const mock = new MockAdapter(axios, {delayResponse: 20000});
        mock.onPost('/users').reply(200);

        return axios.post('/users', {url, name, cost, description, category,})
            .then(function (response) {
                console.log(response.data);
                dispatch(fetchProduct());
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};