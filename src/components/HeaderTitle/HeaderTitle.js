import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    textBody: {
        color: 'black',
        width: '100%',
        margin: 'auto',
        position: 'relative',
        padding: '0px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    higlightedWord: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(0.5)
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(1),
        flexDirection: 'row',
    },
}));

const HighlightedChar = ({ children }) => {
    const classes = useStyles();
    return <Typography variant='h4' className={classes.higlightedWord}>{children}</Typography>;
};

const HeaderTitle = () => {
    const classes = useStyles();
    return (
        <div className={classes.textBody}>
            <div className={classes.title}>
                <HighlightedChar>C</HighlightedChar>
                <Typography variant='h5'>HARITY</Typography>
            </div>
            <div className={classes.title}>
                <HighlightedChar>I</HighlightedChar>
                <Typography variant='h5'>NSIGHTS</Typography>
            </div>
            <div className={classes.title}>
                <HighlightedChar>C</HighlightedChar>
                <Typography variant='h5'>ANADA</Typography>
            </div>
            <div className={classes.title}>
                <HighlightedChar>P</HighlightedChar>
                <Typography variant='h5'>ROJECT</Typography>
            </div>
        </div>
    );
};

export default HeaderTitle;
