const isModal = (state = {open: false, updates: false}, action) => {
    if (action.type === 'ISMODAL')
        if (action.isModal !== undefined)
            return Object.assign({}, state, {
                open: action.isModal,
                updates: action.updates,
            });
        else
            return state;
    return state;
};

export default isModal;