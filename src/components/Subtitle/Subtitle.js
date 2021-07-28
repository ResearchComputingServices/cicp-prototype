import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Underline from '../Underline';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

function Subtitle({ children }) {
    const classes = useStyles();
    return (
        <Typography
            className={classes.root}
            variant='h4'
        >
            {children}
            <Underline />
        </Typography>
    );
}

export default Subtitle;
