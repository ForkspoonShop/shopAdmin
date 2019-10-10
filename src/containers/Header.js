import React from 'react';
import {connect} from "react-redux";
import {Button, Modal} from "@material-ui/core";
import ProductForm from "../components/ProductForm";
import {fetchProduct} from "../actions";


const Header = ({dispatch}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setOpen(false)
    };
    const load = () => {
        dispatch(fetchProduct());
    };
    return (
        <div onLoad={load()}>
            <Button variant="contained" onClick={handleOpen} type="button">
                Добавить товар
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <ProductForm update={false} modalClose={handleClose}/>
            </Modal>
        </div>
    )
};

export default connect()(Header)