import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Underline from '../Underline';
import Chart from './Chart';
import Steps from './Steps';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

function OpinionQuestions() {
    const data = {
        options: {
            xaxis: { categories: ['Small Organization', 'Medium Organization', 'Large Organization'] },
            plotOptions: { bar: { horizontal: true } },
            fill: { colors: ['#BF112B', '#BF112B', '#BF112B'] },
            dataLabels: { enabled: false },
        },
        series: [
            {
                name: 'Organization',
                data: [10, 40, 70],
            },
        ],
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TitleBanner className={classes.title}>
                <Typography
                    className={classes.titleText}
                    variant='h3'
                >
                    Size of Organization
                </Typography>
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Typography
                    className={classes.subTitle}
                    variant='h4'
                >
                    Opinion Questions
                    <Underline />
                </Typography>
            </Box>
            <Steps />
            <Chart
                options={data.options}
                series={data.series}
            />
        </Box>
    );
}

export default OpinionQuestions;
