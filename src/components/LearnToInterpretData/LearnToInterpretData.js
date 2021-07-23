import React from 'react';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        minHeight: 350
    },
    circle: {
        margin: 10
    }
}));

function LearnToInterpretData() {
    const classes = useStyles();
    const linksA = [
        { name: 'What is Data?' },
        { name: 'How to Read a Survey' },
        { name: 'What is a Condition' },
    ];
    const linksB = [
        { name: 'What is a Variable' },
        { name: 'Predictin Trends' },
        { name: 'Collecting' },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography className={classes.titleText} variant='h3'>Learn to Interpret Data</Typography>
            </TitleBanner>
            <Divider/>
            <Box className={classes.contents}>
                <Box className={classes.links}>
                    {linksA.map(
                        (link, i) => (
                            <Circle className={classes.circle} key={i} onClick={link.onClick}>
                                <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
                <Box className={classes.links}>
                    {linksB.map(
                        (link, i) => (
                            <Circle className={classes.circle} key={i} onClick={link.onClick}>
                                <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default LearnToInterpretData;
