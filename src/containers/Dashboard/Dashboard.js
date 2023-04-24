import React from 'react'
import { Box } from '@mui/material';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import Header from '../../components/Layout/Header/Header';

const Dashboard = ({ children }) => {
    return (
        <>
            <Header />
            <Box height={64 + 'px'} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
            </Box>
        </>
    )
}

export default Dashboard