import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Underline from '../Underline';
import governance from '../../assets/images/governance.png';

export const useStyles = makeStyles(theme => ({
    root: {},
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        <Box className={classes.root}>
            <TitleBanner>
                <Typography
                    className={classes.titleText}
                    variant='h3'
                >
                    About Us
                </Typography>
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Box mb={3}>
                    <Typography
                        className={classes.subTitle}
                        variant='h4'
                    >
                        Project Governance
                        <Underline />
                    </Typography>
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
                    <img src={governance} />
                </Paper>
            </Box>
        </Box>
    );
}

export default ProjectGovernance;
