import React from "react";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    progress: {
        position: 'fixed',
        bottom:'30px',
        right: '30px',
    },
}));

const Loading = ({isloading}) => {
    const classes = useStyles();
    return (
        <div style={{display: isloading ? 'block' : 'none'}}>
            <CircularProgress className={classes.progress} size={60}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isloading: state.isloading
    }
};

export default connect(mapStateToProps)(Loading)