import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        paddingTop: theme.spacing(1),
        textAlign: 'center'
    },
    segments: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
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
        width: '100%'
    },
    highlight: { color: '#CF112D' },
    mutedText: { color: '#6c757d' },
    longParagraph: {
        width: '60%',
        paddingTop: theme.spacing(5)
    }
}));

const SegmentA = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>
                Because we all have a right and responsibility to know, learn and grow.
            </h3>
            <p className={classes.mutedText}>
                The Canadian charitable sector employs more than 10% of the country's fulltime
                workforce and is estimated to contribute more than $151 billion dollars
                annually to its GDP. Yet, up-to-date data on the sector is critically scarce.
                This ambitious project will ensure that policymakers, practitioners,
                researchers, and the general public have accurate, timely, and
                comprehensive information about the charitable sector in Canada. Through
                weekly surveys and reports, an online interactive information and training
                hub, and monthly policy briefs, the Charity Insights Canada Project [CICP]
                will offer an exhaustive overview of the trends, challenges, and
                opportunities facing the Canadian charitable sector.
            </p>
            <h3>The <b>CICP</b> has <b>3 fundamental goals</b></h3>
            <div className={classes.segments}>
                <div className={classes.segment}>
                    <div className={classes.segmentTitle}>
                        <h3 className={classes.highlight}>(1)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;inform</h3>
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
                        <h3 className={classes.highlight}>(2)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;Build</h3>
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
                        <h3 className={classes.highlight}>(3)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;advocate</h3>
                    </div>
                    <p className={classes.mutedText}>
                        for evidence-based
                        policymaking relevant to the charitable
                        sector.
                    </p>
                </div>
            </div>
            <p className={classes.longParagraph}>
                We propose a systems-oriented and
                purposeful approach to close the
                information gap about registered charities
                in Canada through regular surveys,
                charitable data aggregation and
                repository, and capacity-building to
                promote free and accessible data.
            </p>
        </div>
    );
};

export default SegmentA;
