import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    textBody: {
        width: '100%',
        marginTop: -30,
        margin: 'auto',
        position: 'relative',
        padding: '0px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    higlightedWord: {
        margin: '8px 0 0px',
        color: theme.palette.primary.main,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        margin: theme.spacing(2),
    },
}));

const HighlightedChar = ({ children }) => {
    const classes = useStyles();
    return <h1 className={classes.higlightedWord}>{children}</h1>;
};

const Title = () => {
    const classes = useStyles();
    return (
        <div className={classes.textBody}>
            <Box
                display='flex'
                mt={2}
            >
                <div className={classes.title}>
                    <HighlightedChar>C</HighlightedChar>
                    <h2>HARITY</h2>
                </div>
                <div className={classes.title}>
                    <HighlightedChar>I</HighlightedChar>
                    <h2>NSIGHTS</h2>
                </div>
                <div className={classes.title}>
                    <HighlightedChar>C</HighlightedChar>
                    <h2>ANADA</h2>
                </div>
                <div className={classes.title}>
                    <HighlightedChar>P</HighlightedChar>
                    <h2>ROJECT</h2>
                </div>
            </Box>
        </div>
    );
};

export default Title;
