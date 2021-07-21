import React from 'react';
import Title from '../Title';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    banner: {
        textAlign: 'center',
        paddingBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& p': {
            width: '60%',
            paddingTop: theme.spacing(5),
        },
        '& h1': { color: theme.palette.primary.main },
    },
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <h1>CICP</h1>
            <Title/>
        </div>
    );
};

export default Banner;
