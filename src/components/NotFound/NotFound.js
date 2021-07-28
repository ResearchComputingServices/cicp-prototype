import React from 'react';
import Box from '@material-ui/core/Box';

function NotFound({ className, style }) {
    const Question = (
        <span
            aria-labelledby='question'
            role='img'
        >
            ❓
        </span>
    );
    return (
        <Box
            className={className}
            height='50vh'
            minHeight={700}
            my={5}
            style={style}
            textAlign='center'
        >
            {Question}
            404 Page Not Found
            {Question}
        </Box>
    );
}

export default NotFound;
