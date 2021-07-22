import React from 'react';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '../Circle';
import MissionStatement from '../MissionStatement';
import Timeline from '../Timeline';

export const useStyles = makeStyles(theme => ({
    root: {},
    textBody: {
        paddingTop: theme.spacing(5),
        display: 'flex',
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '300px',
        width: '100%',
        '& img': {
            height: 150,
            width: 150,
            padding: '30px',
        },
    },
}));

function AboutUs() {
    const classes = useStyles();
    const links = [
        { name: 'Meet the Team' },
        { name: 'Project Governance' },
        { name: 'Supporters' },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner className={classes.title}>
                <Typography className={classes.titleText} variant='h3'>About Us</Typography>
            </TitleBanner>
            <Divider/>
            <Box className={classes.textBody}>
                <MissionStatement />
                <Timeline />
                <Box
                    className={classes.links}
                    pb={3}
                    pt={5}
                >
                    {links.map(
                        (link, i) => (
                            <Circle key={i}>
                                <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default AboutUs;
