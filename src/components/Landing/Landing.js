import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import carletonBackground from '../../assets/images/carleton-background.jpeg';
import { useService } from '../../hooks'
import Circle from '../Circle';
import Banner from '../Banner';

export const useStyles = makeStyles(() => ({
    root: {
        background: `url(${carletonBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: -5,
        height: '80vh',
        minHeight: 850
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

function Landing() {
    const classes = useStyles();
    const historyService = useService('history');
    const links = [
        {
            name: 'Research & Data',
            onClick: () => historyService.go('/cicp-prototype/research-and-data')
        },
        {
            name: 'Analysing & Learning',
            onClick: () => historyService.go('/cicp-prototype/analyzing-and-learning')
        },
        { name: 'Reports & Events' },
    ];
    return (
        <Box className={classes.root}>
            <Banner />
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
    );
}

export default Landing;
