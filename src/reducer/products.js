let indexProduct = 2;

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                id: indexProduct++,
                url: action.url,
                cost: action.cost,
                category: action.category,
            };
        case 'DELETE_PRODUCT':
            if (state.id !== action.id) {
                return state
            }
            console.log('255',state);
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state
    }
};

const products = (state = [{id: 0, url: "./img/IMG_1.jpg", cost: "500", category: "Броши"}, {id: 1, url: "./img/IMG_2.jpg", cost: "300", category: "Броши"}], action) =>   {

    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'UPDATE_PRODUCT':
            console.log('UPDATE_PRODUCT',state,action);
            return action.products;
        case 'DELETE_PRODUCT':
            console.log('1',state,action);
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
};

export default products;