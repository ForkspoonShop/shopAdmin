let indexProduct = 2;

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ID: indexProduct++,
                URL: action.url,
                Cost: action.cost,
                Description: action.description,
                Category: action.category,
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

const products = (state = [{ID: 0, URL: "./img/IMG_1.jpg", Name: "Ёжик", Description:"Брошь ручной работы из дерева 5см", Cost: "500", Category: "Броши"}], action) =>   {

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