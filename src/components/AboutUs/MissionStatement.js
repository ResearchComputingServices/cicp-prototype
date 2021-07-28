import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Subtitle from '../Subtitle';

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
        marginBottom: theme.spacing(5),
        width: '95%',
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    segmentTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    highlight: { color: '#CF112D' },
    mutedText: {
        color: '#5e5e5e',
        '&:hover': {
            color: '#424242',
            fontWeight: 550,
        },
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
                <Subtitle>
                    Mission Statement
                </Subtitle>
            </Box>
            <div className={classes.segments}>
                <p className={classes.mutedText}>
                    This ambitious project aims to ensure that policymakers, practitioners, researchers, and the general public have accurate, timely, and comprehensive information about the charitable sector in Canada. Through weekly surveys and reports, an online interactive information and training hub, and monthly policy briefs, the
                    {' '}
                    <span className={classes.highlight}>Charity Insights Canada Project [CICP]</span>
                    {' '}
                    offers an exhaustive overview of the trends, challenges, and opportunities facing the Canadian charitable sector.
                </p>
            </div>
            <div className={classes.segments}>
                <p className={classes.mutedText}>
                    The
                    {' '}
                    <span className={classes.highlight}>CICP</span>
                    {' '}
                    has three fundamental goals.
                </p>
            </div>
            <div className={classes.segments}>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(1)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;inform</h3>
                    </div>
                    <p className={classes.mutedText}>
                        the sectors' stakeholders and promote empirical research by surveying a
                        representative sample of registered charities in Canada regularly to collect weekly,
                        monthly, and quarterly data on the critical aspects, trends, and challenges at the forefront
                        of the charitable sector.
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(2)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;build</h3>
                    </div>
                    <p className={classes.mutedText}>
                        a lasting, sustainable, and flexible infrastructure to promote access and understanding of
                        the data collected about the sector.
                    </p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(3)&nbsp;</h3>
                        <h3>To</h3>
                        <h3 className={classes.highlight}>&nbsp;strengthen</h3>
                    </div>
                    <p className={classes.mutedText}>
                        policymakers’ ability to develop evidence-based policies considering the needs of
                        the sector and practitioners’ decision-making practices and strategic planning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionStatement;
