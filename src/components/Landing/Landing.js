import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import carletonBackground from '../../assets/images/carleton-background.jpeg';
import Layout from '../Layout';
import Circle from '../Circle';
import Banner from '../Banner';

export const useStyles = makeStyles(() => ({
    layout: {
        background: `url(${carletonBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 790,
        marginTop: -5,
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

function Landing() {
    const classes = useStyles();
    const links = [
        { name: 'Research & Data' },
        { name: 'Analysing & Learning' },
        { name: 'Reports & Events' },
    ];
    return (
        <Layout className={classes.layout}>
            <Banner />
            <div className={classes.links}>
                {links.map(
                    (link, i) => (
                        <Circle key={i}>
                            <Typography variant='h5'>{link.name}</Typography>
                        </Circle>
                    ),
                )}
            </div>
        </Layout>
    );
}

export default Landing;
