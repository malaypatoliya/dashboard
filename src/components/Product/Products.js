import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Dashboard from '../../containers/Dashboard/Dashboard';
import { Box, Divider, Typography, Stack, Button, TextField, Autocomplete, colors } from '@mui/material';

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Swal from "sweetalert2";




export default function Product1() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const products = [
        {
            id: 1,
            name: 'Lenovo TV',
            price: 80000,
            category: 'TV',
            date: '2021-02-15',
        }, {
            id: 2,
            name: 'Samsung LED TV',
            price: 90000,
            category: 'TV',
            date: '2021-06-09',
        },
    ]

    const [rows, setRows] = useState(products);

    useEffect(() => {
        // setRows(products);
    }, [])

    // For the Show table header dynamically
    const productKeys = Object.keys(products[0]);
    const productNames = productKeys.map((key) => {
        return key.charAt(0).toUpperCase() + key.slice(1);
    });
    productNames.shift();

    // For delete product
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
            }
        })
    };

    // Filter data
    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            setRows(products);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Dashboard>
            <Box>
                <Paper sx={{ width: '100%', overflow: 'hidden', p: 2 }}>

                    <Typography gutterBottom variant="h5" component='div' sx={{ p: 2, fontWeight: 'bold' }}>Product List</Typography>
                    <Divider />
                    <Box sx={{ height: '10px' }} />

                    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 300 }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.name || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="Product Name" />
                            )}
                        />
                        <Button
                            variant="contained"
                            endIcon={<AddCircleIcon />}
                            sx={{
                                backgroundColor: '#3f51b5',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#3f51b5',
                                    color: '#fff',
                                }
                            }}
                        >
                            Add
                        </Button>
                    </Box>

                    <TableContainer sx={{ minHeight: '250px', maxHeight: '415px' }}>
                        <Table stickyHeader aria-label="sticky table">

                            {/* For Table Heading */}
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align='left'
                                        style={{ minWidth: '10px', fontWeight: 'bold' }}
                                    >
                                        No.
                                    </TableCell>
                                    {
                                        productNames.map((name) => {
                                            return (
                                                <TableCell
                                                    align='left'
                                                    style={{ minWidth: '80px', fontWeight: 'bold' }}
                                                >
                                                    {name}
                                                </TableCell>
                                            )
                                        })
                                    }
                                    <TableCell
                                        align='left'
                                        style={{ minWidth: '20px', fontWeight: 'bold' }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            {/* For Table Body */}
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1}>

                                                {
                                                    productKeys.map((key) => {
                                                        return (
                                                            <TableCell align="left">
                                                                {row[key]}
                                                            </TableCell>
                                                        )
                                                    })
                                                }
                                                <TableCell align="left">
                                                    <Stack spacing={2} direction="row">
                                                        <EditIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "blue",
                                                                cursor: "pointer",
                                                            }}
                                                        // onClick={() => editUser(row.id)}
                                                        />
                                                        <DeleteIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "red",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() => handleDelete(row.id)}
                                                        />
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>

                        </Table>
                    </TableContainer>


                    <Divider />
                    {/* Pagination */}
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </Dashboard>

    );
}