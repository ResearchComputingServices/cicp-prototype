import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Subtitle from '../Subtitle';
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
}));

function OpinionQuestions() {
    const data = {
        options: {
            chart: { toolbar: { show: false } },
            title: {
                text: 'How would you rate the government’s response to the COVID-19 crisis and it’s impact on the sector?',
                align: 'right',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: undefined,
                    color: '#263238',
                },
            },
            xaxis: { categories: ['Small Organization', 'Medium Organization', 'Large Organization'] },
            yaxis: {
                min: 1,
                max: 10,
            },
            plotOptions: { bar: { horizontal: true } },
            fill: { colors: ['#BF112B', '#BF112B', '#BF112B'] },
            dataLabels: { enabled: false },
        },
        series: [
            {
                name: 'Opinion',
                data: [3, 5, 7],
            },
        ],
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TitleBanner className={classes.title}>
                Size of Organization
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Subtitle>
                    Policy
                </Subtitle>
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
