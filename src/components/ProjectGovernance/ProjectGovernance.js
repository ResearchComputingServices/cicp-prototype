import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Subtitle from '../Subtitle';
import governance from '../../assets/images/governance.png';

export const useStyles = makeStyles(theme => ({
    body: {
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        height: 850,
        maxWidth: 800,
        '& img': {
            height: '100%',
            width: '100%',
        },
        '&:hover': { transform: 'scale(1.007)' },
    },
    highlight: { color: '#CF112D' },
    mutedText: {
        color: '#5e5e5e',
        '&:hover': {
            color: '#424242',
            fontWeight: 550,
        },
    },
}));

function ProjectGovernance() {
    const classes = useStyles();
    return (
        <Box>
            <TitleBanner>
                About Us
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Box mb={3}>
                    <Subtitle>
                        Project Governance
                    </Subtitle>
                </Box>
                <Box
                    pb={3}
                    textAlign='center'
                    width='80%'
                >
                    <p className={classes.mutedText}>
                        The entire project team will
                        meet quarterly to review
                        trends and emerging
                        themes, discuss the
                        following year and plan the
                        annual
                        {' '}
                        <span className={classes.highlight}>CICP</span>
                        {' '}
                        conference.
                    </p>
                </Box>
                <Paper
                    className={classes.paper}
                    elevation={10}
                >
                    <img
                        alt='governance-poster'
                        src={governance}
                    />
                </Paper>
            </Box>
        </Box>
    );
}

export default ProjectGovernance;
