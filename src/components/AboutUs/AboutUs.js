import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Circle from '../Circle';
import MissionStatement from '../MissionStatement'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(5) 
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
        <>
            <Typography className={classes.title} variant='h4'>About Us</Typography>
            <Box className={classes.root}>
                <MissionStatement />
                <Box pt={5} className={classes.links}>
                    {links.map(
                        (link, i) => (
                            <Circle key={i} color='white' background='black'>
                               <Typography variant='h5'>{link.name}</Typography>
                            </Circle>
                        ),
                    )}
                </Box>
            </Box>
        </>
    );
}

export default AboutUs;
