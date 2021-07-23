import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        border: '5px solid #fff',
        borderRadius: 150,
        maxWidth: 250,
        height: 250,
    },
}));

const Avatar = ({ src, alt, className }) => {
    const classes = useStyles();
    return (
        <img src={src} alt={alt} className={clsx(classes.root, className)}/>
    );
};

export default Avatar;
