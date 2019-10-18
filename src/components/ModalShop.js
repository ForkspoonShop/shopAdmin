import ProductForm from "./ProductForm";
import {Modal} from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import {isModal} from '../actions'

const ModalShop = ({onClose, open}) => {
    console.log('modalshop', open);
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={() => onClose()}
        >
            <ProductForm/>
        </Modal>
    )
};

const mapStateToProps = state => {
    return {
        open: state.isModal.open
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClose: () => dispatch(isModal(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalShop);