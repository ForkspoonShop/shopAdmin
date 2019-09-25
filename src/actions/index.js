export const addProduct = (url,cost) => {
    return {
        type: 'ADD_PRODUCT',
        url,
        cost,
    }
};

export const updateProduct = (id,url,cost) => {
    return {
        type: 'UPDATE_PRODUCT',
        id,
        url,
        cost,
    }
};

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
};

export const addProductToBasket = id => {
    return {
        type: 'ADD_PRODUCT_TO_BASKET',
        id
    }
};

export const removeProductToBasket = id => {
    return {
        type: 'REMOVE_PRODUCT_TO_BASKET',
        id
    }
};

export const deleteProductToBasket = id => {
    return {
        type: 'DELETE_PRODUCT_TO_BASKET',
        id
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};