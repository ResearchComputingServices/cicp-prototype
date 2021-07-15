import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        paddingTop: theme.spacing(5),
        textAlign: 'center'
    },
    highlight: { color: '#CF112D' },
}));

const SegmentC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h1 className={classes.highlight}>Budget Scope $3.5 Million</h1>
            <h1 className={classes.highlight}>Timeframe 2022-2027</h1>
        </Box>
    );
};

export default SegmentC;
