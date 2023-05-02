import React from 'react'
import Dashboard from '../../containers/Dashboard/Dashboard'
import { Paper } from '@mui/material'

const ProductForm = () => {
  return (
    <Dashboard>
        <Paper elevation={3} sx={{ padding: '20px', margin: '20px' }}>
            <h1>Product Form</h1>
        </Paper>
    </Dashboard>
  )
}

export default ProductForm