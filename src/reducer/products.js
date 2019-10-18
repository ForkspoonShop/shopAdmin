const products = (state = [{
    ID: 0,
    URL: "./img/IMG_1.jpg",
    Name: "None",
    Description: "",
    Cost: "0000",
    Category: "None"
}], action) => {
    if (action.type === 'UPDATE_PRODUCTS'){
        return action.products;}
    return state
};

export default products;