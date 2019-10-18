const changingProduct = (state = {
    ID: 0,
    URL: "",
    Name: "",
    Description: "",
    Cost: "",
    Category: "",
}, action) => {
    switch (action.type) {
        case 'CHANGE_UPDATE_IMAGE':
            console.log('CHANGE_UPDATE_IMAGE2', action.imageURL);
            return Object.assign({}, state, {
                URL: action.imageURL,
            });
        case 'CHANGE_PRODUCT_CLEAR':
            return Object.assign({}, state, {
                ID: 0,
                URL: "",
                Name: "",
                Description: "",
                Cost: "",
                Category: "",
            });
        case 'CHANGE_PRODUCT_UPDATE':
            return Object.assign({}, state, {
                ID: action.product.ID,
                URL: action.product.URL,
                Name: action.product.Name,
                Description: action.product.Description,
                Cost: action.product.Cost,
                Category: action.product.Category,
            });
        default:
            return state;
    }
};

export default changingProduct;