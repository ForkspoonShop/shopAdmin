import React from 'react'
import {connect} from 'react-redux'
import {addProduct, updateProduct} from '../actions'
import {FormControl, Typography, InputLabel, Button, Paper, MenuItem, Select, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1) + "px 0",
        display: 'block',
    },
    paper: {
        margin: '50px auto 0',
        width: '300px',
        padding: '20px',
    },
}));

let ProductForm = ({dispatch, update = false, product, modalClose}) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        url: '',
        name: '',
        cost: '',
        description: '',
        category: '',
    });
    if (update) {
        setValues({
            url: product.URL,
            name:  product.Name,
            cost:  product.Cost,
            description:  product.Description,
            category:  product.Category,
        });
    }
    console.log(values);
    const handleChange = event => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
                {update ? "Изменение товара" : "Добавление товара"}
            </Typography>
            <form onSubmit={e => {
                e.preventDefault();
                console.log("qwweqweqweqweqweqweqwe", values.category);
                if (update)
                    dispatch(updateProduct(values.url, values.name, values.cost, values.description, values.category));
                else
                    dispatch(addProduct(values.url, values.name, values.cost, values.description, values.category));
                modalClose();
                setValues({
                    url: '',
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
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Имя"
                    name='name'
                    value={values.name}
                    className={classes.button}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Стоимость"
                    name='cost'
                    value={values.cost}
                    className={classes.button}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Описание"
                    name='description'
                    value={values.description}
                    className={classes.button}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rowsMax="10"
                    fullWidth
                />
                <FormControl className={classes.button} variant="outlined">
                    <InputLabel htmlFor="Category">Категории</InputLabel>
                    <Select
                        value={values.category}
                        onChange={handleChange}
                        inputProps={{
                            name: 'category',
                            id: 'Category',
                        }}
                        fullWidth
                    >
                        <MenuItem value={'Броши'}>Броши</MenuItem>
                        <MenuItem value={'Серьги'}>Серьги</MenuItem>
                        <MenuItem value={'Браслеты'}>Браслеты</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" className={classes.button} type="submit" fullWidth>
                    {update ? "Изменить" : "Добавить"}
                </Button>
            </form>
        </Paper>
    )
};

ProductForm = connect()(ProductForm);

export default ProductForm

