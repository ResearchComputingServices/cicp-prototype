import React from 'react';
import { Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Main from '../Main';
import { useStore, useService } from '../../hooks';

function Root() {
    const theme = useStore('theme');
    const historyService = useService('history');

    return (
        <ThemeProvider theme={createTheme(theme)}>
            <CssBaseline />
            <Router history={historyService.getHistory()}>
                <Main />
            </Router>
        </ThemeProvider>
    );
}

export default Root;
