const isLoading = (state = false, action) => {
    //console.log('loading: ', state, '|||', action);
    if (action.type === 'ISLOADING')
        if (action.isloading !== undefined) {
            console.log(action.isLoading);
            return action.isLoading;
        } else {
            console.log(state);
            return state;
        }
    return state;
};

export default isLoading;