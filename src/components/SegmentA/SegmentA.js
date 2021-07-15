import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingTop: theme.spacing(5),
        textAlign: 'center'
    },
    segmentContainer: {
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
    highlight: { color: '#CF112D' },
    mutedText: { color: '#6c757d' }
}));

const SegmentA = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h3>The <b>CICP</b> has <b>3 fundamental goals</b></h3>
            <Box className={classes.segmentContainer}>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3 className={classes.highlight}>(1)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;inform</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        the sectors' stakeholders and
                        researchers by surveying a representative
                        sample of registered charities regularly to
                        collect longitudinal data on critical
                        aspects of the charitable sector.
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3 className={classes.highlight}>(2)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;Build</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        a lasting and flexible
                        infrastructure to promote access and
                        understanding of the data collected about
                        the sector.
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3 className={classes.highlight}>(3)&nbsp;</h3><h3>To</h3><h3 className={classes.highlight}>&nbsp;advocate</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        for evidence-based
                        policymaking relevant to the charitable
                        sector.
                    </p>
                </Box>
            </Box>
            <p style={{
                width: '60%',
                paddingTop: '20px'
            }}>
                We propose a systems-oriented and
                purposeful approach to close the
                information gap about registered charities
                in Canada through regular surveys,
                charitable data aggregation and
                repository, and capacity-building to
                promote free and accessible data.
            </p>
        </Box>
    );
};

export default SegmentA;
