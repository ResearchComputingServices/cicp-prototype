import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title';

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
        '& h1': {
            color: theme.palette.primary.main,
            textShadow: '0.1px 0 0 #000, 0 -0.1px 0 #000, 0 0.1px 0 #000, -0.1px 0 0 #000',
        },
    },
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <h1>CICP</h1>
            <Title />
        </div>
    );
};

export default Banner;
