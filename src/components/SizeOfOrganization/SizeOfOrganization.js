import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import Subtitle from '../Subtitle';
import { useService } from '../../hooks';

export const useStyles = makeStyles(theme => ({
    contents: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        paddingTop: theme.spacing(5),
        display: 'flex',
        paddingBottom: theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
            onClick: () => historyService.go('/opinion-questions'),
        },
        { name: 'Collaboration' },
    ];
    const linksB = [
        { name: 'Workforce' },
        { name: 'Emerging themes' },
    ];
    return (
        <Box className={classes.root}>
            <TitleBanner>
                Size of Organization
            </TitleBanner>
            <Divider />
            <Box className={classes.contents}>
                <Box className={classes.body}>
                    <Subtitle>
                        Thematic Areas
                    </Subtitle>
                </Box>
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
