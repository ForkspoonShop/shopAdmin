import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions'

let AddProduct = ({dispatch}) => {
    let inputUrl, inputCost, inputCategory;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addProduct(inputUrl.value, inputCost.value, inputCategory.value));
                inputUrl.value = ''
            }}>
                <input ref={node => {
                    inputUrl = node
                }} placeholder='url'/>
                <input ref={node => {
                    inputCost = node
                }} placeholder='cost'/>
                <input ref={node => {
                    inputCategory = node
                }} placeholder='category'/>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
};

AddProduct = connect()(AddProduct);

export default AddProduct

