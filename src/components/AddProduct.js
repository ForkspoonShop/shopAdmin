import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions'
import {FormControl, InputLabel, Input,  Button, Paper, MenuItem, Select} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: '200px',
    },
    paper: {
        margin: theme.spacing(1),
    },
}));

let AddProduct = ({dispatch}) => {
    let inputUrl, inputName, inputDescription, inputCost;
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
    });

    const handleChange = event => {
        console.log(event.target.name,event.target.value,setValues);
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Paper className={classes.paper}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addProduct(inputUrl.value, inputName.value, inputCost.value, inputDescription.value, values.age));
                inputUrl.value = '';
                inputName.value = '';
                inputCost.value = '';
                inputDescription.value = '';
                values.age = '';
            }}>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="Url">URL</InputLabel>
                    <Input id="Url" ref={node => {
                        inputUrl = node
                    }} placeholder='./img/IMG_1.jpg'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="name">Название</InputLabel>
                    <Input id="name" ref={node => {
                        inputName = node
                    }} placeholder='ракета'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="Cost">Стоимость</InputLabel>
                    <Input id="Cost" ref={node => {
                        inputCost = node
                    }} placeholder='1500'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="description">Описание</InputLabel>
                    <Input id="description" ref={node => {
                        inputDescription = node
                    }} placeholder='Брошь в виде ракеты 8см'/>
                </FormControl>
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="Category" labelWidth='10'>Категории</InputLabel>
                    <Select
                        value={values.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'Category',
                        }}
                    >
                        <MenuItem value={10}>Броши</MenuItem>
                        <MenuItem value={20}>Серьги</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" className={classes.button} type="submit">
                    Add
                </Button>
            </form>
        </Paper>
    )
};


AddProduct = connect()(AddProduct);

export default AddProduct

