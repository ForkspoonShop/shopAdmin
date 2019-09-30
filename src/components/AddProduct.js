import React from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions'
import {FormControl, InputLabel, Button, Paper, MenuItem, Select, TextField} from "@material-ui/core";
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
    const classes = useStyles();
    const [values, setValues] = React.useState({
        url: '',
        name: '',
        cost: '',
        description: '',
        category: '',
    });


    const handleChange = event => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    return (
        <Paper className={classes.paper}>
            <form onSubmit={e => {
                e.preventDefault();
                console.log(values.url);
                dispatch(addProduct(values.url, values.name, values.cost, values.description, values.category));
                setValues({url: '',
                    name: '',
                    cost: '',
                    description: '',
                    category: '',
                });
            }}>

                <TextField
                    label="URL"
                    name='url'
                    value={values.url}
                    className={classes.button}
                    onChange={handleChange}
                />
                <TextField
                    label="Имя"
                    name='name'
                    value={values.name}
                    className={classes.button}
                    onChange={handleChange}
                />
                <TextField
                    label="Стоимость"
                    name='cost'
                    value={values.cost}
                    className={classes.button}
                    onChange={handleChange}
                />
                <TextField
                    label="Описание"
                    name='description'
                    value={values.description}
                    className={classes.button}
                    onChange={handleChange}
                />
                <FormControl className={classes.button}>
                    <InputLabel htmlFor="Category">Категории</InputLabel>
                    <Select
                        value={values.category}
                        onChange={handleChange}
                        inputProps={{
                            name: 'category',
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

