import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import charts from '../../assets/images/charts.svg';
import bulb from '../../assets/images/bulb.svg';
import shapes from '../../assets/images/shapes.svg';

const links = [
    {
        img: bulb,
        name: 'Link - A',
        svgBg: (
            <svg
                fill='none'
                fillRule='evenodd'
                height='303px'
                stroke='none'
                strokeWidth='1'
                viewBox='0 0 213 303'
                width='213px'>
                <circle
                    cx='60'
                    cy='157'
                    fill='#f5e1e1'
                    id='Oval-12-Copy-6'
                    opacity='0.45'
                    r='25' />
                <circle
                    cx='167.5'
                    cy='65.5'
                    fill='#f5e1e1'
                    id='Oval-12-Copy'
                    opacity='0.35'
                    r='11.5' />
                <rect
                    height='14'
                    id='Rectangle-14'
                    opacity='0.7'
                    rx='1'
                    stroke='#f5e1e1'
                    width='14'
                    x='0.5'
                    y='54.5' />
                <circle
                    cx='195.5'
                    cy='117.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='3.5' />
                <circle
                    cx='117'
                    cy='2'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='2' />
                <circle
                    cx='82'
                    cy='36'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='2' />
                <circle
                    cx='26.5'
                    cy='102.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='1.5' />
                <circle
                    cx='180.5'
                    cy='8.5'
                    id='Oval-8'
                    opacity='0.65'
                    r='4.5'
                    stroke='#f5e1e1' />
                <g
                    id='Group-18'
                    opacity='0.7'
                    stroke='#f5e1e1'
                    transform='translate(197.000000, 157.000000)'>
                    <path
                        d='M10.7320508,3 L15.0621778,10.5 C15.6144626,11.4565852 15.2867123,12.6797661 14.330127,13.2320508 C14.0260886,13.4075875 13.6812003,13.5 13.330127,13.5 L4.66987298,13.5 C3.56530348,13.5 2.66987298,12.6045695 2.66987298,11.5 C2.66987298,11.1489267 2.76228551,10.8040384 2.93782217,10.5 L7.26794919,3 C7.82023394,2.04341475 9.04341475,1.71566444 10,2.26794919 C10.3040384,2.44348586 10.5565141,2.69596158 10.7320508,3 Z'
                        id='Polygon-2' />
                </g>
                <g
                    id='Group-17'
                    opacity='0.65'
                    stroke='#f5e1e1'
                    transform='translate(124.000000, 284.000000)'>
                    <path
                        d='M13.7320508,6 L18.0621778,13.5 C18.6144626,14.4565852 18.2867123,15.6797661 17.330127,16.2320508 C17.0260886,16.4075875 16.6812003,16.5 16.330127,16.5 L7.66987298,16.5 C6.56530348,16.5 5.66987298,15.6045695 5.66987298,14.5 C5.66987298,14.1489267 5.76228551,13.8040384 5.93782217,13.5 L10.2679492,6 C10.8202339,5.04341475 12.0434148,4.71566444 13,5.26794919 C13.3040384,5.44348586 13.5565141,5.69596158 13.7320508,6 Z'
                        id='Polygon-2'
                        transform='translate(12.000000, 11.140576) rotate(25.000000) translate(-12.000000, -11.140576) ' />
                </g>
            </svg>
        ),
    },
    {
        img: charts,
        name: 'Link - B',
        svgBg: (
            <svg
                fill='none'
                fillRule='evenodd'
                height='295px'
                stroke='none'
                strokeWidth='1'
                viewBox='0 0 207 295'
                width='207px'>
                <rect
                    height='14'
                    id='Rectangle-14'
                    opacity='0.7'
                    rx='1'
                    stroke='#f5e1e1'
                    width='14'
                    x='192.5'
                    y='62.5' />
                <circle
                    cx='21.5'
                    cy='90.5'
                    fill='#f5e1e1'
                    id='Oval-12-Copy-2'
                    opacity='0.45'
                    r='21.5' />
                <circle
                    cx='162.5'
                    cy='163.5'
                    fill='#f5e1e1'
                    id='Oval-12-Copy-3'
                    opacity='0.35'
                    r='14.5' />
                <rect
                    height='10'
                    id='Rectangle-14'
                    opacity='0.7'
                    rx='1'
                    stroke='#f5e1e1'
                    transform='translate(77.500000, 287.500000) rotate(30.000000) translate(-77.500000, -287.500000) '
                    width='10'
                    x='72.5'
                    y='282.5' />
                <circle
                    cx='164.5'
                    cy='117.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='3.5' />
                <circle
                    cx='96'
                    cy='2'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='2' />
                <circle
                    cx='141'
                    cy='36'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='2' />
                <circle
                    cx='34.5'
                    cy='142.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='1.5' />
                <circle
                    cx='24.5'
                    cy='30.5'
                    id='Oval-8'
                    opacity='0.65'
                    r='4.5'
                    stroke='#f5e1e1' />
                <g
                    id='Group-19'
                    opacity='0.7'
                    stroke='#f5e1e1'
                    transform='translate(12.000000, 173.000000)'>
                    <path
                        d='M13.5216765,6.597413 L17.8518036,14.097413 C18.4040883,15.0539982 18.076338,16.2771791 17.1197527,16.8294638 C16.8157143,17.0050005 16.4708261,17.097413 16.1197527,17.097413 L7.45949871,17.097413 C6.35492921,17.097413 5.45949871,16.2019825 5.45949871,15.097413 C5.45949871,14.7463397 5.55191124,14.4014514 5.7274479,14.097413 L10.0575749,6.597413 C10.6098597,5.64082775 11.8330405,5.31307744 12.7896257,5.86536219 C13.0936641,6.04089886 13.3461399,6.29337458 13.5216765,6.597413 Z'
                        id='Polygon-2'
                        transform='translate(11.789626, 11.737989) rotate(40.000000) translate(-11.789626, -11.737989) ' />
                </g>
            </svg>
        ),
    },
    {
        img: shapes,
        name: 'Link - C',
        svgBg: (
            <svg
                fill='none'
                fillRule='evenodd'
                height='286px'
                stroke='none'
                strokeWidth='1'
                style={{ transform: 'translateX(-30px)' }}
                viewBox='0 0 215 286'
                width='215px'>
                <circle
                    cx='77'
                    cy='152'
                    fill='#f5e1e1'
                    id='Oval-12-Copy-4'
                    opacity='0.35'
                    r='10' />
                <circle
                    cx='194.5'
                    cy='74.5'
                    fill='#f5e1e1'
                    id='Oval-12-Copy-5'
                    opacity='0.45'
                    r='20.5' />
                <rect
                    height='13'
                    id='Rectangle-14'
                    opacity='0.7'
                    rx='1'
                    stroke='#f5e1e1'
                    width='13'
                    x='0.5'
                    y='99.5' />
                <circle
                    cx='44.5'
                    cy='117.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='3.5' />
                <circle
                    cx='132'
                    cy='2'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.5'
                    r='2' />
                <circle
                    cx='177'
                    cy='36'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='2' />
                <circle
                    cx='147.5'
                    cy='182.5'
                    fill='#f5e1e1'
                    id='Path'
                    opacity='0.6'
                    r='1.5' />
                <circle
                    cx='172'
                    cy='182'
                    id='Oval-8'
                    opacity='0.65'
                    r='7'
                    stroke='#f5e1e1' />
                <circle
                    cx='110'
                    cy='280'
                    id='Oval-8'
                    opacity='0.65'
                    r='5'
                    stroke='#f5e1e1' />
                <g
                    id='Group-20'
                    opacity='0.7'
                    stroke='#f5e1e1'
                    transform='translate(70.000000, 23.000000)'>
                    <path
                        d='M13.0221683,6.597413 L16.8974466,13.309592 C17.4497314,14.2661772 17.1219811,15.489358 16.1653958,16.0416428 C15.8613574,16.2171794 15.5164692,16.309592 15.1653958,16.309592 L7.41483918,16.309592 C6.31026968,16.309592 5.41483918,15.4141615 5.41483918,14.309592 C5.41483918,13.9585186 5.5072517,13.6136304 5.68278837,13.309592 L9.55806669,6.597413 C10.1103514,5.64082775 11.3335323,5.31307744 12.2901175,5.86536219 C12.5941559,6.04089886 12.8466316,6.29337458 13.0221683,6.597413 Z'
                        id='Polygon-2'
                        transform='translate(11.290118, 11.262929) rotate(40.000000) translate(-11.290118, -11.262929) ' />
                </g>
            </svg>
        ),
    },
];

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#bf112b',
        height: '300px',
        width: '100%'
    },
    svgBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        height: '200px',
        width: '200px'
    },
    link: {
        position: 'relative',
        width: '200px',
        height: '200px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    img: {
        height: 100,
        width: 100,
        padding: '30px'
    }
}));

const Links = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {links.map(
                (link, i) => <div
                    className={classes.link}
                    key={i}
                >
                    <div
                        className={classes.svgBg}
                    >
                        {link.svgBg}
                    </div>
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='column'
                    >
                        <img
                            alt={link.name}
                            className={classes.img}
                            src={link.img}
                        />
                        {link.name}
                    </Box>
                </div>
            )}
        </div>
    );
};

export default Links;
