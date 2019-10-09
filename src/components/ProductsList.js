import React from 'react';
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    paper: {
        margin: '20px 0 0',
    },
}));

const ProductsList = ({products, onDelProduct}) => {
    const classes = useStyles();
    console.log('ProductsList', products);
    return (
        <Paper className={classes.paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: '30px'}}>id</TableCell>
                        <TableCell style={{width: '100px'}}>Изображение</TableCell>
                        <TableCell>Название</TableCell>
                        <TableCell>Цена</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Категория</TableCell>
                        <TableCell style={{width: '100px'}} align="center">Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(product => (
                            <TableRow key={product.ID}>
                                <TableCell component="th" scope="row" style={{width: '30px'}}>
                                    {product.ID}
                                </TableCell>
                                <TableCell style={{width: '100px'}}>
                                    <img src={product.URL} width='50px' alt={product.Name}/>
                                </TableCell>
                                <TableCell>{product.Name}</TableCell>
                                <TableCell>{product.Cost}</TableCell>
                                <TableCell>{product.Description}</TableCell>
                                <TableCell>{product.Category}</TableCell>
                                <TableCell style={{width: '100px'}} align="center">
                                    <IconButton aria-label="edit">
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="delete"
                                                onClick={() => onDelProduct(product.ID)}>
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