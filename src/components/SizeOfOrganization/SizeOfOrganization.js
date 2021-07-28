import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import { useService } from '../../hooks';

export const useStyles = makeStyles(theme => ({
    root: {},
    contents: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        flexWrap: 'wrap',
        '& img': {
            height: 150,
            width: 150,
            padding: '30px',
        },
        minHeight: 350,
    },
    circle: { margin: 50 },
}));

function SizeOfOrganization() {
    const classes = useStyles();
    const historyService = useService('history');
    const linksA = [
        { name: 'Funding' },
        {
            name: 'Policy',
            onClick: () => historyService.go('/opinion-questions')
        },
        { name: 'Collaboration' }
    ];
    const linksB = [
        { name: 'Workforce' },
        { name: 'Emerging themes' },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography
                    className={classes.titleText}
                    variant='h3'
                >
                    Size of Organization
                </Typography>
            </TitleBanner>
            <Divider />
            <Box className={classes.contents}>
                <Box className={classes.links}>
                    {linksA.map(
                        (link, i) => (
                            <Circle
                                key={i}
                                className={classes.circle}
                                onClick={link.onClick}
                            >
                                <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
                <Box className={classes.links}>
                    {linksB.map(
                        (link, i) => (
                            <Circle
                                key={i}
                                className={classes.circle}
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

export default SizeOfOrganization;
