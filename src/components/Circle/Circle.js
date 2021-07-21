import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    circle: {
        width: 270,
        height: 270,
        background: theme.palette.background.default,
        border: `0.1px solid ${theme.palette.primary.main}`,
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '100%',
        '@media (max-width:780px)': {
            width: 200,
            height: 200,
        },
        '@media (max-width:510px)': {
            width: 180,
            height: 150,
        },
    },
}));

function Circle({ children, background, color }) {
    const classes = useStyles();
    return (
        <Card
            style={{ background, color }}
            className={classes.circle}
            elevation={5}
        >
            {children}
        </Card>
    );
}

export default Circle;
