import React from 'react';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: { marginRight: '30%' },
    timelineContent: {
        fontSize: 18,
        '&:hover': { color: theme.palette.primary.main },
    },
    hoveredDot: { background: theme.palette.primary.main },
}));

export default function RightAlignedTimeline() {
    const classes = useStyles();
    const [currentHovered, setCurrentHovered] = React.useState(null);
    const handleMouseOver = index => setCurrentHovered(index);
    const handleMouseOut = () => setCurrentHovered(null);
    const steps = [
        'What is your overall level of trust in the Government when it comes to your charities current and future needs?',
        'What in your opinion, are the primary challenges facing the sector?',
        'What improvements do you think charities need to make in order to survive future crises?',
    ];
    return (
        <Timeline
            align='left'
            className={classes.root}
        >
            {steps.map((step, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot className={clsx({ [classes.hoveredDot]: currentHovered === index })} />
                        {index !== steps.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>

                    <TimelineContent className={classes.timelineContent}>
                        <Box
                            onMouseOut={handleMouseOut}
                            onMouseOver={() => handleMouseOver(index)}
                        >
                            {step}
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
