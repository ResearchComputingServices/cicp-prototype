import React from 'react';
import { Box, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        paddingBottom: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        position: 'relative',
        padding: '0px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px'
    },
    textWrapper: {
        width: '54%',
        maxWidth: '600px',
        minHeight: '320px',
        color: '#0d1a26'
    },
    title: {
        margin: '8px 0 0px',
        color: '#CF112D',
        minWidth: '60px'
    },
    mutedText: { color: '#6c757d' }
}));

const AnimatedChar = ({ children }) => {
    const classes = useStyles();
    return (
        <Zoom
            in
            style={{ transitionDuration: '700ms' }}
        >
            <h1 className={classes.title}>{children}</h1>
        </Zoom>
    );
};

const Banner = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            textAlign='center'
            width='90%'
        >
            <Box
                className={classes.container}
            >
                <Box
                    display='flex'
                    mt={2}
                >
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        m={2}
                    >
                        <AnimatedChar>C</AnimatedChar><h2>HARITY</h2>
                    </Box>
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        m={2}
                    >
                        <AnimatedChar>I</AnimatedChar><h2>NSIGHTS</h2>
                    </Box>
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        m={2}
                    >
                        <AnimatedChar>C</AnimatedChar><h2>ANADA</h2>
                    </Box>
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        m={2}
                    >
                        <AnimatedChar>P</AnimatedChar><h2>ROJECT</h2>
                    </Box>
                </Box>
            </Box>
            <h3>
                Because we all have a right and responsibility to know, learn and grow.
            </h3>
            <p
                className={classes.mutedText}
                style={{ paddingTop: '20px', width: '60%' }}
            >
                The Canadian charitable sector employs more than 10% of the country's fulltime
                workforce and is estimated to contribute more than $151 billion dollars
                annually to its GDP. Yet, up-to-date data on the sector is critically scarce.
                This ambitious project will ensure that policymakers, practitioners,
                researchers, and the general public have accurate, timely, and
                comprehensive information about the charitable sector in Canada. Through
                weekly surveys and reports, an online interactive information and training
                hub, and monthly policy briefs, the Charity Insights Canada Project [CICP]
                will offer an exhaustive overview of the trends, challenges, and
                opportunities facing the Canadian charitable sector.
            </p>
        </Box>
    );
};

export default Banner;
