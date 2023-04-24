import React from 'react'
import { Box } from '@mui/material'
import Dashboard from '../../containers/Dashboard/Dashboard'

const Products = () => {

    const products = [
        {
            id: 1,
            name: 'Lenovo TV',
            price: 80000,
            category: 'TV',
            date: '2021-02-15',
        },
        {
            id: 2,
            name: 'Samsung LED TV',
            price: 90000,
            category: 'TV',
            date: '2021-06-09',
        }, {
            id: 3,
            name: 'Oneplus 9R',
            price: 37500,
            category: 'MOBILE',
            date: '2021-10-05',
        }
    ]

    return (
        <Dashboard>
            <Box>
                <h1>Products</h1>
            </Box>
        </Dashboard>
    )
}

export default Products