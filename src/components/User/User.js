import React from 'react'
import Dashboard from '../../containers/Dashboard/Dashboard'
import { Box, Paper } from '@mui/material'

const User = () => {
  return (
    <Dashboard>
      <Box>
        <Paper sx={{ width: '100%', overflow: 'hidden', p: 2 }}>
          <h3>User Component</h3>
        </Paper>
      </Box>
    </Dashboard>
  )
}

export default User