import React from 'react';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import MeetTheTeam from '../components/MeetTheTeam';
import ProjectGovernance from '../components/ProjectGovernance';
import ResearchAndData from '../components/ResearchAndData';
import AnalyzingAndLearning from '../components/AnalyzingAndLearning';
import LearnToInterpretData from '../components/LearnToInterpretData';
import NotFound from '../components/NotFound';
import WhatIsDataTellingUs from '../components/WhatIsDataTellingUs';
import OpinionQuestions from '../components/OpinionQuestions';
import SizeOfOrganization from '../components/SizeOfOrganization';

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
        path: '/research-and-data',
        component: () => <ResearchAndData />,
    },
    {
        path: '/analyzing-and-learning',
        component: () => <AnalyzingAndLearning />,
    },
    {
        path: '/learn-to-interpret-data',
        component: () => <LearnToInterpretData />,
    },
    {
        path: '/what-is-data-telling-us',
        component: () => <WhatIsDataTellingUs />,
    },
    {
        path: '/opinion-questions',
        component: () => <OpinionQuestions />,
    },
    {
        path: '/size-of-organization',
        component: () => <SizeOfOrganization />,
    },
    {
        path: '*',
        component: NotFound,
    },
];
