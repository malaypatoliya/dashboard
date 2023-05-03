import { Typography } from '@mui/material'
import React from 'react'

const MainHeading = ({text}) => {

    const initialMainHeadingStyle = {
        mb: 2,
        fontWeight: 'bold',
        color: 'var(--my-text-color)'
    }

    return (
        <Typography variant='h4' sx={initialMainHeadingStyle} >
            {text}
        </Typography>
    )
}

export default MainHeading