import React from 'react';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import { Typography, Box } from '@material-ui/core';
import { useService } from '../../hooks';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        height: '80vh',
        minHeight: 800
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
        height: '300px',
        width: '100%',
        flexWrap: 'wrap',
        '& img': {
            height: 150,
            width: 150,
            padding: '30px',
        },
    },
}));

function AnalyzingAndLearning() {
    const classes = useStyles();
    const historyService = useService('history')
    const links = [
        { name: 'What is the data telling us?' },
        {
            name: 'Learning to Interpret the Data',
            onClick: () => historyService.go('/cicp-prototype/learn-to-interpret-data')
        },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography className={classes.titleText} variant='h3'>Analyzing & Learning</Typography>
            </TitleBanner>
            <Divider/>
            <Box className={classes.contents}>
                <Box className={classes.links}>
                    {links.map(
                        (link, i) => (
                            <Circle key={i} onClick={link.onClick}>
                                <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default AnalyzingAndLearning;
