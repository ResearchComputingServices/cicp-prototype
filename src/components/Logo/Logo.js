import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/carleton.svg';

export const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.default,
        padding: theme.spacing(1),
    },
}));

const Logo = ({ width, height, className, style }) => {
    const classes = useStyles();
    return (
        <img
            alt='Carleton University'
            className={clsx(className, classes.root)}
            height={height || 64}
            src={logo}
            style={style}
            width={width || 250}
        />
    );
};

export default Logo;
