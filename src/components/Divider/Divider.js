import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        height: 1,
        background: theme.palette.primary.main
    }
}));

function Divider() {
    const classes = useStyles();
    return (
        <div className={classes.root}/>
    );
}

export default Divider;
