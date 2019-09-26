import React from 'react';
import {Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core";

const useStyles = (_ => ({
    Card: {
        padding: '20px',
        textAlign: 'center',
    },
}));

const ProductsList = ({products, onDelProduct}) => {
    const classes = useStyles;
    return (
        <div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Изображение</TableCell>
                            <TableCell>Цена</TableCell>
                            <TableCell>Категория</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell>
                                    <img src={product.url} width='100px' alt={product.id}/>
                                </TableCell>
                                <TableCell>{product.cost}</TableCell>
                                <TableCell>{product.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
};
/*<Box>
    <Grid container>
        {products.map(item =>
            <Grid item xs={3} style={classes.Card} key={item.id}>
                <Card item={item} onClick={() => onDelProduct(item.id)}/>
            </Grid>
        )}
    </Grid>
</Box>*/
export default ProductsList;