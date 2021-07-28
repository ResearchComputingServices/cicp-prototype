import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import { useService } from '../../hooks';

export const useStyles = makeStyles(() => ({
    contents: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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

function WhatIsDataTellingUs() {
    const classes = useStyles();
    const historyService = useService('history');
    const linksA = [
        {
            name: 'Size of Organization',
            onClick: () => historyService.go('size-of-organization'),
        },
        { name: 'Location' },
    ];
    const linksB = [
        { name: 'Sector of Activity' },
        { name: 'Type of Charity' },
    ];
    return (
        <Box>
            <TitleBanner>
                What is Data Telling Us?
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

export default WhatIsDataTellingUs;
