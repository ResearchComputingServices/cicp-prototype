import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Underline from '../Underline';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        paddingTop: theme.spacing(1),
        textAlign: 'center',
        marginBottom: theme.spacing(1),
    },
    segments: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    segmentTitle: {
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
            fontWeight: 550
        },
        cursor: 'pointer'
    },
    longParagraph: {
        width: '80%',
        paddingTop: theme.spacing(5),
    },
}));

const MissionStatement = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box mb={3}>
                <Typography className={classes.subTitle} variant='h4'>
                    Mission Statement
                    <Underline />
                </Typography>
            </Box>
            <h3>{'The '}<b>CICP</b>{' has '}<b>{'3 fundamental goals'}</b></h3>
            <div className={classes.segments}>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(1)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;inform</h3>
                    </div>
                    <p className={classes.mutedText}>
                        the sectors' stakeholders and
                        researchers by surveying a representative
                        sample of registered charities regularly to
                        collect longitudinal data on critical
                        aspects of the charitable sector.
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(2)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;Build</h3>
                    </div>
                    <p className={classes.mutedText}>
                        a lasting and flexible
                        infrastructure to promote access and
                        understanding of the data collected about
                        the sector.
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(3)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;advocate</h3>
                    </div>
                    <p className={classes.mutedText}>
                        for evidence-based
                        policymaking relevant to the charitable
                        sector.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionStatement;
