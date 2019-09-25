const product = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':

            return {id:action.id,
                amount:0};
        default:
            return state;
    }
};

const basket = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET':
            console.log('123', state, action);
            return [...state,product(undefined, action)];
        default:
            return state;
    }
};

export default basket;