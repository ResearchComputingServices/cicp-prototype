import React from 'react';
import { Switch } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import twitterIcon from '../../assets/images/twitter.png';
import facebookIcon from '../../assets/images/facebook.png';
import Logo from '../Logo';
import { useService } from '../../hooks';
import { routes } from '../../config';

export const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingLeft: 0,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    appBar: { background: 'white' },
    img: {
        height: 40,
        width: 40,
    },
    content: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        paddingTop: 80,
        width: '100%',
        height: '100%',
    },
    searchIcon: {
        color: '#4a4a4a',
        height: 70,
        width: 50,
        marginLeft: theme.spacing(1),
    },
}));

function Main() {
    const classes = useStyles();
    const routesAssemblerService = useService('routesAssembler');

    return (
        <>
            <AppBar
                className={classes.appBar}
                position='absolute'
            >
                <Toolbar className={classes.toolbar}>
                    <Logo />
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                    >
                        <img
                            className={classes.img}
                            src={twitterIcon}
                        />
                        <img
                            className={classes.img}
                            src={facebookIcon}
                        />
                        <Box
                            color='text.secondary'
                            ml={1}
                        >
                            <Typography>EN/FR</Typography>
                        </Box>
                        <SearchIcon className={classes.searchIcon} />
                    </Box>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <Switch>{routesAssemblerService.assemble(routes)}</Switch>
            </main>
        </>
    );
}

export default Main;
