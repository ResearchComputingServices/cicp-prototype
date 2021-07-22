import React from 'react';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';
import ProjectGovernance from '../components/ProjectGovernance';
import NotFound from '../components/NotFound';

export default [
    {
        path: '/',
        component: () => <Landing />,
    },
    {
        path: '/about-us',
        component: () => <AboutUs />,
    },
    {
        path: '/meet-the-team',
        component: () => <MeetTheTeam />,
    },
    {
        path: '/project-governance',
        component: () => <ProjectGovernance />,
    },
    {
        path: '*',
        component: NotFound,
    },
];
