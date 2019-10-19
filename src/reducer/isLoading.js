const isLoading = (state = false, action) => {
    if (action.type === 'ISLOADING')
        if (action.isloading !== undefined)
            return action.isLoading;
         else
            return state;
    return state;
};

export default isLoading;