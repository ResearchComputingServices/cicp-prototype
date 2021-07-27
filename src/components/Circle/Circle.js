import React from 'react';
import clsx from 'clsx';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    circle: {
        width: 270,
        height: 270,
        background: theme.palette.primary.main,
        color: 'white',
        textAlign: 'center',
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
            height: 180,
        },
        '&:hover': { transform: 'scale(1.02)' },
    },
}));

function Circle({ children, onClick, className }) {
    const classes = useStyles();
    return (
        <Card
            className={clsx(classes.circle, className)}
            elevation={7}
            onClick={onClick}
        >
            {children}
        </Card>
    );
}

export default Circle;
