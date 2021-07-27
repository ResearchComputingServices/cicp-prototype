import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        height: 1,
        width: 200,
        marginTop: 15,
        background: theme.palette.primary.main,
    },
}));

function Underline() {
    const classes = useStyles();
    return (
        <div className={classes.root} />
    );
}

export default Underline;
