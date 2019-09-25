import React from 'react';
import {Box, Grid} from "@material-ui/core";
import Card from "./Card";

const useStyles = (_ => ({
    Card: {
        padding: '20px',
        textAlign: 'center',
    },
}));

const ProductsList = ({products, onAddProduct}) => {
    const classes = useStyles;
    return (
        <div>
            <Box>
                <Grid container>
                    {products.map(item =>
                        <Grid item xs={3} style={classes.Card} key={item.id}>
                            <Card item={item} onClick={() => onAddProduct(item.id)}/>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
};

export default ProductsList;