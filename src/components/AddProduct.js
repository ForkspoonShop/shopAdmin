import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions'

let AddProduct = ({dispatch}) => {
    let inputUrl, inputCost;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addProduct(inputUrl.value, inputCost.value));
                inputUrl.value = ''
            }}>
                <input ref={node => {
                    inputUrl = node
                }} placeholder='url'/>
                <input ref={node => {
                    inputCost = node
                }} placeholder='cost'/>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
};

AddProduct = connect()(AddProduct);

export default AddProduct

