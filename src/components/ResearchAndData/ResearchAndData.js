import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';

export const useStyles = makeStyles(theme => ({
    root: {
        height: '80vh',
        minHeight: 800,
    },
    contents: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 600,
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
        height: '300px',
        width: '100%',
        '& img': {
            height: 150,
            width: 150,
            padding: '30px',
        },
    },
}));

function ResearchAndData() {
    const classes = useStyles();
    const links = [
        { name: 'Download Data' },
        { name: 'Research Notes & Papers' },
        { name: 'Feedback & Consultations' },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography
                    className={classes.titleText}
                    variant='h3'
                >
                    Research & Data
                </Typography>
            </TitleBanner>
            <Divider />
            <Box className={classes.contents}>
                <Box className={classes.links}>
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

export default ResearchAndData;
