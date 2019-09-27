import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const addProduct = (url, cost, category) => {
    console.log('addProduct',url, cost, category);
    return {
        type: 'ADD_PRODUCT',
        url,
        cost,
        category,
    }
};

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
        const mock = new MockAdapter(axios,{ delayResponse: 2000 });
        mock.onGet('/users').reply(200, {
            products: [
                {id:5, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши" },
                {id:6, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши" },
                {id:7, url: "./img/IMG_2.jpg", cost: "100", category: "Бр11оши" }
            ]
        });

        return axios.get('/users')
            .then(function(response) {
                console.log(response.data);
                dispatch(updateProduct(response.data.products));
            });
    }
}

