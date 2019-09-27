import React from 'react';
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ProductsList = ({products, onDelProduct}) => {
    const classes = useStyles;console.log('ProductsList',products);
    return (
        <Paper className={classes.button}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Изображение</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Категория</TableCell>
                        <TableCell>Дейсивия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell component="th" scope="row">
                                {product.id}
                            </TableCell>
                            <TableCell>
                                <img src={product.url} width='50px' alt={product.id}/>
                            </TableCell>
                            <TableCell>{product.cost}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>
                                <IconButton className={classes.button} aria-label="edit">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton className={classes.button} aria-label="delete" onClick={() => onDelProduct(product.id)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default ProductsList;