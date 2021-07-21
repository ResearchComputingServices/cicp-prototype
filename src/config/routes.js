import React from 'react';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
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
        path: '*',
        component: NotFound,
    },
];
