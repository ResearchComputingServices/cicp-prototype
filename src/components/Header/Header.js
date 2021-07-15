import React from 'react';
import Logo from '../Logo';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: theme.spacing(1)
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header
            className={classes.root}
        >
            <Logo />
        </header>
    );
};

export default Header;
