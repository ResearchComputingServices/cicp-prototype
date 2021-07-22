import React from 'react';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/images/banner.jpg'

export const useStyles = makeStyles(() => ({
    root: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 200,
        width: '100%',
        textAlign: 'center'
    },
}));

function TitleBanner({ children, className }) {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.root, className)}>
            {children}
        </Box>
    );
}

export default TitleBanner;
