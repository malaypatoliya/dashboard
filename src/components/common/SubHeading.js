import { Typography } from '@mui/material'
import React from 'react'

const SubHeading = ({text}) => {

    const initialSubHeadingStyle = {
        mb: 2,
        fontWeight: 'bold',
        color: 'var(--my-text-color)'
    }

    return (
        <Typography variant='body1' sx={initialSubHeadingStyle} >
            {text}
        </Typography>
    )
}

export default SubHeading