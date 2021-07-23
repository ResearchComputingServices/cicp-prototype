import React from 'react';
import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Underline from '../Underline';
import { Typography, Box } from '@material-ui/core';
import Avatar from '../Avatar';
import { makeStyles } from '@material-ui/core/styles';

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
    avatar: {
        margin: theme.spacing(5),
    },
    titleText: {
        color: theme.palette.background.default,
        fontWeight: 900,
    },
    leadAvatars: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    subTitle: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    restAvatars: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    teamMember: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

function TeamMember({ name, role }) {
    const classes = useStyles();
    return <Box className={classes.teamMember}>
        <Avatar className={classes.avatar} src={avatarPlaceholder}/> 
        <Typography variant='h5'>
            <b>
                {role}
            </b>
        </Typography>
        <Typography variant='h6'>
            {name}
        </Typography>
    </Box>
}

function MeetTheTeam() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TitleBanner>
                <Typography className={classes.titleText} variant='h3'>About Us</Typography>
            </TitleBanner>
            <Divider/>
            <Box className={classes.body}>
                <Box mb={3}>
                    <Typography className={classes.subTitle} variant='h4'>
                        Meet the Team
                        <Underline/>
                    </Typography>
                    <Box className={classes.leadAvatars}>
                        <TeamMember role='Project Lead' name='Paloma Raggo' />
                        <TeamMember role='Project Coordinator' name='Callie Mathieson'/>
                    </Box>
                    <Box className={classes.leadAvatars}>
                        <TeamMember role='Research Associate' name='Susan Phillips'/>
                        <TeamMember role='Research Associate' name='Nathan Grasse'/>
                        <TeamMember role='Academic Advissory Council'/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MeetTheTeam;