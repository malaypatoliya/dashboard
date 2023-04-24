import React from 'react'
import { Box } from '@mui/material';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from '../../components/Layout/Header/Header';

const Dashboard = ({ children }) => {

    const [open, setOpen] = React.useState(true);
    return (
        <>
            <Header setOpen={setOpen} open={open} />
            <Box height={64 + 'px'} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar open={open} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Dashboard