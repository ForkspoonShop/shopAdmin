import React from 'react';
import {connect} from "react-redux";
import {Button} from "@material-ui/core";
import {fetchProduct, isModal} from "../actions";

const Header = ({onLoads, onOpen}) => {
    return (
        <div onLoad={onLoads()}>
            <Button variant="contained" onClick={() => onOpen()} type="button">
                Добавить товар
            </Button>

        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        isModal: state.isModal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpen: () => {
            console.log('onopen');
            dispatch(isModal(true))
        },
        "onLoads": () => {
            console.log('onload');
            dispatch(fetchProduct())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)