import React from 'react';
import {Paper, Typography} from "@material-ui/core";

const Card = ({item, onClick}) => {
    return (
        <Paper>
            <img src={item.url} width="90%" alt={item.cost}/>
            <button  value={item.id} onClick={onClick}>Add</button>
            <Typography variant="h6">
                {item.cost}
            </Typography>
        </Paper>
    )
};

export default Card;