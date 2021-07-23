import React from 'react';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';
import ProjectGovernance from '../components/ProjectGovernance';
import ResearchAndData from '../components/ResearchAndData';
import AnalyzingAndLearning from '../components/AnalyzingAndLearning'
import LearnToInterpretData from '../components/LearnToInterpretData'
import NotFound from '../components/NotFound';

export default [
    {
        path: '/',
        component: () => <Landing />,
    },
    {
        path: '/cicp-prototype',
        component: () => <Landing />,
    },
    {
        path: '/cicp-prototype/about-us',
        component: () => <AboutUs />,
    },
    {
        path: '/cicp-prototype/meet-the-team',
        component: () => <MeetTheTeam />,
    },
    {
        path: '/cicp-prototype/project-governance',
        component: () => <ProjectGovernance />,
    },
    {
        path: '/cicp-prototype/research-and-data',
        component: () => <ResearchAndData />,
    },
    {
        path: '/cicp-prototype/analyzing-and-learning',
        component: () => <AnalyzingAndLearning />,
    },
    {
        path: '/cicp-prototype/learn-to-interpret-data',
        component: () => <LearnToInterpretData />,
    },
    {
        path: '*',
        component: NotFound,
    },
];
