import React from 'react';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { useService } from '../../hooks';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Circle from '../Circle';
import Underline from '../Underline';

export const useStyles = makeStyles(theme => ({
    root: {},
    body: {
        paddingTop: theme.spacing(5),
        display: 'flex',
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    primaryCircle: {
        background: '#383838',
        color: 'white',
    },
    circle: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
    },
    arrowOne: {
        transform: 'rotate(150deg)',
        width: 150,
    },
    arrowTwo: {
        transform: 'rotate(90deg)',
        width: 200,
    },
    arrowThree: {
        transform: 'rotate(30deg)',
        width: 150,
    },
}));

function SizeOfOrganization() {
    const historyService = useService('history');
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography
                    className={classes.titleText}
                    variant='h3'
                >
                    About Us
                </Typography>
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Box mb={3}>
                    <Typography
                        className={classes.subTitle}
                        variant='h4'
                    >
                        Meet the Team
                        <Underline />
                    </Typography>
                    <Box className={classes.content}>
                        <Circle className={classes.primaryCircle}>
                            <Typography variant='h5'>Size of Organization</Typography>
                        </Circle>
                    </Box>
                    <Box className={classes.content}>
                        <Box>
                            <ArrowIcon
                                className={classes.arrowOne}
                                color='primary'
                            />
                        </Box>
                        <Box>
                            <ArrowIcon
                                className={classes.arrowTwo}
                                color='primary'
                            />
                        </Box>
                        <Box>
                            <ArrowIcon
                                className={classes.arrowThree}
                                color='primary'
                            />
                        </Box>
                    </Box>
                    <Box className={classes.content}>
                        <Circle className={classes.circle}>
                            <Typography variant='h5'>Policy Questions</Typography>
                        </Circle>
                        <Circle className={classes.circle}>
                            <Typography variant='h5'>HR Questions</Typography>
                        </Circle>
                        <Circle
                            className={classes.circle}
                            onClick={() => historyService.go('/opinion-questions')}
                        >
                            <Typography variant='h5'>Opinion / Sentiment Questions</Typography>
                        </Circle>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SizeOfOrganization;
