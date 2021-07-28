import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import { useService } from '../../hooks';
import Divider from '../Divider';
import Circle from '../Circle';
import MissionStatement from './MissionStatement';
import Timeline from './Timeline';

export const useStyles = makeStyles(theme => ({
    body: {
        paddingTop: theme.spacing(5),
        display: 'flex',
        paddingBottom: theme.spacing(8),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        margin: theme.spacing(5),
        '& img': {
            height: 150,
            width: 150,
            padding: '30px',
        },
    },
}));

function AboutUs() {
    const historyService = useService('history');
    const classes = useStyles();
    const links = [
        {
            name: 'Meet the Team',
            onClick: () => historyService.go('/meet-the-team'),
        },
        {
            name: 'Project Governance',
            onClick: () => historyService.go('/project-governance'),
        },
        { name: 'Supporters' },
    ];
    return (
        <Box>
            <TitleBanner className={classes.title}>
                About Us
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <MissionStatement />
                <Timeline />
                <Box
                    className={classes.links}
                    pb={3}
                    pt={5}
                >
                    {links.map(
                        (link, i) => (
                            <Circle
                                key={i}
                                onClick={link.onClick}
                            >
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
