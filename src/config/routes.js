import React from 'react';
import Landing from '../components/Landing';
import NotFound from '../components/NotFound';

export default [
    {
        path: '/',
        component: () => <Landing />,
    },
    {
        path: '*',
        component: NotFound,
    },
];
