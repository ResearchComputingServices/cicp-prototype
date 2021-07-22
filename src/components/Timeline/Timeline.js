import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        paddingTop: theme.spacing(5),
        textAlign: 'center',
        marginBottom: theme.spacing(1),
    },
    segments: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: theme.spacing(2),
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    highlight: { color: '#CF112D' },
    mutedText: {
        color: '#6c757d',
        '&:hover': {
            color: '#424242',
            fontWeight: 600
        },
        cursor: 'pointer'
    },
}));

const SegmentB = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box pb={3}>
                <Typography variant='h4'>
                    Project Timeline
                </Typography>
            </Box>
            <div className={classes.segments}>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:1</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Recruitment of panel & building project's infrastructure
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:2</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Pilot testing
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:3</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Launch
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:4</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Collection, analysis & reporting
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:5</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Accountability & Evaluation
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:6</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Recommendation for the longterm sustainability of
                        {' '}
                        <span className={classes.highlight}>CICP</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SegmentB;
