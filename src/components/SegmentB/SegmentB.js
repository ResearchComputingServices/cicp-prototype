import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        paddingTop: theme.spacing(5),
        textAlign: 'center'
    },
    segmentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: theme.spacing(2)
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    highlight: { color: '#CF112D' },
    mutedText: { color: '#6c757d' }
}));

const SegmentB = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h3><b>Project Sequence</b></h3>
            <Box className={classes.segmentContainer}>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:1</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Recruitment of panel & building project's infrastructure
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:2</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Pilot testing
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:3</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Launch
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:4</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Collection, analysis & reporting
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:5</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Accountability & Evaluation
                    </p>
                </Box>
                <Box className={classes.segment}>
                    <Box
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        width='100%'
                    >
                        <h3>Phase:6</h3>
                    </Box>
                    <p className={classes.mutedText}>
                        Recommendation for the longterm sustainability of <span className={classes.highlight}>CICP</span>
                    </p>
                </Box>
            </Box>
        </Box>
    );
};

export default SegmentB;
