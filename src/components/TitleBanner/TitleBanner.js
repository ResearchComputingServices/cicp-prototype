import React from 'react';
import clsx from 'clsx';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/images/banner.jpg';

export const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 200,
        width: '100%',
        textAlign: 'center',
    },
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
}));

function TitleBanner({ children, className }) {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.root, className)}>
            <Typography
                className={classes.titleText}
                variant='h3'
            >
                {children}
            </Typography>
        </Box>
    );
}

export default TitleBanner;
