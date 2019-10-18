import axios from 'axios';

export const updateProducts = (products) => {
    return {
        type: 'UPDATE_PRODUCTS',
        products
    }
};

export const isLoading = isLoading => {
    return {
        type: 'ISLOADING',
        isLoading,
    }
};

export const isModal = (isModal, updates) => {

    console.log('action:ISMODAL', isModal);
    return {
        type: 'ISMODAL',
        isModal,
        updates,
    }
};

export const changeUpdateImage = imageURL => {
    console.log('action:CHANGE_UPDATE_IMAGE');
    return {
        type: 'CHANGE_UPDATE_IMAGE',
        imageURL
    }
};

export const changeProductUpdate = (product) => {
    console.log('action:CHANGE_UPDATE_UPDATE');
    return {
        type: 'CHANGE_PRODUCT_UPDATE',
        product
    }
};

export const changeProductClear = () => {
    console.log('action:CHANGE_UPDATE_CLEAR');
    return {
        type: 'CHANGE_PRODUCT_CLEAR'
    }
};


const urlAxios = "http://192.168.0.115:8080";

export function fetchProduct() {
    return function (dispatch) {
        const link = urlAxios + '/allproducts';
        return axios.get(link)
            .then(function (response) {
                console.log(response.data);
                dispatch(updateProducts(response.data));
                dispatch(isLoading(false));
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
}

export const addProduct = (url, name, cost, description, category) => {
    //console.log(url +'/addproduct');
    return function (dispatch) {
        dispatch(isLoading(true));
        return axios.post(urlAxios + '/addproduct', {
            URL: url, Name: name, Cost: cost, Description: description, Category: category, headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(fetchProduct())
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};

export const openUpdateProduct = product => {
    console.log('action:ISMODAL', product);
    return function (dispatch) {
        dispatch(changeProductUpdate(product));
        return dispatch(isModal(true, true))
    }
};

export const updateProduct = (id, url, name, cost, description, category) => {
    console.log('updateProduct');
    return function (dispatch) {
        dispatch(isLoading(true));
        return axios.post(urlAxios + '/updateproduct/' + id, {
            URL: url, Name: name, Cost: cost, Description: description, Category: category, headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response.data);
            dispatch(fetchProduct())
        }).catch(function (error) {
            console.log(error);
            dispatch(isLoading(false));
        });
    }
};

export const deleteProduct = id => {
    //console.log("delete", id);
    return function (dispatch) {
        dispatch(isLoading(true));
        return axios.delete(urlAxios + '/delproduct/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(fetchProduct())
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};

export const uploadImage = formData => {
    return function (dispatch) {
        dispatch(isLoading(true));

        return axios.post(urlAxios + '/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form'
            }
        })
            .then(function (response) {
                console.log('изображение загружено', response.data);
                dispatch(changeUpdateImage(response.data))
            }).catch(function (error) {
                console.log(error);
                dispatch(isLoading(false));
            });
    }
};

