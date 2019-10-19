import React from 'react'
import {connect} from 'react-redux'
import {addProduct, changeProductClear, isModal, updateProduct, uploadImage} from '../actions'
import {FormControl, Typography, InputLabel, Button, Paper, MenuItem, Select, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ImageUploader from 'react-images-upload';

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
    image: {
        width: '100%',
    },
    none: {
        display: 'none',
    },
}));

let ProductForm = ({dispatch, update = false, changingProduct,}) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        url: '',
        name: '',
        cost: '',
        description: '',
        category: '',
    });
    const [formError, setFormError] = React.useState({
        url: false,
        name: false,
        cost: false,
        description: false,
        category: false,
    });

    React.useEffect(() => {
        if (update)
            setValues({
                url: changingProduct.URL,
                name: changingProduct.Name,
                cost: changingProduct.Cost,
                description: changingProduct.Description,
                category: changingProduct.Category,
            });
    }, [update, changingProduct]);

    const onDrop = picture => {
        const formData = new FormData();
        formData.append('file', picture[picture.length - 1]);
        console.log("`123123", formData.get('file'), ' /// ', picture);
        if (formData.get('file') !== undefined) {
            dispatch(uploadImage(formData))
        }
    };

    //console.log('formu', update);

    const handleChange = event => {
        switch (event.target.name) {
            case 'name':
                setFormError({...formError, 'name': false});
                setValues({...values, [event.target.name]: event.target.value});
                break;
            case 'cost':
                if (event.target.value.match("^(\\d){0,6}$") !== null) {
                    setFormError({...formError, 'cost': false});
                    setValues({...values, [event.target.name]: event.target.value});
                }
                break;
            case 'description':
                setFormError({...formError, 'description': false});
                setValues({...values, [event.target.name]: event.target.value});
                break;
            case 'category':
                setFormError({...formError, 'category': false});
                setValues({...values, [event.target.name]: event.target.value});
                break;
            default:
                setValues({...values, [event.target.name]: event.target.value});
        }
    };

    const checkForm = (formURL, formName, formCost, formDescription, formCategory) => {
        let error = {'url': false, 'name': false, 'cost': false, 'category': false};
        if (formURL === '')
            error = {...error, 'url': true};
        if (formName === '')
            error = {...error, 'name': true};
        if (formCost === '')
            error = {...error, 'cost': true};
        if (formCategory === '')
            error = {...error, 'category': true};
        setFormError({...formError, ...error});
        return error.url === false && error.name === false && error.cost === false && error.category === false;
    };

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
                {update ? "Изменение товара" : "Добавление товара"}
            </Typography>
            <form onSubmit={e => {
                e.preventDefault();
                console.log(changingProduct.URL);
                if (checkForm(changingProduct.URL, values.name, values.cost, values.description, values.category)) {
                    if (update)
                        dispatch(updateProduct(changingProduct.ID, changingProduct.URL, values.name, values.cost, values.description, values.category));
                    else
                        dispatch(addProduct(changingProduct.URL, values.name, values.cost, values.description, values.category));
                    dispatch(isModal(false));
                    dispatch(changeProductClear());
                    setValues({
                        url: '',
                        name: '',
                        cost: '',
                        description: '',
                        category: '',
                    });
                }
            }}>
                <ImageUploader
                    withIcon={false}
                    buttonText={changingProduct.URL === '' ? 'Выберите изображение' : 'Изменить изображение'}
                    withLabel={false}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={10242880}
                    singleImage={true}
                    onChange={onDrop}
                />
                <img src={'./img/' + changingProduct.URL} alt='qwe'
                     className={changingProduct.URL !== '' ? classes.image : classes.none}/>
                <TextField
                    label="Имя"
                    name='name'
                    value={values.name}
                    className={classes.button}
                    onChange={handleChange}
                    fullWidth
                    error={formError.name}
                />
                <TextField
                    label="Стоимость"
                    name='cost'
                    value={values.cost}
                    className={classes.button}
                    onChange={handleChange}
                    fullWidth
                    error={formError.cost}
                />
                <TextField
                    label="Описание"
                    name='description'
                    value={values.description}
                    className={classes.button}
                    onChange={handleChange}
                    multiline
                    rowsMax="10"
                    fullWidth
                    error={formError.description}
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
                        fullWidth
                        error={formError.category}
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


const mapStateToProps = (state) => {
    return {
        changingProduct: state.changingProduct,
        update: state.isModal.updates,
    }
};

ProductForm = connect(mapStateToProps)(ProductForm);

export default ProductForm

