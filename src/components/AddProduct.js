import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions'
import {FormControl, InputLabel, Input, Select, MenuItem, Button, Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

let AddProduct = ({dispatch}) => {
    let inputUrl, inputCost, inputCategory;
    const classes = useStyles();

    return (
        <Paper className={classes.button}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addProduct(inputUrl.value, inputCost.value, inputCategory.value));
                inputUrl.value = ''
            }}>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="component-simple">URL</InputLabel>
                    <Input id="component-simple" ref={node => {
                        inputUrl = node
                    }} placeholder='./img/IMG_1.jpg'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="component-simple">Cost</InputLabel>
                    <Input id="component-simple" ref={node => {
                        inputCost = node
                    }} placeholder='1500'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="component-simple">Category</InputLabel>
                    <Input id="component-simple" ref={node => {
                        inputCategory = node
                    }} placeholder='Броши'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                        //value={values.age}
                        //onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" className={classes.button}>
                    Add
                </Button>
            </form>
        </Paper>
    )
};

AddProduct = connect()(AddProduct);

export default AddProduct

