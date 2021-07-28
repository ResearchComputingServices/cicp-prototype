import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import Album from '@material-ui/icons/Album';
import Underline from '../Underline';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '10px 16px',
        width: 450,
    },
    secondaryTail: { backgroundColor: theme.palette.secondary.main },
}));

function Phases() {
    const classes = useStyles();
    const phases = [
        {
            title: 'Phase-1',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>• Recruitment of study panel</Typography>
                    <Typography>• Building of project infrastructure</Typography>
                </Paper>
            ),
        },
        {
            title: 'Phase-2',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>• Consultions w Academic Advisory panel</Typography>
                    <Typography>• Pilot testing : survey instrument; response rate; user interface; project reporting</Typography>
                </Paper>
            ),
        },
        {
            title: 'Phase-3',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>• Launch project</Typography>
                    <Typography>• Collection of data</Typography>
                    <Typography>• Analysis of data</Typography>
                    <Typography>• Reporting</Typography>
                </Paper>
            ),
        },
        {
            title: 'Phase-4',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>• Continued collection, analysis and reporting of data</Typography>
                    <Typography>• Recruitment of next cycles participants</Typography>
                </Paper>
            ),
        },
        {
            title: 'Phase-5',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>• Conclusion of yearly survey</Typography>
                    <Typography>• End of the year conference & event</Typography>
                    <Typography>• Evaluation of yearly survey</Typography>
                    <Typography>• Preparation for launch of following year survey</Typography>
                </Paper>
            ),
        },
        {
            title: 'Phase-6',
            content: (
                <Paper
                    className={classes.paper}
                    elevation={3}
                >
                    <Typography>
                        • Recommendation for the long-term sustainability of
                        {' '}
                        <b>CICP</b>
                    </Typography>
                </Paper>
            ),
        },
    ];
    return (
        <>
            <Box
                pb={3}
                pt={3}
            >
                <Typography
                    className={classes.subTitle}
                    variant='h4'
                >
                    Project Timeline
                    <Underline />
                </Typography>
            </Box>
            <Timeline>
                {phases.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography
                                color='textPrimary'
                                variant='body2'
                            >
                                {item.title}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                color={index % 2 === 0 ? 'primary' : 'secondary'}
                            >
                                {phases.length - 1 === index ? <Album /> : <ArrowDown />}
                            </TimelineDot>
                            {phases.length - 1 !== index && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            {item.content}
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    );
}

export default Phases;
