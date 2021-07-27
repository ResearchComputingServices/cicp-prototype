import React from 'react';
import clsx from 'clsx';
import { Switch, useHistory } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Tab,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '../Divider';
import twitterIcon from '../../assets/images/twitter.png';
import facebookIcon from '../../assets/images/facebook.png';
import Logo from '../Logo';
import HeaderTitle from '../HeaderTitle';
import { useService, useWindowSize } from '../../hooks';
import { routes } from '../../config';

export const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingLeft: 0,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    appBar: { background: theme.palette.background.default },
    img: {
        height: 40,
        width: 40,
    },
    main: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop: 80,
    },
    searchIcon: {
        color: '#4a4a4a',
        height: 70,
        width: 50,
        marginLeft: theme.spacing(1),
    },
    root: {
        textAlign: 'center',
        paddingBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            width: '60%',
            paddingTop: theme.spacing(5),
        },
        '& h1': { color: theme.palette.primary.main },
    },
    selected: {
        color: '#8c0a1e',
        fontWeight: 600,
    },
    tabs: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: 'black',
    },
    navBar: {
        background: theme.palette.background.default,
        borderColor: `${theme.palette.primary.main} white ${theme.palette.primary.main} white`,
        borderStyle: 'solid solid solid solid',
        borderWidth: '0px 0px 1px 0px',
        marginTop: -10,
        boxShadow: 'none',
    },
}));

function Main() {
    const classes = useStyles();
    const routesAssemblerService = useService('routesAssembler');
    const historyService = useService('history');
    const [currUrl, setCurrUrl] = React.useState(historyService.getUrl());
    const history = useHistory();
    const dimensions = useWindowSize();

    React.useEffect(() => history.listen(location => {
        const current_url = location.pathname;
        setCurrUrl(current_url);
    }), [history]);

    return (
        <>
            <AppBar
                className={classes.appBar}
                position='absolute'
            >
                <Toolbar className={classes.toolbar}>
                    <a href='/cicp-prototype'>
                        <Logo />
                    </a>
                    {!(currUrl === '/') && dimensions.width > 1000 && (
                        <HeaderTitle />
                    )}
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        justifyContent='center'
                    >
                        <img
                            alt='link1'
                            className={classes.img}
                            src={twitterIcon}
                        />
                        <img
                            alt='link2'
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
            <main className={classes.main}>
                <AppBar
                    className={classes.navBar}
                    position='relative'
                >
                    <Box className={classes.tabs}>
                        <Tab
                            className={clsx({
                                [classes.selected]: currUrl.includes('/about-us')
                                || currUrl.includes('/meet-the-team')
                                || currUrl.includes('/project-governance'),
                            })}
                            label='About us'
                            onClick={() => historyService.go('/about-us')}
                        />
                        <Tab label='Contact' />
                    </Box>
                </AppBar>
                <Switch>{routesAssemblerService.assemble(routes)}</Switch>
                <Divider />
            </main>
            <Box m={2}>
                <Typography variant='h6'>Supported By</Typography>
            </Box>
            <Box m={2}>
                <Typography variant='h6'>[Name of Sponsor]</Typography>
            </Box>
        </>
    );
}

export default Main;
