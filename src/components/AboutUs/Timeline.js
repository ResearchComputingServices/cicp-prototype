import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Typography, Box } from '@material-ui/core';
import Underline from '../Underline';
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
        flexWrap: 'wrap',
        width: '100%',
        marginTop: theme.spacing(2),
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        width: 150,
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    highlight: { color: theme.palette.primary.main },
    mutedText: {
        color: '#6c757d',
        '&:hover': {
            color: '#424242',
            fontWeight: 550
        },
        cursor: 'pointer'
    },
}));

const Timeline = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box pb={3}>
                <Typography className={classes.subTitle} variant='h4'>
                    Project Timeline
                    <Underline />
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
                <Box mt={3}><ArrowForwardIosIcon color='primary'/></Box>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:2</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Pilot testing
                    </p>
                </div>
                <Box mt={3}><ArrowForwardIosIcon color='primary'/></Box>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:3</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Launch
                    </p>
                </div>
                <Box mt={3}><ArrowForwardIosIcon color='primary'/></Box>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:4</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Collection, analysis & reporting
                    </p>
                </div>
                <Box mt={3}><ArrowForwardIosIcon color='primary'/></Box>
                <div className={classes.segment}>
                    <div className={classes.title}>
                        <h3>Phase:5</h3>
                    </div>
                    <p className={classes.mutedText}>
                        Accountability & Evaluation
                    </p>
                </div>
                <Box mt={3}><ArrowForwardIosIcon color='primary'/></Box>
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

export default Timeline;
