import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';
import TitleBanner from '../TitleBanner';
import Divider from '../Divider';
import Subtitle from '../Subtitle';
import Avatar from '../Avatar';

export const useStyles = makeStyles(theme => ({
    body: {
        paddingTop: theme.spacing(5),
        display: 'flex',
        paddingBottom: theme.spacing(5),
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: { margin: theme.spacing(5) },
    leadAvatars: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    restAvatars: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(5),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    teamMember: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function TeamMember({ name, teamRole }) {
    const classes = useStyles();
    return (
        <Box className={classes.teamMember}>
            <Avatar
                className={classes.avatar}
                src={avatarPlaceholder}
            />
            <Typography variant='h5'>
                <b>
                    {teamRole}
                </b>
            </Typography>
            <Typography variant='h6'>
                {name}
            </Typography>
        </Box>
    );
}

function MeetTheTeam() {
    const classes = useStyles();
    return (
        <Box>
            <TitleBanner>
                About Us
            </TitleBanner>
            <Divider />
            <Box className={classes.body}>
                <Box mb={3}>
                    <Subtitle>
                        Meet the Team
                    </Subtitle>
                    <Box className={classes.leadAvatars}>
                        <TeamMember
                            name='Paloma Raggo'
                            teamRole='Project Lead'
                        />
                        <TeamMember
                            name='Callie Mathieson'
                            teamRole='Project Coordinator'
                        />
                    </Box>
                    <Box className={classes.leadAvatars}>
                        <TeamMember
                            name='Susan Phillips'
                            teamRole='Research Associate'
                        />
                        <TeamMember
                            name='Nathan Grasse'
                            teamRole='Research Associate'
                        />
                        <TeamMember teamRole='Academic Advisory Council' />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MeetTheTeam;
