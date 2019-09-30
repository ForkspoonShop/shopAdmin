const isloading = (state = false, action) => {
    console.log('loading: ', state, '|||', action);
    if (action.isloading !== undefined) {
        console.log(action.isloading);
        return action.isloading;
    } else {
        console.log(state);
        return state;
    }
};

export default isloading;