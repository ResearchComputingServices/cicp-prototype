import React from 'react';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Underline from '../Underline';
import Circle from '../Circle';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        height: '80vh',
        minHeight: 800
    },
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
        paddingTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contents: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400
    }
}));

function ProjectGovernance() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography className={classes.titleText} variant='h3'>About Us</Typography>
            </TitleBanner>
            <Divider/>
            <Box className={classes.body}>
                <Box mb={3}>
                    <Typography className={classes.subTitle} variant='h4'>
                        Project Governance
                        <Underline/>
                    </Typography>
                </Box>
                <Box className={classes.contents}>
                    <Circle>
                        <Typography variant='h5'>Graphic to Come</Typography>
                    </Circle>
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectGovernance;